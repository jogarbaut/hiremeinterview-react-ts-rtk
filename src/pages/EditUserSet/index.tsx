import Header from '@/components/layout/Header';
import EditUserSetForm from './EditUserSetForm';
type Props = {};

const EditUserSet = (props: Props) => {
    return (
        <section id="userSets">
            <Header>Edit User Set</Header>
            <div className="w-full items-center justify-center bg-indigo-50 py-12">
                <div className="mx-auto w-5/6 max-w-5xl">
                    <EditUserSetForm />
                </div>
            </div>
        </section>
    );
};

export default EditUserSet;
