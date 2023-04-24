import classNames from "classnames";

type Props = {
  primary?: boolean;
  favorite?: boolean;
  info?: boolean;
  edit?: boolean;
  children: string | JSX.Element;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ children, primary, favorite, info, edit, onClick }: Props) => {
  const conditionalClassName = classNames(
    "rounded-full border-2 border-transparent px-4 py-2 text-sm font-light hover:border-2",
    {
      "bg-indigo-200 hover:border-indigo-900/50": primary,
      "bg-yellow-200 hover:border-yellow-900/50": favorite,
      "bg-slate-200 hover:border-slate-900/50": info,
      "bg-orange-200 hover:border-orange-900/50": edit,
    }
  );

  return (
    <button onClick={onClick} type="button" className={conditionalClassName}>
      {children}
    </button>
  );
};

export default Button;
