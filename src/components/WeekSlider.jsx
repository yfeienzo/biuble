import "./weekslider.css"
import Prev from '../assets/left.svg';
import Next from '../assets/right.svg';


function WeekSlider () {
    return (
      <div className="sliderContainer">
         <img src={Prev} onClick={() => console.log('prev')} className="prevButton" />
         <div className="currentWeek">Week 17<br /> <span className="currentRange">2024.3.15-2024.4.18</span></div>
         <img src={Next} onClick={() => console.log('next')} className="nextButton" />
      </div>
    );
}

export default WeekSlider