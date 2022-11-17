import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AddUpdateTaskForm from '../../components/AddUpdateTaskForm';
import {TaskProps} from '../../types/TypeProps';
import {saveTaskItems, getDBConnection} from '../../sqlite/db-service';

const AddTaskContainer = () => {
  const navigation = useNavigation();

  const onAddPress = async (inputValues: TaskProps) => {
    const {title, description, date} = inputValues;
    if (!title.trim() || !description.trim()) {
      Alert.alert('Title and description can\t be empty');
    }
    try {
      const db = await getDBConnection();
      await saveTaskItems(db, {
        id: '',
        title,
        description,
        date: new Date(),
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddUpdateTaskForm
      title=""
      description=""
      task="add"
      onButtonPress={onAddPress}
    />
  );
};

export default AddTaskContainer;
