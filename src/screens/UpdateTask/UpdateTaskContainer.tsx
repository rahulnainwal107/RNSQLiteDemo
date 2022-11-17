import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AddUpdateTaskForm from '../../components/AddUpdateTaskForm';
import {TaskProps} from '../../types/TypeProps';
import {updateTaskItems, getDBConnection} from '../../sqlite/db-service';

const UpdateTaskContainer = ({route}) => {
  const {
    item: {description, title, id},
  } = route.params;
  const navigation = useNavigation();

  const onUpdatePress = async (inputValues: TaskProps) => {
    const {title, description, date} = inputValues;
    if (!title.trim() || !description.trim()) {
      Alert.alert('Title and description can\t be empty');
    }
    try {
      const db = await getDBConnection();
      await updateTaskItems(db, {
        id,
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
      title={title}
      description={description}
      task="update"
      onButtonPress={onUpdatePress}
    />
  );
};

export default UpdateTaskContainer;
