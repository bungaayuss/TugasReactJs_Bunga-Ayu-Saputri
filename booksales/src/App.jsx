import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
