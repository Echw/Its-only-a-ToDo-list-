import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { data } from "../utils/constants/constant";
import React from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <Tabs value="dashboard" className="bg-gray-800 h-full basis-1/3">
        <TabsHeader
          className="bg-gray-800 flex flex-col  p-0 my-12 justify-start content-start "
          indicatorProps={{
            className:
              "bg-red-400/10 w-full shadow-none rounded-none border-r-4 border-red-400",
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className="text-brown-50 place-items-start p-4"
            >
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </>
  );
};
