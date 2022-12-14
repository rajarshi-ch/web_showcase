import clsx from "clsx";
import SidebarIcons from "./sidebarIcons";

type IMenuItemProps = {
  item: { id: string; title: string; isNested: boolean };
  onClick: Function;
  selected: string;
};

export default function MenuItem({
  item: { id, title, isNested },
  onClick,
  selected,
}: IMenuItemProps) {
  return (
    <div
      className={clsx(
        "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
        selected === id
          ? "border-r-[2px] dark:border-white dark:text-white border-indigo-600 text-indigo-600"
          : "sidebar-item",
        isNested ? "sm:hidden xl:flex" : ""
      )}
      onClick={(e) => onClick()}
    >
      <SidebarIcons id={id} isNested={isNested} />
      <div className="block sm:hidden xl:block ml-2">{title}</div>
      <div className="block sm:hidden xl:block flex-grow" />
    </div>
  );
}
