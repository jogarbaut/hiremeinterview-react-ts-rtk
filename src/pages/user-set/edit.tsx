import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateQuestionSet } from '@/features/questionSets/questionSetsSlice';
import { UserSetForm } from '@/components/forms';
import Header from '@/components/layout/Header';
import { QuestionSet } from '@/features/questionSets/questionSetsTypes';

const EditUserSetPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const questionSet = useAppSelector((state) =>
        state.questionSets.questionSets.find((qs) => qs.id === id),
    );

    if (!questionSet || questionSet.source !== 'user') {
        return (
            <section className="h-full w-full bg-indigo-50 py-12 text-center text-lg">
                <p className="text-red-500">Question set not found or is not editable.</p>
            </section>
        );
    }

    const handleUpdate = (updatedData: QuestionSet) => {
        dispatch(updateQuestionSet(updatedData));
        navigate('/');
    };

    return (
        <section id="editUserSet" className="h-full">
            <Header>Edit User Question Set</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                <div className="mx-auto w-5/6 max-w-5xl">
                    <UserSetForm
                        initialValues={questionSet}
                        onSubmit={handleUpdate}
                        submitButtonLabel="Update Set"
                    />
                </div>
            </div>
        </section>
    );
};

export default EditUserSetPage;
