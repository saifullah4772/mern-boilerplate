import { useState } from "react";
import { TbBrandAmd } from "react-icons/tb";
import { BiSolidDashboard } from "react-icons/bi";
import { IoLogOutSharp } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { RiUserSettingsLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import MainLink from "./Navigation/MainLink";
import SubLink from "./Navigation/SubLink";
import SubInnerLink from "./Navigation/SubInnerLink";
interface SideBarProps {
  showText: boolean;
  setShowText: Function;
}

const SideBar = ({ showText, setShowText }: SideBarProps) => {
  const [isUser, setisUser] = useState(false);
  return (
    <>
      <aside className="h-screen text-white bg-gray-800 col-span-1">
        <div className="p-6 flex justify-start items-center gap-3">
          <TbBrandAmd size={25} />
          {showText && <h3 className="text-2xl uppercase">Brand Here</h3>}
        </div>
        <div
          className={`fixed top-6 right-8 ${
            !showText ? "hidden" : "block md:hidden"
          }`}
        >
          <CgClose
            size={30}
            onClick={() => {
              setShowText((prev: boolean) => !prev);
              setisUser(false);
            }}
          />
        </div>
        <nav
          className={`flex flex-col justify-between ${
            showText ? "items-start" : "items-center"
          } gap-3`}
        >
          <ul className="w-full">
            <MainLink showText={showText} Icon={BiSolidDashboard} href="/" />
            <SubLink
              setterFunc={setisUser}
              setterValue={isUser}
              Icon={HiMiniUsers}
              showText={showText}
              LinkText="Manage Users"
            >
              <SubInnerLink
                InnerIcon={RiUserSettingsLine}
                InnerLinkText="Roles"
                innerTo="/roles"
                showText={showText}
                key={1}
              />
              <SubInnerLink
                InnerIcon={FaUserCircle}
                InnerLinkText="Users"
                innerTo="/users"
                showText={showText}
                key={2}
              />
            </SubLink>

            <li>
              <button
                type="button"
                className="hover:bg-gray-700 p-4 w-full text-left"
              >
                <span
                  className={`flex ${
                    showText ? "justify-start" : "justify-center"
                  } items-center gap-2`}
                >
                  <IoLogOutSharp size={20} className="inline-block" />
                  {showText && <span>Sign Out</span>}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
