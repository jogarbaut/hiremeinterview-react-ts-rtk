import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import About from "@/pages/about";
import MockInterview from "@/pages/mockInterview";
import NoMatch from "@/pages/noMatch";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mock-interview/:selectedQuestionSetId" element={<MockInterview />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
