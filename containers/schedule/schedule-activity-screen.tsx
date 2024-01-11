import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {colors} from '../../theme/colors';
import {
  closeIcon,
  hikingIcon,
  spinningIcon,
  surfingIcon,
  weightsIcon,
} from '../../assets';
import SelectButton from '../../components/select-button';
import {ScheduledItem, SelectedActivity} from '../../types/types';
import {styles} from './schedule-activity-screen.style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  ScheduleActivity: undefined;
};

type ScheduleActivityScreenRouteProp = RouteProp<
  RootStackParamList,
  'ScheduleActivity'
>;

type ScheduleActivityScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ScheduleActivity'
>;

type Props = {
  route: ScheduleActivityScreenRouteProp;
  navigation: ScheduleActivityScreenNavigationProp;
};

interface Activity {
  id: string;
  label: string;
  icon: ImageSourcePropType;
}

const ScheduleActivityScreen = ({route, navigation}: Props) => {
  const [date, setDate] = useState<Date>(new Date());
  const [duration, setDuration] = useState<string>('15 min');
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [pickerType, setPickerType] = useState<'date' | 'duration' | null>(
    null,
  );
  const [selectedActivity, setSelectedActivity] =
    useState<SelectedActivity>(null);
  const durations = ['15 min', '30 min', '45 min', '60 min'];

  const activities: Activity[] = [
    {id: 'spinning', label: 'SPINNING', icon: spinningIcon},
    {id: 'surfing', label: 'SURFING', icon: surfingIcon},
    {id: 'weights', label: 'WEIGHTS', icon: weightsIcon},
    {id: 'hiking', label: 'HIKING', icon: hikingIcon},
  ];
  const [isDurationModalVisible, setIsDurationModalVisible] = useState(false);

  const {onSchedule} = route.params;

  const handleActivityScheduled = () => {
    const activityDetails: ScheduledItem = {
      id: Math.random().toString(),
      activity: selectedActivity,
      duration: duration,
      date: date,
    };

    onSchedule(activityDetails);
    navigation.goBack();
  };

  const selectDuration = (selectedDuration: string) => {
    setDuration(selectedDuration);
    setIsDurationModalVisible(false);
    closeModal();
  };

  const showDurationPicker = () => {
    setPickerType('duration');
    setModalVisible(true);
  };

  const showDatePicker = () => {
    setPickerType('date');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setPickerType(null);
  };

  const formatDate = (newDate: Date): string => {
    return format(newDate, 'EEEE, MMMM do h:mm a');
  };

  const goBack = () => {
    navigation.goBack();
  };

  const activitySelectItem = (activity: Activity) => (
    <View key={activity.id}>
      <TouchableOpacity
        style={[
          styles.iconHolder,
          selectedActivity === activity.id
            ? styles.selectedIcon
            : styles.unselectedIcon,
        ]}
        onPress={() => setSelectedActivity(activity.id)}>
        <Image
          source={activity.icon}
          style={[
            styles.icon,
            selectedActivity === activity.id ? styles.selectedIconImage : {},
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.iconText}>{activity.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.closeButton} onPress={goBack}>
          <Image
            source={closeIcon}
            tintColor={colors.white}
            style={styles.closeButtonImage}
          />
        </TouchableOpacity>

        <Text style={styles.header}>Schedule your activity</Text>

        <View style={styles.iconContainer}>
          {activities.map(activitySelectItem)}
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>
            How long do you want to do this activity?
          </Text>
          <SelectButton
            arrow
            selectedValue={duration}
            onPress={showDurationPicker}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formLabel}>
            When do you want to do this activity?
          </Text>
          <SelectButton
            arrow={false}
            selectedValue={formatDate(date)}
            onPress={showDatePicker}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.scheduleButton}
        onPress={handleActivityScheduled}>
        <Text style={styles.scheduleButtonText}>SCHEDULE</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        style={styles.bottomModal}>
        <View style={styles.modalContent}>
          {pickerType === 'date' ? (
            <DatePicker
              onPointerDown={closeModal}
              date={date}
              onDateChange={setDate}
              mode="datetime"
            />
          ) : (
            <FlatList
              data={durations}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.durationItem}
                  onPress={() => selectDuration(item)}>
                  <Text style={styles.durationText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default ScheduleActivityScreen;
