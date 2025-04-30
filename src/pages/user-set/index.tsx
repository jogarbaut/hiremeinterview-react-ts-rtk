import Header from '@/components/layout/Header';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/app/hooks';
import { addQuestionSet } from '@/features/questionSets/questionSetsSlice';
import { UserSetForm } from '@/components/forms';
import { QuestionSet } from '@/features/questionSets/questionSetsTypes';

const CreateUserSetPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleCreate = (data: QuestionSet) => {
        dispatch(
            addQuestionSet({
                ...data,
                id: `cus-${nanoid()}`,
                createdAt: new Date().toISOString(),
                source: 'user',
            }),
        );
        navigate('/');
    };

    return (
        <section id="userSets" className="h-full">
            <Header>New User Question Set</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                <div className="mx-auto w-5/6 max-w-5xl">
                    <UserSetForm onSubmit={handleCreate} submitButtonLabel="Save Set" />
                </div>
            </div>
        </section>
    );
};

export default CreateUserSetPage;
