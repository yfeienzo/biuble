import "./row.css"
import TimeLocation from "./TimeLocation";
import { useTypewriter } from 'react-simple-typewriter'



function Row ({day}) {
    const [poem] = useTypewriter({
        words: day.type === "poems" && day.content,
        loop: 0,
        deleteSpeed: 30
      })
    return (
        <div className="row">
            <TimeLocation day={day} />
            <div className="content">{
            day.type === "words" ? day.content :
            day.type === "pics" ? day.content.map(address => <img width="100%" src={address} /> ):
            day.type == "poems" ? 
            <div>{poem}</div>
            : <div>no content</div>}</div>
        </div>
    );
}

export default Row