import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ActivityScreen from './containers/activity/activity-screen'; // Make sure to create this file in your project
import ScheduleActivityScreen from './containers/schedule/schedule-activity-screen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ActivityScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScheduleActivity"
          component={ScheduleActivityScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
