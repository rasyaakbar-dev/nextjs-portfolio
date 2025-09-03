'use client'; // Untuk Link
import { Project } from '../lib/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-medium">
          Lihat Project
        </Link>
      </div>
    </div>
  );
}