import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex overflow-hidden rounded-2xl drop-shadow-2xl max-w-screen-xl	">
      {children}
    </div>
  );
};
