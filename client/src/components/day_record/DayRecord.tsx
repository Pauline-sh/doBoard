import './DayRecord.css';

import { block } from 'bem-cn';
import React from 'react';
import DayRecordProps from 'src/components/day_record/DayRecordProps';
import Task from 'src/components/task/Task';
import { formatDate, isToday } from 'src/utils/dateFormatting';

const b = block('day-record');

function DayRecord(props: DayRecordProps): JSX.Element {
  // [currentTime, setCurrentTime] = useState(new Date());
  const shouldFocus = isToday(props.data.date);

  return (
    <div className={b({ focus: shouldFocus })}>
      <div
        className={b('date-section', {
          focus: shouldFocus,
          inactive: !props.data.tasks.length,
        })}
      >
        {formatDate(props.data.date)}
      </div>
      {props.data.tasks.length ? (
        <div className={b('tasks-section')}>
          {props.data.tasks.map((task) => (
            <Task key={task.id} data={task} focus={shouldFocus} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DayRecord;
