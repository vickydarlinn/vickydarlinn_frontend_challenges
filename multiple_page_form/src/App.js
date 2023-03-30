import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectPlanPage from "./pages/SelectPlanPage";
import AddOnsPage from "./pages/AddOnsPage";
import SummaryPage from "./pages/SummaryPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/select-plan" element={<SelectPlanPage />} />
      <Route path="/add-ons" element={<AddOnsPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  );
};

export default App;
