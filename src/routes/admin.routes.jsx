import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/details" element={<Details />} />
      {/*
      <Route path="/details/:id" element={<Details />} /> */}
    </Routes>
  );
}
