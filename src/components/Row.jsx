import "./row.css"
import TimeLocation from "./TimeLocation";

function Row ({day}) {
    return (
        <div className="row">
            <TimeLocation day={day} />
            <div className="content">{day.type == "words" && day.content || <img width="100%" src={day.content} /> }</div>
        </div>
    );
}

export default Row