import { Calendar, Badge } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Moment } from "moment";
import React from "react";
import { IEvent } from "../models/IEvent";
import { formateDate } from "../utils/date";

interface CalendarEventProps {
  events: IEvent[];
}

export const CalendarEvent = (props: CalendarEventProps) => {
  const dateCellRender = (date: Moment) => {
    const formatData = formateDate(date.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatData
    );
    return (
      <div>
        {currentDayEvents.map((ev, i) => (
          <div key={i}>
            <p>{ev.author}</p>
            <p>{ev.guest}</p>
            <p>{ev.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <Calendar onPanelChange={onPanelChange} dateCellRender={dateCellRender} />
  );
};
