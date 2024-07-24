import { ReactNode } from "react";

const skills = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScipt",
  "TypeScript",
  "React",
  "NextJs",
  "Rust",
  "Python",
  "C/C++",
  "Git",
  "GitHub",
];

const SkillList = () => {
  const children: Array<ReactNode> = [];
  for (let i = 0; i < skills.length; i++) {
      children.push(
          <h1
              key={i}
              className="transition-all cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
          >
              {skills[i]}
          </h1>,
      );
  }
  return (
      <div className="grid grid-cols-4 gap-5 justify-items-center mt-10">
          {children}
      </div>
  );
};

export default SkillList;