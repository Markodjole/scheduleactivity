import {
  hiking,
  hikingIcon,
  spinning,
  spinningIcon,
  surfing,
  surfingIcon,
  weights,
  weightsIcon,
} from '../assets';
import {Activity} from '../types/types';

const activities: Activity[] = [
  {
    id: '1',
    title: 'Surfing',
    subtitle: 'OCEAN BEACH',
    image: surfing,
    icon: surfingIcon,
    date: new Date(),
  },
  {
    id: '2',
    title: 'Hiking',
    subtitle: 'TORREY PINES',
    image: hiking,
    icon: hikingIcon,
    date: new Date(),
  },
  {
    id: '3',
    title: 'Spinning',
    subtitle: 'TORREY PINES',
    image: spinning,
    icon: spinningIcon,
    date: new Date(),
  },
  {
    id: '4',
    title: 'Weights',
    subtitle: 'TORREY PINES',
    image: weights,
    icon: weightsIcon,
    date: new Date(),
  },
];

export const getActivities = () => {
  return activities;
};
