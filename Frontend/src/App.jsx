import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";

// Home Page
import Home from "./routes/Home";

function App() {
  
  let browseRoutes = [
    {
      path: "",
      component: <Home />,
    },
    {
      path: "login",
      component: <Login />,
    },
    {
      path: "signin",
      component: <Signin />,
    },
    {
      path: "*",
      component: <NotFound />,
    },
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {browseRoutes.map((item) => {
              return <Route path={item.path} element={item.component} />;
            })}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
