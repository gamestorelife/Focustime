import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Platform,
  Button,
} from 'react-native';
import { fontSizes, paddingSizes } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
    </View>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <SafeAreaView style={styles.container}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>Thing we have focused on</Text>

          <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistoryItem}
          />

          <Button
            title="Clear"
            onPress={() => {
              onClear();
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    marginVertical: 200,
  },

  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.lg,
  }),

  title: {
    color: 'white',
    fontSize: fontSizes.md,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    /*
    marginVertical: 8,
    marginHorizontal: 16,
    */
  },
});
