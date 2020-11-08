import './DayRecord.css';

import { block } from 'bem-cn';
import React from 'react';
import DayRecordProps from 'src/components/day_record/DayRecordProps';
import Task from 'src/components/task/Task';
import { formatDate, isToday } from 'src/utils/dateFormatting';

const b = block('day-record');

function DayRecord(props: DayRecordProps): JSX.Element {
  // [currentTime, setCurrentTime] = useState(new Date());

  return (
    <div className={b({ focus: isToday(props.data.date) })}>
      <div
        className={b('date-section', {
          focus: isToday(props.data.date),
          inactive: !props.data.tasks.length,
        })}
      >
        {formatDate(props.data.date)}
      </div>
      {props.data.tasks.length ? (
        <div className={b('tasks-section')}>
          {props.data.tasks.map((task) => (
            <Task key={task.id} data={task} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DayRecord;
