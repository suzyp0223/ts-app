import React from 'react'
import dayjs from 'dayjs';

// 날짜가 moment와 달리 수정가능하게 변경됨(현재시간,날짜).
export default function Day() {
    const momentDate = dayjs();
    const newMomentDate = momentDate.add(1, "week");
    const cloneMomentDate = newMomentDate.clone().add(1, "week");


  return (
    <div>
<h1>Moment</h1>
      <div>Immutable Check</div>
      <div>{momentDate.format()}</div><br />
      <div>{newMomentDate.format()}</div><br />
      <div>{cloneMomentDate.format()}</div>
      <br />
    </div>
  )
}
