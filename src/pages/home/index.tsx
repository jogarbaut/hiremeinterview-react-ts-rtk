import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import QuestionSetCard from "@/components/shared/QuestionSetCard";
import { useEffect, useState } from "react";
import Pagination from "@/components/shared/Pagination";
import { QuestionSet } from "@/features/questionSets/questionSetSlice";
import Header from "@/components/shared/Header";
import ErrorAlert from "@/components/shared/ErrorAlert";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const questionSets = useSelector(
    (state: RootState) => state.questionSets.questionSets
  );

  const [displayFavorites, setDisplayFavorites] = useState<boolean>(false);
  const [displayCustoms, setDisplayCustoms] = useState<boolean>(false);
  const [filteredSets, setFilteredSets] = useState<QuestionSet[]>([]);

  const navigate = useNavigate()

  // Handle displayFavorite and displayCustom filters
  useEffect(() => {
    if (!displayFavorites && !displayCustoms) {
      setFilteredSets(questionSets);
    } else if (displayFavorites) {
      setFilteredSets(
        questionSets.filter((set) => (set.isFavorite) === true)
      );
    } else if (displayCustoms) {
      setFilteredSets(
        questionSets.filter((set) => (set.isCustom) === true)
      );
    } else {
      setFilteredSets(
        questionSets.filter((set) => (set.isFavorite && set.isCustom) === true)
      );
    }
  }, [displayFavorites, displayCustoms, questionSets]);

  useEffect(() => {
    setCurrentPage(1)
  }, [displayFavorites, displayCustoms])

  // Pagination
  const itemsPerPage: number = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  let indexOfLastItem: number = currentPage * itemsPerPage;
  let indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  let currentItems = filteredSets?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const activefilterStyles: string = "bg-indigo-200 hover:border-transparent";
  const nonActiveFilterStyles: string = "bg-slate-200 text-slate-400";
  const filterStyles =
    "border-transparent rounded-full border-2  px-4 py-2 text-sm hover:border-2 hover:border-indigo-900/50 transition duration-200";

  return (
    <section id="home" className="h-full">
      <Header>Question Sets</Header>
      <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
        <div className="mx-auto w-5/6 max-w-5xl flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 py-6 md:flex-row">
            <div className="flex items-center justify-center gap-6 md:justify-start">
              <button
                className={`${
                  !displayCustoms && !displayFavorites
                    ? activefilterStyles
                    : nonActiveFilterStyles
                } ${filterStyles}`}
                onClick={() => {
                  setDisplayCustoms(false);
                  setDisplayFavorites(false);
                }}
              >
                All Sets
              </button>
              <button
                className={`${
                  displayCustoms ? activefilterStyles : nonActiveFilterStyles
                } ${filterStyles}`}
                onClick={() => setDisplayCustoms((prevState) => !prevState)}
              >
                Custom Sets
              </button>
              <button
                className={`${
                  displayFavorites ? activefilterStyles : nonActiveFilterStyles
                } ${filterStyles}`}
                onClick={() => setDisplayFavorites((prevState) => !prevState)}
              >
                Favorites
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-end">
            <button
                className="rounded-full border-2 border-transparent bg-orange-200 px-4 py-2 text-sm transition hover:border-2 hover:border-orange-900/50"
                onClick={() => {
                  navigate("/custom-set")
                }}
              >
                New Custom Set
              </button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {(displayCustoms || displayFavorites) && currentItems.length === 0 ? (
              <div className="col-span-full">
                <ErrorAlert>
                  Oh no! There are no sets in the applied filter...
                </ErrorAlert>
              </div>
            ) : (
              currentItems.map((set) => {
                return <QuestionSetCard key={set.id} questionSet={set} />;
              })
            )}
          </div>
          <div className="flex items-center justify-center md:justify-end py-6">
              {filteredSets.length > itemsPerPage && (
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredSets.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
