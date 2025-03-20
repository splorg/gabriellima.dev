import { FC } from 'react'

type Props = {
  label: string
}

export const Badge: FC<Props> = ({ label }) => {
  return (
    <span
      className="bg-neutral-300 dark:bg-neutral-600 rounded-lg py-1 px-1.5 text-sm text-tertiary"
    >
      {label}
    </span>
  )
}
