type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-5/6 max-w-5xl">
        <h1 className="py-6 text-lg font-bold md:py-12 md:text-3xl">
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Header;
