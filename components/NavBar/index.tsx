import Link from "next/link";
import ModeSwitch from "./ModeSwitch";
import NavMenuItem from "./NavMenuItem";

const navMenuData = [
  {
    id: 1,
    title: "홈",
    address: "/",
  },
  {
    id: 2,
    title: "즐겨찾기",
    address: "/favorites",
  },
];

export default function NavBar() {
  return (
    <nav className="flex flex-col w-full pt-4 bg-secondary">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <h1 className="font-bold text-xl text-white">NEXT CAT GALLERY</h1>
        </Link>
        <ModeSwitch />
      </div>
      <div className="w-full bg-white dark:bg-slate-200 border-b-[1px] border-b-secondary mt-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="flex gap-4 py-2">
            {navMenuData.map((menu) => (
              <NavMenuItem
                key={menu.id}
                title={menu.title}
                address={menu.address}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
