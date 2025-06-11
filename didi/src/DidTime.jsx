import {useState} from 'react';

function DidTime( {title }) {
  const [did_times, set_did_times] = useState([]);

  function getdate()
  {
    const date = new Date();    
    return date.toLocaleDateString('ko-KR') + ' ' +  date.toLocaleTimeString('ko-KR');
  }

  function checkTime()
  {
    const current_time = getdate();
    // 전체 개수가 1개 이하면 배열에 현재 시간을 추가한다.
    if (did_times.length <= 1)
    {
      const new_did_times = [...did_times, current_time];
      console.log("did_times :", new_did_times);
      set_did_times(new_did_times.sort().reverse());
    }
    else // 전체 개수가 2개면 2번째 배열의 값은 지금 시간으로 변경한다.
    {
      const new_did_times = [...did_times];
      new_did_times[1] = current_time;      
      set_did_times(new_did_times.sort().reverse());
    }
  }

  return (
    <>
      <div className="center_div">
        <div>
          <button onClick={checkTime}>{title}</button>
        </div>
        <div>
          {
            did_times.map( (item) => (
                <div>{item}</div>
              )
            )
          }
        </div>
      </div>
    </>
  )
}

export default DidTime