import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useAppContext } from "../../utils/hooks/useAppContext";
import { useMemo } from "react";

const Calendar = () => {
  const { tasks } = useAppContext();

  const memoizedEventsFn = useMemo(() => {
    return tasks.map((task) => {
      return {
        id: task.id,
        start: task.start,
        title: task.title,
      };
    });
  }, [tasks]);

  return (
    <>
      <FullCalendar
        height="100%"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={memoizedEventsFn}
        eventContent={renderEventContent}
      />
    </>
  );
};

// a custom render function
function renderEventContent(eventInfo: any) {
  return (
    <>
      <i className="overflow-hidden	whitespace-normal">
        {eventInfo.event.title}
      </i>
    </>
  );
}

export default Calendar;
