import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "./components/loader/Loader";

const LandingPage = React.lazy(() => import("./pages/Home"));
const SigninPage = React.lazy(() => import("./pages/Login"));
const SignupPage = React.lazy(() => import("./pages/Register"));
const DashRoutes = React.lazy(() =>
  import("./pages/dashboard-routes/dash-routes")
);
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="h-[100%] flex flex-col">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard/*" element={<DashRoutes />} />
            <Route path="/auth/login" element={<SigninPage />} />
            <Route path="/auth/register" element={<SignupPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
