import { PiArrowUpRight } from 'react-icons/pi'

type Props = {
  label: string
  href: string
}

export const ExternalLink = ({ label, href }: Props) => {
  return (
    <>
      <a
        className="inline-block gap-2 underline-offset-[3px] underline text-secondary hover:text-primary hover: transition-all duration-300"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      <span className="ml-1 mr-1 h-3 w-3 inline-block">
        <PiArrowUpRight />
      </span>
    </>
  )
}
