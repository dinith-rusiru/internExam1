import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
