import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useAppContext } from "../../utils/hooks/useAppContext";

const Calendar = () => {
  const { tasks } = useAppContext();

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={tasks}
        eventContent={renderEventContent}
      />
    </div>
  );
};

// a custom render function
function renderEventContent(eventInfo: any) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
