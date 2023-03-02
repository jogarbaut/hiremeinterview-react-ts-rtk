import Header from "@/components/shared/Header";
import EditCustomSetForm from "./EditCustomSetForm";
type Props = {}

const EditCustomSet = (props: Props) => {
  return (
    <section id="customSets">
      <Header>Edit Custom Set</Header>
      <div className="w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <EditCustomSetForm />
        </div>
      </div>
    </section>
  )
}

export default EditCustomSet