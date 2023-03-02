import {
  updateCustomQuestionSet,
  Question,
  deleteCustomQuestionSet,
} from "@/features/questionSets/questionSetSlice";
import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "@/app/store";

type Props = {};

const EditCustomSetForm = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<boolean>();
  const [inputArray, setInputArray] = useState<Question[]>([]);
  const [questionSetId, setQuestionSetId] = useState<string>("")

  const questionsSets = useSelector(
    (state: RootState) => state.questionSets.questionSets
  );

  const { id } = useParams();

  const questionSet = questionsSets.find(
    (questionsSet) => questionsSet.id === id
  );

  useEffect(() => {
    if (questionSet) {
      setQuestionSetId(questionSet.id)
      setTitle(questionSet.title);
      setIsFavorite(questionSet.isFavorite);
      setInputArray(questionSet.questions);
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddInput = () => {
    let newInput = {
      id: nanoid(),
      question: "",
      isFavorite: false,
      isCustom: true,
    };
    setInputArray([...inputArray, newInput]);
  };

  const handleRemoveInput = (index: number) => {
    let data = [...inputArray];
    data.splice(index, 1);
    setInputArray(data);
  };

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log('trying to edit')
    let data = [...inputArray];
    data[index] = {...data[index], question: e.target.value}
    setInputArray(data);
  };

  const handleDelete = () => {
    dispatch(
      deleteCustomQuestionSet(questionSetId)
    )
    navigate("/");
  }

  const handleSubmit = () => {
    if (!title || !inputArray.every((input) => input.question.length !== 0)) {
      setDisplayError(true);
      return;
    }
    dispatch(
      updateCustomQuestionSet({
        id: questionSetId,
        title,
        questions: inputArray,
        isFavorite,
        isCustom: true,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="my-6 flex w-full items-center justify-start gap-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-full border-2 border-transparent bg-green-200 px-4 py-2 text-sm font-bold transition hover:border-2 hover:border-green-900/50"
        >
          Update Set
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="rounded-full border-2 border-transparent bg-red-200 px-4 py-2 text-sm font-bold transition hover:border-2 hover:border-red-900/50"
        >
          Delete Set
        </button>
        {displayError &&
          (!title ||
            !inputArray.every((input) => input.question.length !== 0)) && (
            <div className="rounded-full border-2 border-transparent bg-red-200 px-4 py-2 text-sm font-bold">
              Oh no! There are empty items in your custom set
            </div>
          )}
      </div>
      <form>
        {/* Question set title */}
        <div
          className={`${
            title.length === 0 && displayError
              ? "border-red-300"
              : "border-transparent"
          } mb-6 rounded-lg border-2  bg-white p-4 drop-shadow-lg transition duration-200`}
        >
          <div className="flex items-center justify-center">
            <label htmlFor="questionSetTitle" className="hidden">
              Custom Question Set Title:
            </label>
            <input
              id="questionSetTitle"
              name="questionSetTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="my-8 w-3/4 rounded-lg border border-slate-200 px-4 py-6 text-center font-medium drop-shadow-sm"
              placeholder="Question Set Title"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="button"
              onClick={handleAddInput}
              className="rounded-full border-2 border-transparent bg-indigo-200 px-4 py-2 text-sm font-light transition hover:border-2 hover:border-indigo-900/50"
            >
              Add Question
            </button>
            <div className="flex cursor-default items-center justify-center rounded-full border-2 border-transparent bg-slate-200 px-4 py-2 text-sm font-light">
              {inputArray.length} Items
            </div>
            <button
              type="button"
              onClick={() => setIsFavorite((prevState) => !prevState)}
              className="flex h-auto items-center justify-center rounded-full border-2 border-transparent bg-yellow-200 px-4 py-2 text-sm transition hover:border-2 hover:border-yellow-900/50"
            >
              {isFavorite === false ? (
                <StarIconOutline className="h-5 w-5 font-light" />
              ) : (
                <StarIconSolid className="h-5 w-5 font-light" />
              )}
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {inputArray.map((input, index) => (
            <div
              key={index}
              className={`${
                input.question.length === 0 && displayError
                  ? "border-red-300"
                  : "border-transparent"
              } mx-auto flex w-full flex-col items-center rounded-lg border-2 bg-white py-4 px-1 drop-shadow-lg transition duration-200`}
            >
              <div className="flex w-5/6 items-center justify-center">
                <label htmlFor="question" className="hidden">
                  Custom Question
                </label>
                <input
                  type="text"
                  name="question"
                  value={input.question || ""}
                  className="my-8 w-full rounded-lg border border-slate-200 px-4 py-6 text-center font-medium drop-shadow-sm"
                  placeholder={`Custom Question #${index + 1}`}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="flex w-5/6 items-center justify-end">
                {inputArray.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                    className="rounded-full border-2 border-transparent bg-red-200 px-4 py-2 text-sm font-light transition hover:border-2 hover:border-red-900/50"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default EditCustomSetForm;
