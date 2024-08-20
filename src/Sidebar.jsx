import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`fixed inset-0 z-40 ${
        sidebarOpen ? "bg-slate-800 bg-opacity-70" : "hidden"
      }`}
    >
      <aside className=" relative mx-auto mt-8 w-full max-w-md h-[90vh] rounded-lg shadow-lg bg-slate-100">
        <button
          className="absolute top-8 right-8 text-2xl text-black hover:text-red-600"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
        <div className=" pt-20 px-8 grid grid-cols-2 content-center gap-6 capitalize">
          {sublinks.map((items) => {
            return (
              <article className="space-y-4" key={items.id}>
                <h4 className="text-lg font-semibold">{items.page}</h4>
                <div className="space-y-2">
                  {items.links.map((link) => {
                    return (
                      <a
                        className="flex justify-start gap-2 my-2 items-center text-slate-600 hover:text-slate-800"
                        key={link.id}
                        href={link.url}
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
