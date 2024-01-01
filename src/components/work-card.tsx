import { WorkExperience } from '@/lib/definitions'

export const WorkCard = ({ companyName, period, companyDescription, workDescription }: WorkExperience) => {
  return (
    <>
      <div className="flex justify-between">
        <p>{companyName}</p>
        <p>{period}</p>
      </div>
      <hr className="border-black/60 dark:border-white/60 border-dotted" />
      <div className="text-justify flex flex-col gap-4">
        <p>
          {companyDescription}
        </p>
        <p>
          {workDescription}
        </p>
      </div>
    </>
  )
}
