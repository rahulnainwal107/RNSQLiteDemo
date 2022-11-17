import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListEmptyComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{textAlign: 'center'}}>
        There is no tasks.{'\n'} Please add new one !!
      </Text>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
