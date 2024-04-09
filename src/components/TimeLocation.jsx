import "./timelocation.css"


function TimeLocation ({day}) {
    return (
      <div className="timelocation">
        <div className="weekndate">
          <div className="week">{day.week}</div>
          <div className="date">{day.date}</div>
        </div>
        <div className="timestamp">{day.time}</div>
        <div className="location">{day.location}</div>
      </div>
    );
}

export default TimeLocation