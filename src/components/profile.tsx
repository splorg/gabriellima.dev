import { PiEnvelopeFill, PiGithubLogoFill, PiLinkedinLogoFill } from 'react-icons/pi'

import { ExternalLink } from './external-link'

export const Profile = () => {
  return (
    <section className="mx-auto py-8 lg:pt-0 lg:min-w-fit lg:pl-8">
      <div>
        <div className="w-60 h-60 rounded-full overflow-hidden mx-auto lg:w-60 lg:h-60">
          <img
            src="/profile.webp"
            alt="Gabriel Lima's Github avatar."
            className="object-cover"
          />
        </div>
        <div className="mx-auto py-4 w-fit">
          <h1 className="text-xl font-medium">
            Gabriel Lima
          </h1>
          <h2 className="text-xl text-secondary">
            Full Stack Software Engineer
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-8 pb-8 lg:px-0">
        <ul className="flex flex-grow flex-wrap gap-6 text-secondary lg:flex-col">
          <li className="flex items-center gap-2">
            <PiLinkedinLogoFill  />
            <ExternalLink label="Linkedin" href="https://www.linkedin.com/in/limabs002/" />
          </li>
          <li className="flex items-center gap-2">
            <PiGithubLogoFill />
            <ExternalLink href="https://github.com/splorg" label="Github" />
          </li>
          <li className="flex items-center gap-2">
            <PiEnvelopeFill  />
            gabriel.lbs002@gmail.com
          </li>
        </ul>
      </div>
    </section>
  )
}
