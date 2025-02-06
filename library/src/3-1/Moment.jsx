import React, {useState} from 'react'
import moment from "moment-timezone";
import { useRef } from 'react';

export default function Moment() {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "week");
       const cloneMomentDate = newMomentDate.clone().add(1, "week");

        const [day, setDay] = useState('');
  const birthDayRef = useRef(null);

  const handleBirthDayChange = (e) => {
    setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"));
  }

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>{momentDate.format()}</div><br />
      <div>{newMomentDate.format()}</div><br />
      <div>{cloneMomentDate.format()}</div>
      <br />
      <div>Summer time (London)</div>
      <div>2018년 3월 10일 13시에 하루 더하기:
        {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1, "day").format()}
      </div>
      <div>2018년 3월 10일 13시에 24시간 더하기:  {' '}
        {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24, "hour").format()}
      </div>
      <br />
      <div>Leap year (Korea)</div>
      <div>2017년 1월 1일 1년 빼기:
        {moment("2017-01-01").subtract(1, "year").format()}
      </div>
        <div>2017년 1월 1일 365일 빼기:
         {moment("2017-01-01").subtract(365, "day").format()}
      </div>
      <br/>
      <div>자신의 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange}/>
        <div>무슨 요일일까요?</div>
        <div>요일: {day}</div>
      </div>
        <div>
          <div>2017년 1월 1일과 2025년 02월 05일은 몇일 차이일까요?</div>
          <div>{moment("2017-01-01 3:00").diff(moment("2017-01-01 3:00"), "days")}</div>
        </div>
    </div>
  )
}
