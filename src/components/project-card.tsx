import { Project } from '@/lib/definitions'

import { ExternalLink } from './external-link'
import { Badge } from './badge'

export const ProjectCard = ({ title, description, imageSrc, technologies, link, linkLabel }: Project) => {
  return (
    <div className="py-4 flex flex-col gap-4 items-center lg:flex-row lg:items-start">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="w-36 h-36 rounded-lg"
        />
      ) : null}
      <div className="flex flex-col gap-4 text-justify">
        <p className="font-medium text-tertiary">{title}</p>
        <span>
          <ExternalLink label={linkLabel} href={link} />
        </span>
        <p className="text-secondary">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <Badge
              key={tech}
              label={tech}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
