import React, { useState, useEffect } from "react";
import EventCard from "../elements/event/event-card";
import { filterByDate } from "utils/helper-functions";
import { fetchEvents } from "utils/msft-graph-api";

export default function Calendar(props) {
  const [events, setEvents] = useState(filterByDate(props.eventData));

  useEffect(() => {
      async function fetchMyAPI() {
        let eventData = await fetchEvents(props.token);
        const filteredEvents = eventData.filter((event) => {
          if (
            event.categories[0] === "Green category"
          ) {
            return event;
          }
        });
        let sortedEvents = filterByDate(filteredEvents);
        setEvents(sortedEvents);
      }
      fetchMyAPI();
  }, [props.token]);

  return (
    <>
      <section className="container mt-12">
        <h2 className="mb-[8px] text-[#4a66ac] font-bold text-2xl">
          Upcoming Events
        </h2>
        <hr className="text-orange border-t-[2px] border-orange"></hr>
        {events.length !== 0 &&
          events.map((event, i) => {
            if (new Date(event.start.dateTime) >= new Date()) {
              return <EventCard key={event.subject + i} event={event} />;
            }
          })}
      </section>
      <section className="container mt-12">
        <h2 className="mb-[8px] text-[#4a66ac] font-bold text-2xl">
          Past Events
        </h2>
        <hr className="text-orange border-t-[2px] border-orange"></hr>
        {events.length !== 0 &&
          events.map((event, i) => {
            if (new Date(event.start.dateTime) <= new Date()) {
              return <EventCard key={event.subject + i} event={event} />;
            }
          })}
      </section>
    </>
  );
}
