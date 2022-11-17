export type AddIconProps = {
  onPress: () => void;
};

export type TaskListItemProps = {
  onPressUpdate: () => void;
  onPressDelete: () => void;
};

export type TaskProps = {
  title: string;
  description: string;
};

export type AddUpdateTaskFormProps = {
  task: string;
  onButtonPress: (inputValue: TaskProps) => void;
};
