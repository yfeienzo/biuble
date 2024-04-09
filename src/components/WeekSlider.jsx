import "./weekslider.css"
import Prev from '../assets/left.svg';
import Next from '../assets/right.svg';


function WeekSlider ({number, handleClick}) {
    return (
      <div className="sliderContainer">
         <img src={Prev} onClick={() => handleClick(number-1)} className="prevButton" />
         <div className="currentWeek">Week {number}<br /> <span className="currentRange">2024.3.15-2024.4.18</span></div>
         <img src={Next} onClick={() => handleClick(number+1)} className="nextButton" />
      </div>
    );
}

export default WeekSlider