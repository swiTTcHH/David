import React, { useState } from "react";

type Skill = {
  name: string;
  icon: string;
};

type Category = {
  id: string;
  label: string;
  color: string;
  borderColor: string;
  bgColor: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "languages",
    label: "Languages",
    color: "text-accent1",
    borderColor: "border-accent1",
    bgColor: "bg-accent1",
    skills: [
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "HTML5", icon: "H5" },
      { name: "CSS3", icon: "CS" },
      { name: "Python", icon: "PY" },
      { name: "SQL", icon: "SQ" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    color: "text-accent2",
    borderColor: "border-accent2",
    bgColor: "bg-accent2",
    skills: [
      { name: "React", icon: "Re" },
      { name: "React Native", icon: "RN" },
      { name: "Next.js", icon: "Nx" },
      { name: "Expo", icon: "Ex" },
      { name: "Redux", icon: "Rx" },
      { name: "Zustand", icon: "Zu" },
      { name: "TailwindCSS", icon: "Tw" },
      { name: "Styled Components", icon: "SC" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    color: "text-muted",
    borderColor: "border-muted",
    bgColor: "bg-muted",
    skills: [
      { name: "Git & GitHub", icon: "Gh" },
      { name: "Figma", icon: "Fi" },
      { name: "VS Code", icon: "VS" },
      { name: "Postman", icon: "Po" },
      { name: "Firebase", icon: "Fb" },
      { name: "Supabase", icon: "Sb" },
      { name: "Vercel", icon: "Ve" },
      { name: "Expo EAS", icon: "EA" },
    ],
  },
  {
    id: "practices",
    label: "Practices",
    color: "text-ink",
    borderColor: "border-ink",
    bgColor: "bg-ink",
    skills: [
      { name: "Responsive Design", icon: "RD" },
      { name: "REST APIs", icon: "RE" },
      { name: "Component Architecture", icon: "CA" },
      { name: "Performance Optimization", icon: "PO" },
      { name: "Accessibility (a11y)", icon: "A1" },
      { name: "Agile / Scrum", icon: "AG" },
      { name: "CI / CD", icon: "CI" },
      { name: "Cross-Platform Dev", icon: "XP" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("languages");

  const active = categories.find((c) => c.id === activeTab)!;

  return (
    <section className="border-t border-ink py-12">
      {/* Heading */}
      <div className="flex items-end gap-4 mb-8">
        <h2 className="text-4xl font-bold tracking-tight">
          Technical <span className="text-accent1">Skills</span>
        </h2>
        <span className="text-muted text-sm mb-1">
          Frontend &amp; Mobile (React Native)
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-0 mb-8 border-2 border-ink max-w-max overflow-hidden">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-200 border-r border-ink last:border-r-0 cursor-pointer
              ${
                activeTab === cat.id
                  ? `${cat.bgColor} text-white`
                  : "bg-paper text-ink hover:bg-ink hover:text-paper"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {active.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
            color={active.color}
            borderColor={active.borderColor}
            bgColor={active.bgColor}
          />
        ))}
      </div>

      {/* Category description bar */}
      <div className="mt-8 flex items-center gap-3">
        <div
          className={`w-1 h-8 ${active.bgColor}`}
          style={{ minWidth: 4 }}
        />
        <p className="text-muted text-sm">
          {active.id === "languages" &&
            "The foundational languages powering every interface — from pixel-perfect markup to strongly typed logic."}
          {active.id === "frameworks" &&
            "Ecosystems and UI libraries used to build scalable, maintainable web and cross-platform mobile apps."}
          {active.id === "tools" &&
            "The toolchain: version control, design handoff, cloud backends, and deployment platforms."}
          {active.id === "practices" &&
            "Engineering disciplines that keep code clean, apps fast, and products shippable."}
        </p>
      </div>
    </section>
  );
}

type SkillCardProps = {
  skill: Skill;
  index: number;
  color: string;
  borderColor: string;
  bgColor: string;
};

function SkillCard({ skill, index, color, borderColor, bgColor }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animationDelay: `${index * 60}ms`,
        animationFillMode: "both",
      }}
      className={`group flex items-center gap-3 border-2 ${borderColor} p-3 
        transition-all duration-200 cursor-default
        ${hovered ? `${bgColor} text-white` : "bg-card-bg text-ink"}`}
    >
      {/* Icon badge */}
      <span
        className={`text-xs font-bold font-mono w-8 h-8 flex items-center justify-center shrink-0 border
          transition-all duration-200
          ${hovered ? "border-white/40 text-white" : `${color} ${borderColor}`}`}
      >
        {skill.icon}
      </span>

      {/* Skill name */}
      <span className="text-sm font-semibold leading-tight">{skill.name}</span>
    </div>
  );
}
