import "./App.css";
import NotesApp from "./pages/NotesApp/NotesApp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NotesApp />}></Route>
      <Route path="/notesapp" element={<NotesApp />}></Route>
      <Route path="*" element={<h1>404 Route not found</h1>}></Route>
    </Routes>
  );
}

export default App;
