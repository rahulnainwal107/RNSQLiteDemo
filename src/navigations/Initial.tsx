import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TaskContainer from '../screens/TaskList/TaskContainer';
import AddTaskContainer from '../screens/AddTask/AddTaskContainer';
import UpdateTaskContainer from '../screens/UpdateTask/UpdateTaskContainer';

const Stack = createNativeStackNavigator();

const Initial = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TaskList" component={TaskContainer} />
      <Stack.Screen name="AddTask" component={AddTaskContainer} />
      <Stack.Screen name="UpdateTask" component={UpdateTaskContainer} />
    </Stack.Navigator>
  );
};

export default Initial;
