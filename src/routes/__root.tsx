import { Icon } from "@iconify/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar />

      <main className="p-2">
        <Outlet />
      </main>

      <footer className="w-full p-2 bg-black text-gray-100">
        <a
          className="flex gap-2"
          href="https://github.com/sompakorn-lap/basic-setup-react"
        >
          <Icon icon="mdi:github" width={24} height={24} />
          <span>GITHUB</span>
        </a>
      </footer>
    </div>
  );
}

export default Layout;
