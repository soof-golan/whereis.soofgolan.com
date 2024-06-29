import './App.css'
import moment from 'moment'
import {useState} from "react";

type Schedule = Array<{
    location: string,
    date: moment.Moment
}>

const schedule: Schedule = [
    {
        location: "👨‍💻 Israel",
        date: moment('2023-01-01')
    },
    {
        location: "🔥 Midburn (Israel)",
        date: moment('2024-Jun-05')
    },
    {
        location: "🛫 Israel -> Spain",
        date: moment('2024-06-18')
    },
    {
        location: "👨‍💻 Valencia",
        date: moment('2024-06-19')
    },
    {
        location: "🍹 Barcelona",
        date: moment('2024-06-29')
    },
    {
        location: "🔥 Nowhere (Spain)",
        date: moment('2024-07-01')
    },
    {
        location: "🍹 Barcelona",
        date: moment('2024-07-07')
    },
    {
        location: "🛫 Spain -> Czech Republic",
        date: moment('2024-07-08')
    },
    {
        location: "👨‍💻 Prague",
        date: moment('2024-07-09')
    },
    {
        location: "🛫 Czech Republic -> Sweden",
        date: moment('2024-07-21')
    },
    {
        location: "🔥 Borderland (Sweden)",
        date: moment('2024-07-22')
    },
    {
        location: "🍸 Copenhagen",
        date: moment('2024-07-28')
    },
    {
        location: "👨‍💻 Vienna",
        date: moment('2024-07-31')
    },
    {
        location: "🔥 Schönburn (Austria)",
        date: moment('2024-07-22')
    },
    {
        location: "👨‍💻 Berlin",
        date: moment('2024-08-12')
    },
    {
        location: "👨‍💻 Israel",
        date: moment('2024-08-31')
    }
];

function App() {
    const [now, setNow] = useState(moment());
    const currentEvent = schedule
        .map(e => e)
        .findLast(event => event.date.isSameOrBefore(now)
        );

    const nextEventIndex = schedule.findIndex((e) => e == currentEvent)
    const nextEvent = schedule[nextEventIndex + 1]
    return (
        <>
            <header>
                <h1>Where is Soof?</h1>
            </header>
            <input type="date" value={now.format("YYYY-MM-DD")} onChange={(e) => {
                setNow(moment(e.target.value));
            }}/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
            }}>
                <h1>Location</h1>
                <h2>{currentEvent?.location}</h2>
                <h1>Next Up</h1>
                <h2>{nextEvent?.location}</h2>
                <h2>{nextEvent?.date.fromNow()} ({nextEvent?.date.format("YYYY-MM-DD")})</h2>
            </div>
            <hr/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
            }}>
                <h4>Full Schedule</h4>
                {
                    schedule.filter(event => event.date.isAfter(now))
                        .map((event, index) => (
                            <p key={index}>{event.location}: {event.date.format("YYYY-MM-DD")}</p>
                        ))
                }
            </div>
            <hr/>
            <footer style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "start",

            }}>
                <div style={{
                    paddingBlockStart: "1em",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                }}>
                    <a href="https://github.com/soof-golan/whereis.soofgolan.com">Source Code</a>
                </div>
                <div style={{
                    paddingBlockStart: "1em",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                }}>
                    Copyright (c) 2024 Soof Golan
                </div>
            </footer>
        </>
    )
}

export default App
