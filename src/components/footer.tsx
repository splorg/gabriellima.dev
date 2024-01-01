import { ExternalLink } from './external-link'

export const Footer = () => {
  return (
    <footer
      className="text-secondary mx-auto max-w-2xl pb-8 pt-4 px-8 text-sm text-center"
    >
      <p>
        © 2023 - {new Date().getFullYear()} Gabriel Lima. {' '} <ExternalLink label="Source" href="https://github.com/splorg/splorg.online" />
      </p>
    </footer>
  )
}
