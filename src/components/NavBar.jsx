import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

const NavBar = () => {
  return (
    <nav className="w-full">
      <ul className="w-full flex gap-x-6">
        <li>
          <Link className="font-orbitron logo" href={"/"}>Crypto Digest</Link>
        </li>
        <li className="ml-auto font-exo2">
          <Link href={"/about"}>About Us</Link>
        </li>
        <li className="theme-changer">
          <ThemeChanger />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
