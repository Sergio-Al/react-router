import React from "react";
import { Routes, Route } from "react-router";
import { ColorDetails } from "./colors/ColorDetails";
import ColorProvider from "../hooks/color-hooks";
import AddColorForm from "./colors/AddColorForm";
import ColorList from "./colors/ColorList";

export default function App() {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
}
