import Home from '@/pages/home';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/MainLayout';
import About from '@/pages/about';
import MockInterview from '@/pages/mockInterview';
import NoMatch from '@/pages/noMatch';
import UserSet from '@/pages/user-set';
import EditUserSetPage from '@/pages/user-set/edit';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="mock-interview/:id" element={<MockInterview />} />
                    <Route path="user-set" element={<UserSet />} />
                    <Route path="user-set/edit/:id" element={<EditUserSetPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
