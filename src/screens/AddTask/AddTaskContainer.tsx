import React from 'react';

import AddUpdateTaskForm from '../../components/AddUpdateTaskForm';
import {TaskProps} from '../../types/TypeProps';

const AddTaskContainer = () => {
  const onAddPress = (inputValues: TaskProps) => {
    console.log('inputValues ', inputValues);
  };

  return <AddUpdateTaskForm task="add" onButtonPress={onAddPress} />;
};

export default AddTaskContainer;
