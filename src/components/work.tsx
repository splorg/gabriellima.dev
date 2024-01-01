import { WORK } from '@/lib/data'

import { WorkCard } from './work-card'
import { CollapsableSection } from './collapsable-section'

export const Work = () => {
  return (
    <CollapsableSection title="Work">
      {WORK.map(work => (
        <WorkCard
          key={work.companyName}
          companyName={work.companyName}
          companyDescription={work.companyDescription}
          period={work.period}
          workDescription={work.workDescription}
        />
      ))}
    </CollapsableSection>
  )
}
