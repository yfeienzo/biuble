import './App.css';
import Row from './components/Row';
import WeekSlider from './components/WeekSlider';
import { useState } from 'react';

const data = [
  {
    id: 1,
    week: "Mon",
    date: "3.9",
    time: "12.55pm",
    location: "Sydney",
    content: "what is wrong",
    type: "words",
    number: 1,
  },
  {
    id: 2,
    week: "Wed",
    date: "3.14",
    time: "11.12pm",
    location: "Melbourne",
    content: "https://media.istockphoto.com/id/642438646/photo/healthy-hens-are-happy-hens.jpg?s=1024x1024&w=is&k=20&c=W8YnlOzr05Oqd_EWRHkF1InIbc24P2FDuUaQ1Vgo_8s=",
    type: "pics",
    number: 1,
  },
  {
    id: 3,
    week: "Mon",
    date: "4.9",
    time: "9.10am",
    location: "Sydney",
    content: "oks simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    type: "words",
    number: 1
  },
  {
    id: 4,
    week: "Mon",
    date: "4.9",
    time: "12.55pm",
    location: "Sydney",
    content: "yes",
    type: "words",
    number: 1
  },
]

function App() {
  const [number, setNumber] = useState(1)
  return (
    <>
    <WeekSlider />
    {data.sort((a, b) => b.id - a.id).map(day => <Row day={day} />)}
    </>
  );
}

export default App;
