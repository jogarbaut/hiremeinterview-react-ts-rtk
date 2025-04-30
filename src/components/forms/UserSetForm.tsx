import { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { QuestionSet, Question } from '@/features/questionSets/questionSetsTypes';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

type Props = {
    initialValues?: Partial<QuestionSet>;
    onSubmit: (data: QuestionSet) => void;
    submitButtonLabel?: string;
};

const UserSetForm = ({ initialValues = {}, onSubmit, submitButtonLabel = 'Save' }: Props) => {
    const [title, setTitle] = useState(initialValues.title || '');
    const [description, setDescription] = useState(initialValues.description || '');
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>(
        initialValues.difficulty || 'easy',
    );
    const [tagsInput, setTagsInput] = useState((initialValues.tags || []).join(', '));
    const [isFavorite, setIsFavorite] = useState(initialValues.isFavorite || false);
    const [questions, setQuestions] = useState<Question[]>(
        initialValues.questions?.length ? initialValues.questions : [{ id: nanoid(), text: '' }],
    );
    const [displayError, setDisplayError] = useState(false);

    useEffect(() => {
        if (displayError) {
            const timeout = setTimeout(() => setDisplayError(false), 3000);
            return () => clearTimeout(timeout);
        }
    }, [displayError]);

    const handleAddInput = () => {
        setQuestions([...questions, { id: nanoid(), text: '' }]);
    };

    const handleRemoveInput = (index: number) => {
        const updated = [...questions];
        updated.splice(index, 1);
        setQuestions(updated);
    };

    const handleChange = (index: number, value: string) => {
        const updated = [...questions];
        updated[index].text = value;
        setQuestions(updated);
    };

    const handleSubmit = () => {
        const isValid = title.trim() && questions.every((q) => q.text.trim());
        if (!isValid) {
            setDisplayError(true);
            return;
        }

        const tags = tagsInput
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean);

        onSubmit({
            id: initialValues.id || nanoid(),
            title,
            description,
            difficulty,
            tags,
            isFavorite,
            questions,
            source: 'user',
            createdAt: initialValues.createdAt || new Date().toISOString(),
        });
    };

    return (
        <>
            {/* Top Controls */}
            <div className="my-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-center">
                <div className="flex flex-wrap gap-3">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="rounded-full border-2 border-transparent bg-green-200 px-4 py-2 text-sm font-bold transition hover:border-green-900/50"
                    >
                        {submitButtonLabel}
                    </button>

                    <button
                        type="button"
                        onClick={handleAddInput}
                        className="rounded-full border-2 border-transparent bg-indigo-200 px-4 py-2 text-sm font-light transition hover:border-indigo-900/50"
                    >
                        Add Question
                    </button>

                    <div className="rounded-full border-2 border-transparent bg-slate-200 px-4 py-2 text-sm font-light">
                        {questions.length} Items
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsFavorite((prev) => !prev)}
                        className="flex items-center justify-center rounded-full border-2 border-transparent bg-yellow-200 px-4 py-2 transition hover:border-yellow-900/50"
                    >
                        {isFavorite ? (
                            <StarIconSolid className="h-5 w-5" />
                        ) : (
                            <StarIconOutline className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {displayError && (
                    <div className="rounded-full border-2 border-transparent bg-red-200 px-4 py-2 text-sm font-bold">
                        Please complete all fields before saving.
                    </div>
                )}
            </div>

            {/* Metadata Inputs */}
            <div className="mb-6 rounded-lg border-2 bg-white p-4 drop-shadow-lg">
                <div className="mb-6 flex flex-col items-center gap-4">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full max-w-2xl rounded-lg border border-slate-200 px-4 py-3 text-center font-medium drop-shadow-sm"
                        placeholder="Question Set Title"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full max-w-2xl rounded-lg border border-slate-200 px-4 py-3 font-light drop-shadow-sm"
                        placeholder="Description"
                        rows={3}
                    />

                    <div className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:items-center">
                        <select
                            value={difficulty}
                            onChange={(e) =>
                                setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')
                            }
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-light sm:w-auto"
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>

                        <input
                            type="text"
                            value={tagsInput}
                            onChange={(e) => setTagsInput(e.target.value)}
                            placeholder="Tags (comma-separated)"
                            className="w-full flex-grow rounded-lg border border-slate-200 px-3 py-2 text-sm font-light"
                        />
                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {questions.map((q, index) => (
                    <div
                        key={q.id}
                        className={`mx-auto flex w-full flex-col items-center rounded-lg border-2 ${
                            !q.text && displayError ? 'border-red-300' : 'border-transparent'
                        } bg-white py-4 px-1 drop-shadow-lg transition`}
                    >
                        <input
                            type="text"
                            value={q.text}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="my-8 w-11/12 rounded-lg border border-slate-200 px-4 py-6 text-center font-medium drop-shadow-sm"
                            placeholder={`Question #${index + 1}`}
                        />

                        {questions.length > 1 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveInput(index)}
                                className="rounded-full border-2 border-transparent bg-red-200 px-4 py-2 text-sm font-light transition hover:border-red-900/50"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserSetForm;
