import SkillIcon from '../../components/SkillIcon';
import { Skill } from '../../lib/types';

const skillsData: Skill[] = [
  { name: 'HTML', iconName: 'html' },
  { name: 'CSS', iconName: 'css' },
  { name: 'JavaScript', iconName: 'javascript' },
  { name: 'React', iconName: 'react' },
  { name: 'Next.js', iconName: 'nextjs' },
  { name: 'Tailwind CSS', iconName: 'tailwindcss' },
  { name: 'TypeScript', iconName: 'typescript' },
  { name: 'C#', iconName: 'csharp'},
];

export default function SkillsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Kemampuan Saya</h1>
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 bg-neutral-900 rounded-lg shadow-sm border">
            <SkillIcon iconName={skill.iconName} />
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}