import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import About from "@/pages/about";
import MockInterview from "@/pages/mockInterview";
import NoMatch from "@/pages/noMatch";
import CustomSet from "@/pages/CustomSet";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mock-interview/:id" element={<MockInterview />} />
          <Route path="custom-set" element={<CustomSet />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
