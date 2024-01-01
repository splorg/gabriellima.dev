type Props = {
  title: string
}

export const SectionTitle = ({ title }: Props) => {
  return (
    <h3 className="text-lg text-tertiary font-medium">
      {title}
    </h3>
  )
}
