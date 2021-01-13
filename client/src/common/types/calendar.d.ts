interface TaskData {
  id: number;
  title: string;
  status: boolean;
  time: Date | null;
}

interface DayRecordData {
  id: number;
  tasks: TaskData[];
  date: Date;
}
