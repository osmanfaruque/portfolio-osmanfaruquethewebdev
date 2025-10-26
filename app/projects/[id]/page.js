import { projectsData } from '@/utils/data/projects-data';
import SingleProject from '@/app/components/homepage/projects/single-project';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id.toString() }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);
  return project ? { title: `${project.name} | Osman Faruque`, description: project.description } : { title: 'Not Found' };
}

export default function ProjectDetailsPage({ params }) {
  const project = projectsData.find((p) => p.id.toString() === params.id);
  if (!project) notFound();
  return <SingleProject project={project} />;
}
