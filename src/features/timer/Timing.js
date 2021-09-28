import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Platform,
} from 'react-native';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <Button title="1" onPress={() => onChangeTime(1)} />
      </View>
      <View style={styles.timingButton}>
        <Button title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <Button title="30" onPress={() => onChangeTime(30)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
