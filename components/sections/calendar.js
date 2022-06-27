import React, { useState, useEffect } from "react";
import EventCard from "../elements/event/event-card";
import { filterByDate } from "utils/helper-functions";
import { fetchEvents } from "utils/msft-graph-api";

export default function Calendar(props) {
  const [events, setEvents] = useState(filterByDate(props.eventData));
  const [session, loading] = useSession();

  useEffect(() => {
    if (session) {
      setLoggedIn(true);
      // eventData contains every event in the RADx calendar, logged in users see every event
      async function fetchMyAPI() {
        let eventData2 = await fetchEvents(props.token);
        let sortedEvents = filterByDate(eventData2);
        setEvents(sortedEvents);
      }
      fetchMyAPI();
    } else {
      // Events created in the RADx Calendar with out a category label are collected in filteredEvents
      // These are the events avaiable to the public
      async function fetchMyAPI() {
        let eventData2 = await fetchEvents(props.token);
        const publicEvents = eventData2.filter((event) => {
          if (
            event.categories.length === 0 ||
            event.categories[0] === "Green category"
          ) {
            return event;
          }
        });
        let sortedEvents = filterByDate(publicEvents);
        setEvents(sortedEvents);
      }
      fetchMyAPI();
    }
  }, [props.token, session]);

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
