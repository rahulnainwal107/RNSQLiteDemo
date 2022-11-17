export type AddIconProps = {
  onPress: () => void;
};

export type TaskListItemProps = {
  onPressUpdate: () => void;
  onPressDelete: () => void;
};

export type AddUpdateTaskFormProps = {
  task: string;
  //onButtonPress: () => void;
};
