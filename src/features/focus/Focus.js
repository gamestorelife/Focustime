import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Platform,
  Vibration,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { fontSizes, paddingSizes } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Hello World Baby ?</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1.5, marginRight: 10, height: 38 }}
          onSubmitEditing={({ nativeEvent }) => {
            setSubject(nativeEvent.text);
          }}
        />
        <Button
          title="Submit"
          onPress={() => {
            addSubject(subject);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.2,
    padding: paddingSizes.md,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? paddingSizes.xxl : paddingSizes.md,
  },
  title: {
    paddingTop: 200,
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: paddingSizes.xl,
  },
});
