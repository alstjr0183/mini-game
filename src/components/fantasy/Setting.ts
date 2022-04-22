import { Event } from '../../types/fantasy/hero';

export const keyDownHandler = (e: Event, setting: { keyState: object }, setSetting: any) => {
  if (e.key === 'd') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        right: true,
      },
    });
  } else if (e.key === 'a') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        left: true,
      },
    });
  } else if (e.key === 'w') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        top: true,
      },
    });
  } else if (e.key === 's') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        down: true,
      },
    });
  }
};

export const keyUpHandler = (e: Event, setting: { keyState: object }, setSetting: any) => {
  if (e.key === 'd') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        right: false,
      },
    });
  } else if (e.key === 'a') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        left: false,
      },
    });
  } else if (e.key === 'w') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        top: false,
      },
    });
  } else if (e.key === 's') {
    setSetting({
      ...setting,
      keyState: {
        ...setting.keyState,
        down: false,
      },
    });
  }
};
