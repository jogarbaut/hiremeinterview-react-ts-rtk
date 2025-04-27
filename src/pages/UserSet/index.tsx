import Header from '@/components/shared/Header';
import NewUserSetForm from './NewUserSetForm';

const UserSet = () => {
    return (
        <section id="userSets" className="h-full">
            <Header>New User Question Set</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                <div className="mx-auto w-5/6 max-w-5xl">
                    <NewUserSetForm />
                </div>
            </div>
        </section>
    );
};

export default UserSet;
