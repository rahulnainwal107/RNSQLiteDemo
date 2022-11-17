import React, {useState, useEffect, useLayoutEffect} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import TaskListItem from './components/TaskListItem';
import AddIcon from './components/AddIcon';
import {TaskProps} from '../../types/TypeProps';
import {
  getDBConnection,
  createTable,
  getTaskItems,
} from '../../sqlite/db-service';
import ListEmptyComponent from './components/ListEmptyComponent';

const TaskContainer = ({}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddIcon onPress={() => navigation.navigate('AddTask')} />
      ),
    });
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [isFocused]);

  const loadDataCallback = async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedTodoItems = await getTaskItems(db);
      setTasks(storedTodoItems);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem: ListRenderItem<TaskProps> = ({item}) => {
    //console.log('item ', item);
    return (
      <TaskListItem
        item={item}
        onPressDelete={() => {}}
        onPressUpdate={() => navigation.navigate('UpdateTask')}
      />
    );
  };

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default TaskContainer;
