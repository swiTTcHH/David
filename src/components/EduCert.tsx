import { useState } from "react";

type Certification = {
  title: string;
  provider: string;
  date: string;
  color: string;
  bgColor: string;
};

const certifications: Certification[] = [
  {
    title: "Full Stack Web Development",
    provider: "Udemy",
    date: "October 2023",
    color: "text-accent1",
    bgColor: "bg-accent1",
  },
  {
    title: "Website Development Training",
    provider: "Novate",
    date: "September 2022",
    color: "text-accent2",
    bgColor: "bg-accent2",
  },
  {
    title: "Soft Skills Training",
    provider: "Jobberman",
    date: "January 2021",
    color: "text-accent3",
    bgColor: "bg-accent3",
  },
  {
    title: "Microsoft Office Training",
    provider: "New Horizons",
    date: "July 2014",
    color: "text-muted",
    bgColor: "bg-muted",
  },
];

export default function EduCert() {
  const [completedList, setCompletedList] = useState<Record<string, boolean>>({});

  const toggleCheck = (title: string) => {
    setCompletedList((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section className="border-t border-ink py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Education (Left) */}
        <div className="md:col-span-5 flex flex-col justify-between border-2 border-ink bg-card-bg p-6 shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
          <div>
            <div className="flex items-end gap-3 mb-6">
              <h3 className="text-3xl font-extrabold tracking-tight text-ink">Education</h3>
              <span className="text-accent1 text-xl font-bold font-mono">🎓</span>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-accent1 pl-4 space-y-1.5">
                <span className="inline-block bg-accent1/10 text-accent1 text-[11px] font-black uppercase px-2 py-0.5 border border-accent1/35">
                  Class of 2024
                </span>
                <h4 className="text-xl font-black text-ink">B.Sc. Microbiology</h4>
                <p className="font-semibold text-muted text-sm">
                  Obafemi Awolowo University
                </p>
                <p className="text-xs text-muted font-semibold">
                  Ile-Ife, Nigeria
                </p>
              </div>

              <div className="bg-paper p-4 border border-ink text-xs font-semibold leading-relaxed text-ink mt-6">
                <strong>From Science to Software:</strong> Applying analytical thinking, structured debugging, and process systems engineering from laboratory principles directly into component-based software architecture and robust development flows.
              </div>
            </div>
          </div>
        </div>

        {/* Certifications (Right) */}
        <div className="md:col-span-7 flex flex-col justify-between border-2 border-ink bg-card-bg p-6 shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
          <div>
            <div className="flex items-end justify-between mb-6">
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-extrabold tracking-tight text-ink">Certifications</h3>
                <span className="text-accent2 text-xl font-bold font-mono">📜</span>
              </div>
              <span className="text-xs text-muted font-bold">
                {Object.values(completedList).filter(Boolean).length} / {certifications.length} Verified
              </span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => {
                const isChecked = completedList[cert.title];
                return (
                  <div
                    key={cert.title}
                    onClick={() => toggleCheck(cert.title)}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 border-2 border-ink cursor-pointer select-none transition duration-200
                      ${isChecked ? "bg-paper border-ink" : "bg-card-bg hover:bg-paper"}`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Interactive checkbox indicator */}
                      <div className={`w-5 h-5 border-2 border-ink flex items-center justify-center font-bold text-xs shrink-0 mt-0.5
                        ${isChecked ? `${cert.bgColor} text-white` : "bg-white text-transparent"}`}
                      >
                        ✓
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold text-ink leading-tight ${isChecked ? 'line-through opacity-60' : ''}`}>
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted font-bold">{cert.provider}</p>
                      </div>
                    </div>

                    <span className="text-[10px] font-black uppercase text-ink/80 font-mono tracking-wider pl-8 sm:pl-0">
                      {cert.date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
