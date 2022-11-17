import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import {AddUpdateTaskFormProps, TaskProps} from '../types/TypeProps';

const AddUpdateTaskForm: React.FC<AddUpdateTaskFormProps> = ({
  title,
  description,
  task,
  onButtonPress,
}) => {
  const [taskInfo, setTaskInfo] = useState<TaskProps>({
    id: '',
    date: new Date(),
    title: title,
    description: description,
  });

  const onChangeText = (text: string, textFor: string): void => {
    if (textFor === 'title') {
      setTaskInfo({...taskInfo, title: text, date: new Date()});
    } else {
      setTaskInfo({...taskInfo, description: text, date: new Date()});
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textInputContainer}
        placeholder="Task title"
        value={taskInfo.title}
        autoCorrect={false}
        onChangeText={text => onChangeText(text, 'title')}
      />
      <TextInput
        style={styles.textInputContainer}
        placeholder="Task Description"
        multiline={true}
        numberOfLines={5}
        autoCorrect={false}
        textAlignVertical="top"
        value={taskInfo.description}
        onChangeText={text => onChangeText(text, 'desc')}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={onButtonPress.bind(this, taskInfo)}>
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
    // borderWidth: 1,
    // borderColor: 'grey',
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
