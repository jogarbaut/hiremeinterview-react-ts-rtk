import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    favorite?: boolean;
    info?: boolean;
    edit?: boolean;
    viewOnly?: boolean;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({
    children,
    primary,
    secondary,
    favorite,
    info,
    edit,
    viewOnly,
    onClick,
}: Props) => {
    const conditionalClassName = classNames(
        'rounded-full border-2 border-transparent px-3.5 py-1.5 text-sm font-light hover:border-2',
        {
            'bg-indigo-200 hover:border-indigo-900/50': primary,
            'bg-green-200 hover:border-green-900/50': secondary,
            'bg-yellow-200 hover:border-yellow-900/50': favorite,
            'bg-slate-200 hover:border-slate-900/50': info,
            'bg-orange-200 hover:border-orange-900/50': edit,
            'cursor-default hover:border-transparent': viewOnly,
        },
    );

    return (
        <button
            onClick={viewOnly ? undefined : onClick}
            type="button"
            className={conditionalClassName}
        >
            {children}
        </button>
    );
};

export default Button;
