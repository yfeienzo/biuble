import "./weekslider.css"
import Prev from '../assets/left.svg';
import Next from '../assets/right.svg';


function getDateOfISOWeek(w, y) {
  var simple = new Date(y, 0, 1 + (w - 1) * 7);
  var dow = simple.getDay();
  var ISOweekStart = simple;
  if (dow <= 4)
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
  else
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
  return ISOweekStart;
}


function getDateRangeOfWeek(w, y) {
  var date = getDateOfISOWeek(w, y);
  const startDate = date.getMonth()+1 + '.' + date.getDate()
  const endDate = date.getMonth()+1 + '.' + (date.getDate()+ 6)
  return `${startDate} - ${endDate}`;
}

function WeekSlider ({number, handleClick}) {
    return (
      <div className="sliderContainer">
         <img src={Prev} onClick={() => number - 1 > 0 ? handleClick(number-1) : handleClick(number)} className="prevButton" />
         <div className="currentWeek">Week {number}<br /> <span className="currentRange">{getDateRangeOfWeek(number, 2024)}</span></div>
         <img src={Next} onClick={() => number + 1 > 53 ? handleClick(number) : handleClick(number+1)} className="nextButton" />
      </div>
    );
}

export default WeekSlider