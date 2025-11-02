import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GooeyNav from "@/components/GooeyNav";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import testImage from "../assets/logo.png";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];
  const currentIndex = items.findIndex((i) => i.href === location.pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-7xl p-3">
        <div className="flex items-center justify-between mt-2 p-3 md:p-4 rounded-3xl bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md border border-white/10 dark:border-neutral-800/40 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-[110px] shrink-0">
              <img
                src={testImage}
                alt="Logo"
                width={60}
                height={30}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 px-4">
            <div className="hidden md:flex justify-center">
              <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={currentIndex >= 0 ? currentIndex : 0}
                activeIndex={currentIndex >= 0 ? currentIndex : undefined}
                onActiveChange={(idx) => {
                  const target = items[idx];
                  if (target?.href) {
                    navigate(target.href);
                    setOpen(false);
                  }
                }}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
          <AnimatedThemeToggler />
            <Link
              to="/get-started"
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-white text-black font-medium shadow-sm"
            >
              Login
            </Link>

            {/* mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-black/80 dark:text-white/80"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu panel */}
        {open && (
          <div className="md:hidden mt-2 rounded-xl bg-white/30 dark:bg-neutral-900/40 backdrop-blur-md border border-white/10 dark:border-neutral-800/40 p-3 shadow-lg">
            <ul className="flex flex-col gap-2">
              {items.map((it, i) => (
                <li key={i}>
                  <Link
                    to={it.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-black/80 dark:text-white/80 hover:bg-white/50 dark:hover:bg-neutral-800/50"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/get-started"
                  className="block w-full text-center px-4 py-2 rounded-full bg-black text-white"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
