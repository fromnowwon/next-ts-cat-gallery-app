import Link from "next/link";
import ModeSwitch from "./ModeSwitch";
import NavMenuItem from "./NavMenuItem";

const navMenuData = [
  {
    id: 1,
    title: "즐겨찾기",
    address: "/favorites",
  },
];

export default function NavBar() {
  return (
    <nav className="flex flex-col w-full pt-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link href="/">
          <h1 className="text-primary dark:text-primary-dark font-bold text-4xl">
            NEXT CAT GALLERY
          </h1>
        </Link>
        <ModeSwitch />
      </div>
      <div className="w-full border-b-2 border-b-primary border-t-2 border-t-slate-100 mt-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="flex gap-4 py-3">
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
