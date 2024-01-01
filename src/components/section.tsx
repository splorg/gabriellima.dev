import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Section = ({ children }: Props) => {
  return (
    <section className="flex flex-col gap-4 px-4 lg:px-8 pb-8 text-secondary">
      {children}
    </section>
  )
}
