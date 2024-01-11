import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ActivityCard from '../../components/activity-card';
import {getActivities} from '../../services/services';
import {Activity} from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import {styles} from './activity-screen.style';
import {hikingIcon, spinningIcon, surfingIcon, weightsIcon} from '../../assets';
import {format} from 'date-fns';

const ActivityScreen: React.FC = () => {
  type Group = {
    title: string;
    data: Activity[];
  };
  const headerImage: ImageSourcePropType = require('../../assets/logo_header.png');
  const iconButton: ImageSourcePropType = require('../../assets/component.png');
  const [scheduledActivities, setScheduledActivities] = useState<Activity[]>(
    [],
  );
  const [groupedActivities, setGroupedActivities] = useState([]);

  const navigation = useNavigation();
  const addScheduledActivity = (newActivity: Activity) => {
    setScheduledActivities(currentActivities => [
      ...currentActivities,
      newActivity,
    ]);
  };

  const getIconFromName = (name: string) => {
    switch (name) {
      case 'hiking':
        return hikingIcon;
      case 'weights':
        return weightsIcon;
      case 'surfing':
        return surfingIcon;
      default:
        return spinningIcon;
    }
  };

  useEffect(() => {
    const groups = scheduledActivities.reduce(
      (acc: {[key: string]: Group}, activity) => {
        const dateString = format(activity.date, 'yyyy-MM-dd');
        if (!acc[dateString]) {
          acc[dateString] = {
            title: format(activity.date, 'MMMM do, EEEE'),
            data: [],
          };
        }
        acc[dateString].data.push(activity);
        return acc;
      },
      {} as {[key: string]: Group},
    );

    const sortedGroups = Object.values(groups).sort((a, b) => a.date - b.date);
    setGroupedActivities(sortedGroups);
  }, [scheduledActivities]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={headerImage} style={styles.headerImage} />
      </View>
      <View style={styles.mainTitle}>
        <Text style={styles.mainHeader}>Track Your Activity</Text>
      </View>
      <View style={styles.cardContainer}>
        {getActivities().map((item: Activity) => (
          <View style={styles.cardItem} key={item.id}>
            <ActivityCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              icon={item.icon}
            />
          </View>
        ))}
      </View>
      <View style={styles.scheduleContainer}>
        <View style={styles.descriptionHolder}>
          <Text style={styles.headerScheduleTitle}>Scheduled Activities</Text>
          {!groupedActivities.length && (
            <Text style={styles.headerSubtitle}>
              You don’t have any activities scheduled yet.
            </Text>
          )}
          <FlatList
            data={groupedActivities}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item}) => {
              return (
                <View>
                  <Text style={styles.date}>{`${new Date(item.data[0].date)
                    .toLocaleString('default', {month: 'long'})
                    .toUpperCase()} ${new Date(
                    item.data[0].date,
                  ).getDate()} `}</Text>
                  <Text style={styles.sectionHeader}>
                    {new Date(item.data[0].date).toLocaleString('default', {
                      weekday: 'long',
                    })}
                  </Text>
                  <FlatList
                    horizontal
                    data={item.data}
                    keyExtractor={activity => activity.id}
                    renderItem={({item: activity}) => (
                      <View style={styles.activityItem}>
                        <View style={styles.activityContainer}>
                          <View style={styles.activityCircle}>
                            <Image
                              source={getIconFromName(activity.activity)}
                              style={styles.activityIcon}
                            />
                          </View>
                        </View>
                        <Text>{format(activity.date, 'h:mm a')}</Text>
                      </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              );
            }}
          />
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScheduleActivity', {
                onSchedule: addScheduledActivity,
              });
            }}>
            <View style={styles.scheduleButton}>
              <View style={styles.buttonIcon}>
                <Image source={iconButton} />
              </View>
              <Text style={styles.buttonText}>SCHEDULE ACTIVITY</Text>
              <View style={styles.buttonIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ActivityScreen;
