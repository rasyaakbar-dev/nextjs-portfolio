import projects from '../../lib/projects';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Project Saya</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}