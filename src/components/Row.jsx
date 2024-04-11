import "./row.css"
import TimeLocation from "./TimeLocation";
import { useTypewriter } from 'react-simple-typewriter'
import FadeIn from 'react-fade-in';



function Row ({day}) {
    const [poem] = useTypewriter({
        words: day.type === "poems" && JSON.parse(day.content),
        loop: 0,
        deleteSpeed: 30
      })
    return (
        <FadeIn>
            <div className="row">
                <TimeLocation day={day} />
                <div className="content">{
                day.type === "words" ? day.content :
                day.type === "pics" ? JSON.parse(day.content).map(address => <img width="100%" src={address} /> ):
                day.type == "poems" ? 
                <div>{poem}</div>
                : <div>no content</div>}</div>
            </div>
        </FadeIn>
    );
}

export default Row