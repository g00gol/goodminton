import { Outlet, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ErrorLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <div className="text-2xl font-bold">
        <Outlet />
      </div>
      <Link to="/" className="flex hover:underline">
        <ArrowLeft /> Go back to home
      </Link>
    </div>
  );
}
