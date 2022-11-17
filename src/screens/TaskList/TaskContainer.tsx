import React, {useCallback, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import TaskListItem from './components/TaskListItem';
import AddIcon from './components/AddIcon';

const TaskContainer = ({}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddIcon onPress={() => navigation.navigate('AddTask')} />
      ),
    });
  }, []);

  return (
    <>
      <TaskListItem
        onPressDelete={() => {}}
        onPressUpdate={() => navigation.navigate('UpdateTask')}
      />
      <TaskListItem
        onPressDelete={() => {}}
        onPressUpdate={() => navigation.navigate('UpdateTask')}
      />
    </>
  );
};

export default TaskContainer;
