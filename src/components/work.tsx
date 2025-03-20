import { WORK } from '@/lib/data'

import { WorkCard } from './work-card'
import { CollapsableSection } from './collapsable-section'

export const Work = () => {
  return (
    <CollapsableSection title="Work">
      <div className="flex flex-col gap-4">
        {WORK.map(work => (
          <WorkCard
            key={work.companyName}
            work={work}
          />
        ))}
      </div>
    </CollapsableSection>
  )
}
