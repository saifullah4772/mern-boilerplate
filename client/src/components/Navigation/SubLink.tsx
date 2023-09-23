interface SubLinkProps {
  setterValue: boolean;
  setterFunc: Function;
  showText: boolean;
  Icon: any;
  children?: React.ReactNode;
  LinkText?: string;
}

const SubLink = ({
  setterValue,
  setterFunc,
  showText,
  Icon,
  children,
  LinkText,
}: SubLinkProps) => {
  return (
    <>
      <li>
        <button
          type="button"
          onClick={() => {
            setterFunc((prev: boolean) => !prev);
          }}
          className="hover:bg-gray-700 p-4 w-full text-left"
        >
          <span
            className={`flex ${
              showText ? "justify-start" : "justify-center"
            } items-center gap-2`}
          >
            <Icon size={20} className="inline-block" />
            {showText && <span>{LinkText}</span>}
          </span>
        </button>
      </li>
      {setterValue && (
        <li className={`bg-gray-900 ${!showText ? "px-4" : "pl-8"} py-4`}>
          <ul className={`flex flex-col justify-between gap-4 items-center`}>
            {children}
          </ul>
        </li>
      )}
    </>
  );
};

export default SubLink;
