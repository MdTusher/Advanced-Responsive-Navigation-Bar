import { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    submenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const [column, setColumn] = useState("grid-cols-2");

  const container = useRef(null);

  useEffect(() => {
    setColumn("grid-cols-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumn("grid-cols-3");
    }
    if (links.length > 3) {
      setColumn("grid-cols-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`absolute z-40 rounded-lg shadow-lg ${
        submenuOpen ? "block bg-slate-100" : "hidden"
      }`}
      ref={container}
    >
      <h4 className="font-bold text-lg p-4 border-b border-slate-200">
        {page}
      </h4>
      <div className={`grid ${column} gap-4 p-4`}>
        {links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              className="flex items-center justify-center gap-2 space-x-2 text-slate-600 hover:text-slate-800"
            >
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
