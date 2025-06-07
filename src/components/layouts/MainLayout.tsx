import { Outlet } from "react-router-dom";

/**
 * Main layout component that wraps the main content of the application.
 * @returns Main layout component
 */
export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
