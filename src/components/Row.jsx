import "./row.css"
import TimeLocation from "./TimeLocation";

function Row ({day}) {
    return (
        <div className="row">
            <TimeLocation day={day} />
            <div className="content">{day.type == "words" && day.content || day.type == "pics" && day.content.map(address => <img width="100%" src={address} /> )}</div>
        </div>
    );
}

export default Row