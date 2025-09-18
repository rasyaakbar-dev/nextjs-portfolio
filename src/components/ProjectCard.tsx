'use client';
import { Project } from '../lib/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="aspect-auto overflow-hidden border-neutral-500 hover:border-blue-600 transition-colors border rounded-lg shadow-sm bg-[#262626] duration-300 flex flex-col justify-between">
      <div className="p-5 flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-neutral-300 mb-4 flex-grow">{project.description}</p>
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors font-medium">
          Lihat Project
        </Link>
      </div>
    </div>
  );
}