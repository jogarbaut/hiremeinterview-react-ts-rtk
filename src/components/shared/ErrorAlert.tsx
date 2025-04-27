type Props = {
    children: React.ReactNode;
};

const ErrorAlert = ({ children }: Props) => {
    return (
        <div className="rounded-full border-2 border-transparent bg-red-200 px-4 py-2 text-sm font-bold">
            {children}
        </div>
    );
};

export default ErrorAlert;
