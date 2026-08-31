import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/user/login";
import Dashboard from "./pages/user/dashboard_page/dashboard";
import Document from "./pages/admin/document_page/document";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      /*================= ADMIN ROUTES ================= */
       <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />
      <Route
          path="/admin/document_page"
          element={<Document />}
        />
       
    </BrowserRouter>
  );
}

export default App;