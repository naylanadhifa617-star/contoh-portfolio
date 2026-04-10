{/* SKILLS & WORKS */}
<div className="max-w-6xl mx-auto mt-20 space-y-10">

  {/* SKILLS */}
  <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-xl">
    <h3 className="text-2xl font-bold text-blue-900 mb-4">
      Skills
    </h3>

    <div className="flex flex-wrap gap-3">
      {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:scale-105 transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* WORKS */}
  <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-xl">
    <h3 className="text-2xl font-bold text-blue-900 mb-4">
      Works
    </h3>

    <p className="text-blue-700">
      (Isi project kamu di sini nanti, misalnya portfolio, website, dll)
    </p>
  </div>

</div>