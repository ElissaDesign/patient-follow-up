import React, { Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Doctor = React.lazy(() => import("../Doctor"));
const Controller = React.lazy(() => import("../Controller"));

export default function DashRoutes() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div className=" ">
          <Routes>
            <Route path="/controller" element={<Controller />} />
            <Route path="/doctor" element={<Doctor />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}
