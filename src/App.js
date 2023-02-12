import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav"
import Footer from  "./Components/Footer"

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour"



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Index />} />
            <Route path="/questions/:id/answers" element={<Show />} />
            <Route path="/questions/new" element={<New />} />
            <Route path="/questions/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
