'use client'; // Untuk dynamic import
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'; // Gunakan ikon yang benar

// Peta nama ikon ke komponen ikon
const iconMap: { [key: string]: React.ElementType } = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  // Tambahkan skill lain sesuai kebutuhan
};

interface SkillIconProps {
  iconName: string;
  className?: string; // Untuk styling tambahan
}

export default function SkillIcon({ iconName, className = 'text-3xl' }: SkillIconProps) {
  const IconComponent = iconMap[iconName.toLowerCase()];

  if (!IconComponent) {
    // Tampilkan ikon default atau placeholder jika tidak ditemukan
    return <span className={className}>?</span>;
  }

  return <IconComponent className={className} />;
}