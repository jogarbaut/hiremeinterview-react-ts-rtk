import FieldTitle from "@/components/shared/FieldTitle";
import NewCustomSetForm from "@/pages/CustomSet/NewCustomSetForm";

type Props = {};

const CustomSet = (props: Props) => {
  return (
    <section id="customSets">
      <div className="w-full bg-white">
        <div className="mx-auto w-5/6 max-w-5xl">
          <FieldTitle>New Custom Set</FieldTitle>
        </div>
      </div>
      <div className="w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <NewCustomSetForm />
        </div>
      </div>
    </section>
  );
};

export default CustomSet;
