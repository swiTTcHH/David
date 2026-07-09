import { useState } from "react";

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  teamInfo?: string;
  bullets: string[];
  color: string;
  bgColor: string;
};

const experiences: ExperienceItem[] = [
  {
    id: "bitex",
    role: "Frontend Developer",
    company: "BITEX Consulting Services",
    location: "Lagos State, Nigeria (Remote)",
    period: "June 2025 – Present",
    teamInfo: "Remote-collaborative team",
    bullets: [
      "Build and maintain responsive, user-friendly web applications using React.js and Tailwind CSS, working closely with designers and backend developers in a distributed team environment.",
      "Integrate RESTful APIs to fetch and render dynamic content, handling data exchange between frontend and backend services.",
      "Collaborate with designers to ensure UI implementation matches design specifications, communicating deviations clearly and proactively.",
      "Build reusable, scalable, well-documented UI components following atomic design and industry best practices.",
      "Troubleshoot and debug across major browsers and devices to ensure consistent performance and scalability."
    ],
    color: "text-accent1",
    bgColor: "bg-accent1",
  },
  {
    id: "bfi",
    role: "Web Development & Maintenance Officer",
    company: "BFI Insights",
    location: "Lekki, Lagos State, Nigeria",
    period: "August 2024 – Present",
    bullets: [
      "Build and maintain company websites using WordPress, with custom HTML, CSS, and PHP for theme modifications and layout adjustments.",
      "Manage content updates, plugin maintenance, security patches, and backups to ensure ongoing site reliability.",
      "Collaborate with the marketing team to plan and deliver visually appealing, on-brand digital content.",
      "Monitor website analytics and performance metrics to identify and implement optimisations."
    ],
    color: "text-accent2",
    bgColor: "bg-accent2",
  },
  {
    id: "interkel",
    role: "Web Development Officer",
    company: "Interkel Technologies",
    location: "Ikoyi, Lagos State, Nigeria",
    period: "October 2024 – January 2025",
    bullets: [
      "Collaborated with a team to build mydelsudues.ng, a dues payment system for Delta State University students, integrating backend services with the frontend interface.",
      "Delivered training sessions on frontend fundamentals (HTML, CSS, JavaScript) and Microsoft Office 365.",
      "Maintained internal systems and provided IT support, ensuring software and network reliability."
    ],
    color: "text-accent3",
    bgColor: "bg-accent3",
  },
  {
    id: "pointmark",
    role: "Web Development & Maintenance Officer",
    company: "Pointmark Associates Limited",
    location: "Ibadan, Oyo State, Nigeria",
    period: "August 2022 – Present",
    bullets: [
      "Designed and developed a company website on WordPress, customising themes and layouts using HTML and CSS.",
      "Managed ongoing content updates, plugin maintenance, security patches, and backups independently.",
      "Worked alongside the marketing team remotely to align web content with brand and campaign goals."
    ],
    color: "text-muted",
    bgColor: "bg-muted",
  }
];

export default function Experience() {
  const [activeId, setActiveId] = useState<string>("bitex");

  const current = experiences.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="border-t border-ink py-16">
      {/* Header */}
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-4xl font-bold tracking-tight">
          Work <span className="text-accent2">Experience</span>
        </h2>
        <span className="text-muted text-sm mb-1">
          Professional Journey &amp; Milestones
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Sidebar Selector */}
        <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible border-2 border-ink bg-card-bg">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveId(exp.id)}
              className={`w-full text-left px-5 py-4 text-sm font-bold border-b border-ink last:border-b-0 md:border-b md:border-r-0 border-r last:border-r-0 transition-all duration-200 cursor-pointer whitespace-nowrap md:whitespace-normal
                ${
                  activeId === exp.id
                    ? `${exp.bgColor} text-white`
                    : "bg-card-bg text-ink hover:bg-paper"
                }`}
            >
              <div className="text-xs uppercase opacity-75 mb-1">{exp.period}</div>
              <div className="truncate md:normal-case font-semibold">{exp.company}</div>
            </button>
          ))}
        </div>

        {/* Details Display Panel */}
        <div className="md:col-span-8 border-2 border-ink bg-card-bg p-6 relative shadow-[4px_4px_0px_0px_rgba(13,13,13,1)]">
          {/* Top corner design accent */}
          <div className={`absolute top-0 right-0 h-2 left-0 ${current.bgColor}`} />

          <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-ink">{current.role}</h3>
              <p className={`font-semibold ${current.color} text-lg`}>
                {current.company}
              </p>
            </div>
            <div className="text-right sm:text-right text-left">
              <span className="inline-block bg-paper border border-ink text-ink text-xs font-bold px-2 py-1 uppercase">
                {current.period}
              </span>
              <p className="text-muted text-xs mt-1 font-medium">{current.location}</p>
              {current.teamInfo && (
                <p className="text-accent1 text-xs font-bold mt-0.5">{current.teamInfo}</p>
              )}
            </div>
          </div>

          {/* Core Bullet Achievements */}
          <ul className="space-y-4">
            {current.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full ${current.bgColor} mt-1.5 shrink-0`} />
                <span className="text-ink text-sm leading-relaxed font-medium">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
