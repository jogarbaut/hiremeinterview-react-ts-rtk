import { useState } from "react";

useState

type Props = {}

const EditCustomSetForm = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [inputArray, setInputArray] = useState<Question[]>([
    { id: nanoid(), question: "", isFavorite: false, isCustom: true },
  ]);

  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddInput = () => {
    let newInput = {
      id: nanoid(),
      question: "",
      isFavorite: false,
      isCustom: true,
    };
    setInputArray([...inputArray, newInput]);
  };

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...inputArray];
    data[index]["question"] = e.target.value;
    setInputArray(data);
  };

  const handleSubmit = () => {
    if (!title) return;
    dispatch(
      addCustomQuestionSet({
        id: nanoid(),
        title,
        questions: inputArray,
        isFavorite,
        isCustom: true,
      })
    );
  };

  return (
    <>
      <button onClick={handleAddInput} type="button">
        Add Input
      </button>
      <form>
        <div className="my-20">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-black"          
          />
          <button
            type="button"
            className={`${
              isFavorite ? "bg-indigo-900" : "bg-indigo-300"
            } transition duration-500`}
            onClick={() => setIsFavorite((prevState) => !prevState)}
          >
            Favorite
          </button>
        </div>
        <div className="grid grid-cols-3">
          {inputArray.map((input, index) => (
            <div key={index}>
              <label>Question</label>
              <input
                type="text"
                name="question"
                value={input.question || ""}
                className="border-2 border-black"
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          ))}
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default EditCustomSetForm