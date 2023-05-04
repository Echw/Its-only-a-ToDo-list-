import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { data } from "../utils/constants/constant";
import { createElement } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <Tabs value="list" className="bg-gray-800 h-full w-full flex ">
      <div className="flex flex-col  mb-6">
        <Typography variant="h3" className="text-brown-100 my-3 p-4">
          It's only a ToDo list
        </Typography>
        <TabsHeader
          className="bg-gray-800 flex flex-col p-0 w-full justify-start content-start "
          indicatorProps={{
            className:
              "bg-red-400/10 w-full shadow-none rounded-none border-r-4 border-red-400 w-full",
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              className="text-brown-50 place-items-start p-4"
            >
              <div className="flex items-center gap-2">
                {createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
      </div>
      <TabsBody className="bg-brown-50 px-20 py-10">
        {data.map(({ value, content }) => (
          <TabPanel key={value} value={value}>
            {createElement(content)}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
