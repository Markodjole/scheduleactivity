/* eslint-disable prettier/prettier */

import {ImageSourcePropType} from 'react-native';

export type Activity = {
  id: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
  date: Date | string | number;
};

export type SelectedActivity = Activity['id'] | null;

export type ScheduledItem = {
  id: string,
  activity: SelectedActivity,
  duration: string,
  date: Date | string | number
};
