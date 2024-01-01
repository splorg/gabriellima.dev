import { PROJECTS } from '@/lib/data'

import { ProjectCard } from './project-card'
import { CollapsableSection } from './collapsable-section'

export const Projects = () => {
  return (
    <CollapsableSection title='Projects'>
      {PROJECTS.map(project => (
        <ProjectCard 
          title={project.title}
          description={project.description}
          link={project.link}
          technologies={project.technologies}
          imageSrc={project.imageSrc}
          key={project.title}
        />
      ))}
    </CollapsableSection>
  )
}
