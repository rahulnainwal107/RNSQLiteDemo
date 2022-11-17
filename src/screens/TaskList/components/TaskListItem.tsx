import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {TaskListItemProps} from '../../../types/TypeProps';

const TaskListItem: React.FC<TaskListItemProps> = ({
  item,
  onPressUpdate,
  onPressDelete,
}) => {
  const {date, title, description} = item;
  return (
    <View style={styles.mainContainer}>
      <View style={{padding: 10}}>
        <Text style={styles.taskText}>{title}</Text>
        <Text style={styles.taskDesc}>{description}</Text>
        <Text style={styles.taskDesc}>{date.toString()}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={onPressUpdate}>
          <Text style={styles.buttonTextStyle}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPressDelete}>
          <Text style={styles.buttonTextStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(TaskListItem);

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  taskText: {
    color: 'black',
    fontSize: 16,
  },
  taskDesc: {
    color: 'grey',
    fontSize: 14,
  },
  taskDate: {
    color: 'grey',
    fontSize: 12,
  },
  buttonTextStyle: {
    color: 'white',
  },
});
