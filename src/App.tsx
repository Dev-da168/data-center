import { Routes, Route } from "react-router-dom";

import Login from "./pages/user/login";
import Dashboard from "./pages/user/dashboard_page/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;