import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
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
import { fontSizes, paddingSizes } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButtton } from '../../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const DURATION = 1000;
  const DEFULT_TIME = 0.1;
  const [minutes, setMinutes] = useState(DEFULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(DURATION);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={{ paddingTop: paddingSizes.xl }}>
        <Text style={styles.title}>Timers Focusing On :</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={{ padding: paddingSizes.sm }}>
        <ProgressBar
          progress={progress}
          color="#6699ff"
          style={{ height: 30 }}
        />
      </View>

      <View style={styles.minibuttonrap}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonrap}>
        {isStarted ? (
          <Button title="Pause" onPress={() => setIsStarted(false)} />
        ) : (
          <Button title="Start" onPress={() => setIsStarted(true)} />
        )}
      </View>

      <View style={styles.clearSubject}>
        <Button title="Cancel" onPress={() => clearSubject()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? paddingSizes.xxl : paddingSizes.md,
  },
  title: {
    color: '#ffff',
    textAlign: 'center',
  },
  task: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonrap: {
    fontWeight: 'bold',
  },
  minibuttonrap: {
    fontWeight: 'bold',
    flexDirection: 'row',
    padding: paddingSizes.md,
  },
  clearSubject: {
    paddingRight: 250,
  },
});
