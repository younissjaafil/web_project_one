import React, { useState } from "react";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "2025-12-15",
      location: "New York Convention Center",
      description:
        "Annual technology conference featuring the latest innovations",
      maxAttendees: 100,
      registeredUsers: [],
    },
    {
      id: 2,
      title: "Workshop: React Fundamentals",
      date: "2025-11-20",
      location: "Online",
      description: "Learn React basics from industry experts",
      maxAttendees: 50,
      registeredUsers: [],
    },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    maxAttendees: 50,
  });

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const event = {
      id: events.length + 1,
      ...newEvent,
      registeredUsers: [],
    };
    setEvents([...events, event]);
    setNewEvent({
      title: "",
      date: "",
      location: "",
      description: "",
      maxAttendees: 50,
    });
    setShowCreateForm(false);
  };

  const handleRegister = (eventId) => {
    if (!userName.trim()) {
      alert("Please enter your name to register");
      return;
    }

    setEvents(
      events.map((event) => {
        if (event.id === eventId) {
          if (event.registeredUsers.includes(userName)) {
            alert("You are already registered for this event!");
            return event;
          }
          if (event.registeredUsers.length >= event.maxAttendees) {
            alert("Sorry, this event is full!");
            return event;
          }
          return {
            ...event,
            registeredUsers: [...event.registeredUsers, userName],
          };
        }
        return event;
      })
    );
    alert("Successfully registered!");
  };

  const handleUnregister = (eventId) => {
    if (!userName.trim()) {
      alert("Please enter your name to unregister");
      return;
    }

    setEvents(
      events.map((event) => {
        if (event.id === eventId) {
          if (!event.registeredUsers.includes(userName)) {
            alert("You are not registered for this event!");
            return event;
          }
          return {
            ...event,
            registeredUsers: event.registeredUsers.filter(
              (user) => user !== userName
            ),
          };
        }
        return event;
      })
    );
    alert("Successfully unregistered!");
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== eventId));
    }
  };

  return (
    <div className="events-container">
      <h1>Event Management</h1>

      <div className="user-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="user-input"
        />
      </div>

      <div className="actions-header">
        <button
          className="btn-create"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? "Cancel" : "Create New Event"}
        </button>
      </div>

      {showCreateForm && (
        <div className="create-event-form">
          <h2>Create New Event</h2>
          <form onSubmit={handleCreateEvent}>
            <input
              type="text"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              required
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) =>
                setNewEvent({ ...newEvent, location: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Max Attendees"
              value={newEvent.maxAttendees}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  maxAttendees: parseInt(e.target.value),
                })
              }
              min="1"
              required
            />
            <button type="submit" className="btn-submit">
              Create Event
            </button>
          </form>
        </div>
      )}

      <div className="events-list">
        <h2>Available Events ({events.length})</h2>
        {events.length === 0 ? (
          <p className="no-events">
            No events available. Create one to get started!
          </p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3>{event.title}</h3>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  Delete
                </button>
              </div>
              <p className="event-date">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-description">{event.description}</p>
              <p className="event-capacity">
                👥 {event.registeredUsers.length} / {event.maxAttendees}{" "}
                registered
              </p>

              {event.registeredUsers.length > 0 && (
                <div className="registered-users">
                  <strong>Registered:</strong>
                  <ul>
                    {event.registeredUsers.map((user, index) => (
                      <li key={index}>{user}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="event-actions">
                <button
                  className="btn-register"
                  onClick={() => handleRegister(event.id)}
                  disabled={event.registeredUsers.length >= event.maxAttendees}
                >
                  Register
                </button>
                <button
                  className="btn-unregister"
                  onClick={() => handleUnregister(event.id)}
                >
                  Unregister
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Events;
