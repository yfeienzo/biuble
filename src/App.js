import './App.css';
import Row from './components/Row';
import WeekSlider from './components/WeekSlider';
import { useState , useEffect} from 'react';
import { supabase } from './utils/supabase'
import Login from './assets/login.svg';
import { Link } from "react-router-dom";


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

  const [posts, setPosts] = useState([]);

    useEffect(() => {
      getPosts();
    }, []);

    async function getPosts() {
      const { data } = await supabase.from("posts").select();
      setPosts(data);
    }


  return (
    <>
    <div className="header">
      <Link className='year' to="/"><div >2024</div></Link>
      <Link to="/admin"><img src={Login} className="login" /></Link>
    </div>
    <WeekSlider number={number} handleClick={setNumber} />
    {posts.sort((a, b) => b.id - a.id).map(day => day.number === number  && day.public  && <Row day={day} />)}
    <footer className='footer'>2024 © Yang Fei</footer>
    </>
  );
}

export default App;
