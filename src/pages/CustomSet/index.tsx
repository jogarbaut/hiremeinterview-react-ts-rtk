import Header from "@/components/shared/Header";
import NewCustomSetForm from "@/pages/CustomSet/NewCustomSetForm";

const CustomSet = () => {
  return (
    <section id="customSets" className="h-full">
      <Header>New Custom Question Set</Header>
      <div className="w-full h-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl">
          <NewCustomSetForm />
        </div>
      </div>
    </section>
  );
};

export default CustomSet;
