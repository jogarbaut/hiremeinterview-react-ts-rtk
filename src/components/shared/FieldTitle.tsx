type Props = {
  children: React.ReactNode
}

const FieldTitle = ({children}: Props) => {
  return (
    <h1 className="text-3xl font-bold py-12">
      {children}
    </h1>
  )
}

export default FieldTitle