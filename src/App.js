import './App.css';
import Row from './components/Row';
import WeekSlider from './components/WeekSlider';
import { useState } from 'react';

const data = [
  {
    id: 1,
    week: "Sat",
    date: "3.9",
    time: "12.55pm",
    location: "Sydney",
    content: "week 16 content",
    type: "words",
    number: 10,
  },
  {
    id: 2,
    week: "Thu",
    date: "3.14",
    time: "11.12pm",
    location: "Melbourne",
    content: '["https://media.istockphoto.com/id/642438646/photo/healthy-hens-are-happy-hens.jpg?s=1024x1024&w=is&k=20&c=W8YnlOzr05Oqd_EWRHkF1InIbc24P2FDuUaQ1Vgo_8s=","https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg"]',
    type: "pics",
    number: 11,
  },
  {
    id: 3,
    week: "Tue",
    date: "4.9",
    time: "9.10am",
    location: "Sydney",
    content: "oks simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "words",
    number: 15
  },
  {
    id: 4,
    week: "Tue",
    date: "4.9",
    time: "12.55pm",
    location: "Sydney",
    content: "yes",
    type: "words",
    number: 15
  },
  {
    id: 5,
    week: "Wed",
    date: "4.10",
    time: "11.00pm",
    location: "Melbourne",
    content: '["A poem","a poem is a poem","a poem is not just words"]',
    type: "poems",
    number: 15
  },
  {
    id: 6,
    week: "Sat",
    date: "4.20",
    time: "11.30pm",
    location: "Perth",
    content: "next week content now this is",
    type: "words",
    number: 16
  },
]

function getDateWeek(date) {
  const currentDate = 
      (typeof date === 'object') ? date : new Date();
  const januaryFirst = 
      new Date(currentDate.getFullYear(), 0, 1);
  const daysToNextMonday = 
      (januaryFirst.getDay() === 1) ? 0 : 
      (7 - januaryFirst.getDay()) % 7;
  const nextMonday = 
      new Date(currentDate.getFullYear(), 0, 
      januaryFirst.getDate() + daysToNextMonday);

  return (currentDate < nextMonday) ? 52 : 
  (currentDate > nextMonday ? Math.ceil(
  (currentDate - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
}

function App() {
  const [number, setNumber] = useState(getDateWeek())
  return (
    <>
    <div className='year'>2024</div>
    <WeekSlider number={number} handleClick={setNumber} />
    {data.sort((a, b) => b.id - a.id).map(day => day.number === number && <Row day={day} />)}
    <footer className='footer'>2024 © Yang Fei</footer>
    </>
  );
}

export default App;
