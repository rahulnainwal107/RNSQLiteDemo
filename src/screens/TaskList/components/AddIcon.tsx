import React, {memo} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import {AddIconProps} from '../../../types/TypeProps';

const AddIcon: React.FC<AddIconProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image
        source={require('../../../assets/add.png')}
        style={{height: '100%', width: '100%'}}
      />
    </TouchableOpacity>
  );
};

export default memo(AddIcon);

const styles = StyleSheet.create({
  iconContainer: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
