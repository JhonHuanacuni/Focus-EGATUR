import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true); // Establece loading en true inicialmente
    setTimeout(() => {
      setLoading(false); // Cambia loading a false después de 5000 milisegundos
    }, 2000);
  }, []);
  return loading ? (
    <div className="h-screen flex flex-col justify-center items-center">
      <RingLoader color={"#000000"} loading={loading} size={150} />
    </div>
  ) : (
    <BrowserRouter>
      <div className="px-4 pt-4">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
