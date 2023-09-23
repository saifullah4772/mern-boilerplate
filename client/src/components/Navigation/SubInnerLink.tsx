import { NavLink } from "react-router-dom";
interface SubInnerLinkProps {
  showText: boolean;
  InnerIcon: any;
  InnerLinkText: string;
  innerTo: string;
}
const SubInnerLink = ({
  showText,
  InnerIcon,
  InnerLinkText,
  innerTo,
}: SubInnerLinkProps) => {
  return (
    <>
      <li className="w-full">
        <NavLink
          to={innerTo}
          className={`inline-block w-full ${
            showText ? "text-left" : "text-center"
          }`}
        >
          <InnerIcon className="inline-block" />
          {showText && <span className="pl-2">{InnerLinkText}</span>}
        </NavLink>
      </li>
    </>
  );
};

export default SubInnerLink;
