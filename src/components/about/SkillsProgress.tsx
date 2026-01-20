interface Skill {
  name: string;
  percentage: number;
}

interface SkillsProgressProps {
  title: string;
  skills: Skill[];
}

export default function SkillsProgress({ title, skills }: SkillsProgressProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            {/* Skill name and percentage */}
            <div className="flex justify-between items-center">
              <span className="text-text-secondary font-medium">{skill.name}</span>
              <span className="text-text-secondary font-medium">{skill.percentage}%</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-secondary-dark rounded-full h-2 overflow-hidden">
              <div
                className="bg-accent-blue h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
