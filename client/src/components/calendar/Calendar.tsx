import './Calendar.css';

import { block } from 'bem-cn';
import React, { useEffect, useState } from 'react';
import DayRecord from 'src/components/day_record/DayRecord';
import Page from 'src/components/page/Page';
import { getDummyDayRecords } from 'src/utils/dummyDayRecords';

const b = block('calendar');

function Calendar(): JSX.Element {
  const dummy: DayRecordData[] = [];
  const [dayRecords, setDayRecords] = useState(dummy);

  useEffect(() => {
    const fetchDayRecords = async (): Promise<void> => {
      setDayRecords(getDummyDayRecords());
    };

    fetchDayRecords();
  }, []);

  return (
    <Page>
      <div className={b()}>
        {dayRecords.map((dayRecord) => (
          <DayRecord key={dayRecord.date.getTime()} data={dayRecord} />
        ))}
      </div>
    </Page>
  );
}

export default Calendar;
