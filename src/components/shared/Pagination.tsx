type Props = {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }: Props) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-evenly gap-4 text-center">
                <li>
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        className={`${
                            currentPage === 1 ? 'pointer-events-none text-slate-400' : ''
                        }`}
                    >
                        &lt;
                    </button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            type="button"
                            className={`${
                                currentPage === number ? 'border-b-2 border-b-indigo-900' : ''
                            } w-full px-3 transition duration-500`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        className={`${
                            currentPage === pageNumbers.length
                                ? 'pointer-events-none text-slate-400'
                                : ''
                        }`}
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
