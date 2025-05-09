import Header from '@/components/layout/Header';

type Props = {};

const About = (props: Props) => {
    return (
        <section id="about" className="h-full">
            <Header>About</Header>
            <div className="h-full w-full items-center justify-center bg-indigo-50 py-12">
                <div className="mx-auto flex w-5/6 flex-col gap-4 rounded-lg bg-white p-4 drop-shadow-lg">
                    <div>
                        <h2 className="text-xl font-bold">HireMe Interview</h2>
                        <p className="text-sm font-light italic">Practice makes perfect</p>
                        <ul className="ml-4 list-disc font-light">
                            <li>
                                <span className="font-bold">Why was this project made? </span>This
                                application was made because of the lack of tools for mock
                                interviews in non-tech fields and early-round interviews
                            </li>
                            <li>
                                <span className="font-bold">
                                    What are the default types of question sets?{' '}
                                </span>
                                The default question sets created by the HireMe Interview team are
                                tailored towards non-techincal, common interview questions that are
                                applicable to a wide-range of fields and levels.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">How to Use</h2>
                        <ul className="ml-4 list-disc font-light">
                            <li>
                                Hover and click a question set or click the "start" button to load
                                the mock interview interface
                            </li>
                            <li>Use the timer or stopwatch tool to improve your responses</li>
                            <li>Navigate forward and backwards using the arrows</li>
                            <li>Favorite question sets and click the "Favorites" filter to view</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Custom Question Sets</h2>
                        <ul className="ml-4 list-disc font-light">
                            <li>
                                Click the "New Custom Set" button to load the custom question set
                                interface
                            </li>
                            <li>Enter a title and at least 1 question for the set</li>
                            <li>Add as many or few questions you would like</li>
                            <li>Custom question sets can be editted or deleted</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
