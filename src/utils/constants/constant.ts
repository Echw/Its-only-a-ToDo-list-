import { BsKanban, BsCalendar, BsListCheck } from "react-icons/bs";
import { List } from "./../../pages/List/List";
import Kanban from "./../../pages/Kanban/Kanban";
import Calendar from "./../../pages/Calendar/Calendar";

export const data = [
  {
    label: "List",
    value: "list",
    icon: BsListCheck,
    content: List,
  },
  {
    label: "Kanaban",
    value: "kanban",
    icon: BsKanban,
    content: Kanban,
  },
  {
    label: "Calendar",
    value: "calendar",
    icon: BsCalendar,
    content: Calendar,
  },
];
