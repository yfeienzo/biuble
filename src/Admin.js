import './App.css';
import './Admin.css';
import Row from './components/Row';
import WeekSlider from './components/WeekSlider';
import { useState , useEffect} from 'react';
import { supabase } from './utils/supabase'
import FadeIn from 'react-fade-in';
import Add from './assets/plus.svg';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


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
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
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


    const publish = () => {
        console.log('publish')
    }



    if (validated) {
        return (
            <>
            <div className="header">
                <div className='year'>2024</div>
                <img src={Add} className='login' onClick={onOpenModal} />
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>New</h2>
                <textarea className='publishContent' name="content" rows={4} cols={40} />
                <br />
                <div className='publishBtn' onClick={publish}>Publish</div>
            </Modal>
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
