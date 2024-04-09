import "./weekslider.css"

function WeekSlider () {
    return (
      <div className="sliderContainer">
         <div className="prevButton">prev</div>
         <div className="currentWeek">Week 17<br /> <span className="currentRange">2024.3.15-2024.4.18</span></div>
         <div className="nextButton">next</div>
      </div>
    );
}

export default WeekSlider