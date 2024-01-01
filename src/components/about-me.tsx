import { ABOUT_ME } from '@/lib/data'

import { Section } from './section'
import { SectionTitle } from './section-title'

export const AboutMe = () => {
  return (
    <Section>
      <SectionTitle title="About me" />
      <div className="flex flex-col gap-4 text-justify">
        {ABOUT_ME.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
