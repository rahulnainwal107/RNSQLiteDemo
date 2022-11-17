export type AddIconProps = {
  onPress: () => void;
};

export type TaskListItemProps = {
  item: TaskProps;
  onPressUpdate: () => void;
  onPressDelete: () => void;
};

export type TaskProps = {
  id: string;
  date: Date;
  title: string;
  description: string;
};

export type AddUpdateTaskFormProps = {
  task: string;
  onButtonPress: (inputValue: TaskProps) => void;
};
