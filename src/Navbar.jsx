import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2 - 150;
    const bottom = tempBtn.bottom + 2;
    openSubmenu(page, { center, bottom });
  };
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav
      className="relative px-10 py-4 flex justify-between bg-transparent items-center "
      onMouseOver={handleSubMenu}
    >
      <div className="flex justify-between items-center max-sm:flex-1">
        <img src={logo} alt="logo" />
        <button className="sm:hidden" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className=" max-sm:hidden flex flex-1 justify-around text-lg text-slate-800 font-semibold">
        <li>
          <button onMouseOver={displaySubmenu} className="link-btn">
            products
          </button>
        </li>
        <li>
          <button onMouseOver={displaySubmenu} className="link-btn">
            developers
          </button>
        </li>
        <li>
          <button onMouseOver={displaySubmenu} className="link-btn">
            company
          </button>
        </li>
      </ul>
      <button className="max-sm:hidden px-3  bg-slate-950 py-1 text-slate-200 rounded-xl text-lg font-semibold hover:shadow-lg">
        signup
      </button>
    </nav>
  );
};

export default Navbar;
