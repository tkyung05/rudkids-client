import { useState } from 'react';

import useInterval from './useInterval';

interface CurrentDdayTimeType {
  day: number;
  hour: number;
  min: number;
  sec: number;
}

const SEC = 1000;
const MIN = 60;
const HOUR = 60;
const DAY = 24;
const ONE_DAY = SEC * MIN * HOUR * DAY;

function useDday(D_DAY: string) {
  const [currentDdayTime, setCurrentDdayTime] = useState<CurrentDdayTimeType | null>(null);

  useInterval(() => {
    const dday = new Date(D_DAY).getTime();
    const today = new Date().getTime();

    const gap = dday - today;

    const day = Math.ceil(gap / ONE_DAY);
    const hour = Math.ceil((gap % ONE_DAY) / (SEC * MIN * HOUR));
    const min = Math.ceil((gap % (SEC * MIN * HOUR)) / (SEC * MIN));
    const sec = Math.ceil((gap % (SEC * MIN)) / SEC);

    setCurrentDdayTime({ day, hour, min, sec });
  }, 1000);

  return {
    currentDdayTime,
  };
}

export default useDday;
