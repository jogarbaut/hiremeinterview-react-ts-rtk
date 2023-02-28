import FieldTitle from "@/components/shared/FieldTitle";
import EditCustomSetForm from "./EditCustomSetForm";
type Props = {}

const EditCustomSet = (props: Props) => {
  return (
    <section id="customSets">
      <div className="w-full bg-white">
        <div className="mx-auto w-5/6 max-w-5xl">
          <FieldTitle>Edit Custom Set</FieldTitle>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <EditCustomSetForm />
        </div>
      </div>
    </section>
  )
}

export default EditCustomSet