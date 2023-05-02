import { BsKanban, BsCalendar, BsListCheck } from "react-icons/bs";
import { List } from "./../../pages/List/List";
import Kanban from "./../../pages/Kanban/Kanban";
import Calendar from "./../../pages/Calendar/Calendar";

export const data = [
  {
    label: "List",
    value: "html",
    icon: BsListCheck,
    content: List,
  },
  {
    label: "Kanaban",
    value: "react",
    icon: BsKanban,
    content: Kanban,
  },
  {
    label: "Calendar",
    value: "vue",
    icon: BsCalendar,
    content: Calendar,
  },
];
