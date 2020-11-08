import './Task.css';

import { block } from 'bem-cn';
import React from 'react';
import TaskProps from 'src/components/task/TaskProps';
import { formatTime } from 'src/utils/dateFormatting';

const b = block('task');

function DayRecord(props: TaskProps): JSX.Element {
  return (
    <div className={b('wrapper')}>
      <div className={b()}>
        {props.data.time ? <div>{formatTime(props.data.time)}</div> : null}
        <div>{props.data.title}</div>
      </div>
    </div>
  );
}

export default DayRecord;
