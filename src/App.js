import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
