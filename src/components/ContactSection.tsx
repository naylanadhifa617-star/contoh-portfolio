import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, Instagram } from 'lucide-react';

// ❗ GANTI JADI RELATIVE PATH
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

import { z } from 'zod';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormData>;

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100),
  email: z.string().trim().email('Email tidak valid').max(255),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naylanadhifa617@gmail.com',
    href: 'mailto:naylanadhifa617@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@naylandhf.__',
    href: 'https://instagram.com',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormErrors;
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // ❗ sementara fake submit biar ga error dulu
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih sudah menghubungi!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      toast({
        title: 'Gagal',
        description: 'Coba lagi ya!',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-medium mb-2 block">Kontak</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* INFO */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow"
              >
                <info.icon className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-blue-500">{info.label}</p>
                  <p className="font-medium text-blue-900">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow">

            <Input name="name" placeholder="Nama" value={formData.name} onChange={handleChange} />
            <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <Input name="subject" placeholder="Subjek" value={formData.subject} onChange={handleChange} />
            <Textarea name="message" placeholder="Pesan" value={formData.message} onChange={handleChange} />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Mengirim...' : 'Kirim'}
            </Button>

          </form>

        </div>
      </div>
    </section>
  );
}