import { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Layout = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <main className="flex">
        <aside
          className={`duration-500 z-50 overflow-hidden ${
            showText ? "w-full fixed md:static md:w-1/5" : "w-0 md:w-24"
          }`}
        >
          <SideBar showText={showText} setShowText={setShowText} />
        </aside>
        <aside
          className={`h-screen overflow-x-hidden overflow-y-scroll flex-1 px-8 ${
            showText ? "w-auto" : "w-4/5"
          }`}
        >
          <div className="py-4 flex justify-between items-center bg-white sticky top-0 left-0 w-full">
            <AiOutlineMenu
              size={30}
              onClick={() => {
                setShowText((prev: boolean) => !prev);
              }}
              className="cursor-pointer"
            />
            <p className="text-2xl font-bold">Brand Here</p>
          </div>
          <Outlet />
        </aside>
      </main>
    </>
  );
};

export default Layout;
