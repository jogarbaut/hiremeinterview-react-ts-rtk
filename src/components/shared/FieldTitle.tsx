type Props = {
  children: React.ReactNode;
};

const FieldTitle = ({ children }: Props) => {
  return (
    <h1 className="py-6 text-lg font-bold md:py-12 md:text-3xl">{children}</h1>
  );
};

export default FieldTitle;
