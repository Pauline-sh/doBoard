import './Task.css';

import { block } from 'bem-cn';
import React from 'react';
import TaskProps from 'src/components/task/TaskProps';
import picUrl, { ReactComponent as Pic } from 'src/resources/icons/correct.svg';
import { formatTime } from 'src/utils/dateFormatting';

const b = block('task');

function DayRecord(props: TaskProps): JSX.Element {
  const renderStatus = (): JSX.Element => {
    return (
      <div className={b('status-container', { focus: props.focus })}>
        <img
          src={picUrl}
          className={b('status', { done: props.data.status })}
        />
      </div>
    );
  };

  return (
    <div className={b('wrapper')}>
      <div className={b()}>
        {renderStatus()}
        <div>{props.data.title}</div>
        {props.data.time ? <div>{formatTime(props.data.time)}</div> : null}
      </div>
    </div>
  );
}

export default DayRecord;
