import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {AddUpdateTaskFormProps} from '../types/TypeProps';

const AddUpdateTaskForm: React.FC<AddUpdateTaskFormProps> = ({task}) => {
  return (
    <View>
      <TextInput style={styles.textInputContainer} placeholder="Task title" />
      <TextInput
        style={styles.textInputContainer}
        placeholder="Task Description"
        multiline={true}
        numberOfLines={5}
        textAlignVertical="top"
      />
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>
          {task === 'update' ? 'Update' : 'Add'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUpdateTaskForm;

const styles = StyleSheet.create({
  textInputContainer: {
    minHeight: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    minHeight: 50,
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    size: 18,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
