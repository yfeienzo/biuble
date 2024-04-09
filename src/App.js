import './App.css';
import TimeLocation from './components/TimeLocation';

const data = [
  {
    id: 1,
    week: "Mon",
    date: "3.9",
    time: "12.55pm",
    location: "Sydney"
  },
  {
    id: 2,
    week: "Wed",
    date: "3.14",
    time: "11.12pm",
    location: "Melbourne"
  },
  {
    id: 3,
    week: "Mon",
    date: "4.9",
    time: "9.10am",
    location: "Sydney"
  },
  {
    id: 4,
    week: "Mon",
    date: "4.9",
    time: "12.55pm",
    location: "Sydney"
  },
]

function App() {
  return (
    <>
    {data.sort((a, b) => b.id - a.id).map(day => <TimeLocation day={day} />)}
    </>
  );
}

export default App;
