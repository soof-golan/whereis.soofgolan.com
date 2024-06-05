import './App.css'
import moment from 'moment'

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
        date: moment('2024-06-05')
    },
    {
        location: "🛫 Israel -> Spain",
        date: moment('2024-06-11')
    },
    {
        location: "👨‍💻 Valencia",
        date: moment('2024-06-18')
    },
    {
        location: "🔥 Nowhere (Spain)",
        date: moment('2024-07-01')
    },
    {
        location: "🛫 Spain -> Czech Republic",
        date: moment('2024-07-08')
    },
    {
        location: "👨‍💻 Prague",
        date: moment('2024-07-08')
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
        location: "👨‍💻 Berlin",
        date: moment('2024-08-12')
    },
    {
        location: "👨‍💻 Israel",
        date: moment('2024-08-12')
    }
];

function App() {
    const now = moment();
    const currentEvent = schedule.find(event => event.date.isBefore(now));
    const nextEvent = schedule.find(event => event.date.isAfter(now));
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
            }}>
                <h1>Current Location</h1>
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
