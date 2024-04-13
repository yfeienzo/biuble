import './App.css';
import './Admin.css';
import Row from './components/Row';
import WeekSlider from './components/WeekSlider';
import { useState , useEffect} from 'react';
import { supabase } from './utils/supabase'
import FadeIn from 'react-fade-in';


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

function Admin() {
  const [validated, setValidated] = useState(false)
  const [pass, setPass] = useState('')
  const [notify, setNotify] = useState(false);

  const [number, setNumber] = useState(getDateWeek())

  const [posts, setPosts] = useState([]);

    useEffect(() => {
      getPosts();
    }, []);

    async function getPosts() {
      const { data } = await supabase.from("posts").select();
      setPosts(data);
    }


    if (validated) {
        return (
            <>
            <div className="header">
            <div className='year'>2024</div>
            </div>
            <WeekSlider number={number} handleClick={setNumber} />
            {posts.sort((a, b) => b.id - a.id).map(day => day.number === number && <Row day={day} />)}
            <footer className='footer'>2024 © Yang Fei</footer>
            </>
        );
    }
    else {
        return (
            <>
            <div className="validationContainer">
                <input className="validationInput" type="text" value={pass} onChange={(e) => setPass(e.target.value)} />
                <div className="validationButton" onClick={()=> pass === '27998' ? setValidated(true) : setNotify(true)}>it's me</div>
            </div>
            {notify && <FadeIn><div className='wrongText'>wrong pass!</div></FadeIn>}
            </>
        )
    }
}

export default Admin;
