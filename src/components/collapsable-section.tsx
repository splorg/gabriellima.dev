import { ReactNode } from 'react'

import { PiArrowsVertical } from 'react-icons/pi'

type Props = {
  title: string
  children: ReactNode
}

export const CollapsableSection = ({ title, children }: Props) => {
  return (
    <details className="px-4 lg:px-8 pb-8">
      <summary className="cursor-pointer flex gap-2 items-center list-none text-lg text-tertiary font-medium hover:text-primary transition-colors duration-300 group-open:pb-4">
        <span>{title}</span>
        <PiArrowsVertical  />
        <hr className="w-full border-black/60 dark:border-white/60" />
      </summary>
      <section className="flex flex-col gap-4 text-secondary mt-4">
        {children}
      </section>
    </details>
  )
}
