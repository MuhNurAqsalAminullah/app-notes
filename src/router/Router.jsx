import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layout >>>>
import Layout from "../layout";

// Pages >>>>
import AddNotes from "../page/addNotes";
import DetailNotes from "../page/DetailNotes";
import Home from "../page/home";

const Router = () => {
  const [burger, setBurger] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout burger={burger} setBurger={setBurger} />}
      >
        <Route index element={<Home setBurger={setBurger} />} />
        <Route path="detai-notes/:id" element={<DetailNotes />} />
        <Route
          path="form-input-notes"
          element={<AddNotes setBurger={setBurger} />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
