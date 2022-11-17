import React from 'react';

import AddUpdateTaskForm from '../../components/AddUpdateTaskForm';
import {TaskProps} from '../../types/TypeProps';

const UpdateTaskContainer = () => {
  const onUpdatePress = (inputValues: TaskProps) => {
    console.log('inputValues ', inputValues);
  };

  return <AddUpdateTaskForm task="update" onButtonPress={onUpdatePress} />;
};

export default UpdateTaskContainer;
