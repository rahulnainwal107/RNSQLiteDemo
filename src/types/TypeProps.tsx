import {RouteProp} from '@react-navigation/native';

export type AddIconProps = {
  onPress: () => void;
};

export type TaskListItemProps = {
  item: TaskProps;
  onPressUpdate: () => void;
  onPressDelete: (id: number) => void;
};

export type TaskProps = {
  id: string;
  date: Date;
  title: string;
  description: string;
};

export type AddUpdateTaskFormProps = {
  title: string;
  description: string;
  task: string;
  onButtonPress: (inputValue: TaskProps) => void;
};
