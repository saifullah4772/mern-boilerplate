import { NavLink } from "react-router-dom";
interface MainLinkProps {
  showText: boolean;
  Icon: any;
  href: string;
}

const MainLink = ({ showText, Icon, href }: MainLinkProps) => {
  return (
    <>
      <li>
        <NavLink
          to={href}
          className="hover:bg-gray-700 p-4 w-full text-left inline-block"
        >
          <span
            className={`flex ${
              showText ? "justify-start" : "justify-center"
            } items-center gap-2`}
          >
            <Icon size={20} className="inline-block" />
            {showText && <span>Dashboard</span>}
          </span>
        </NavLink>
      </li>
    </>
  );
};

export default MainLink;
