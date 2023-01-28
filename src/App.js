import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Elements from "./pages/Elements";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/elements" element={<Elements />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
