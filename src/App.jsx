import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import { IoMdArrowBack } from "react-icons/io";
import Behdad from "./Pages/Behdad";
import Layout from "./layout/Layout";
import Friends from "./Pages/Friends";
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/behdad" element={<Behdad />} />
        <Route path="/friends" element={<Friends />} />
        <Route
          path="*"
          element={
            <div className="flex flex-col h-screen justify-center text-center">
              <h1 className="text-4xl text-white">Not found ...</h1>

              <Link className="txt-2xl text-white flex justify-center" to="/">
                <IoMdArrowBack size="3em" />
              </Link>
            </div>
          }
        />
      </Route>
    )
  );
  return (
    <RouterProvider router={route}>
      <Home />
    </RouterProvider>
  );
};

export default App;
