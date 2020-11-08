export const getDummyDayRecords = (): DayRecordData[] => {
  const today = new Date();

  const todayAtSeven = new Date(today);
  todayAtSeven.setHours(7, 0, 0, 0);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const aftertomorrow = new Date();
  aftertomorrow.setDate(today.getDate() + 2);

  return [
    {
      id: 0,
      date: yesterday,
      tasks: [],
    },
    {
      id: 1,
      date: today,
      tasks: [
        {
          id: 10,
          time: todayAtSeven,
          title: 'Полить аглаонему',
          status: false,
        },
        {
          id: 20,
          time: null,
          title: 'Купить воду',
          status: false,
        },
      ],
    },
    {
      id: 2,
      date: tomorrow,
      tasks: [],
    },
    {
      id: 3,
      date: aftertomorrow,
      tasks: [
        {
          id: 10,
          time: todayAtSeven,
          title: 'Полить аглаонему',
          status: false,
        },
        {
          id: 20,
          time: null,
          title: 'Купить воду',
          status: false,
        },
      ],
    },
  ];
};
