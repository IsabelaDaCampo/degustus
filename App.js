import React from 'react';
import { StatusBar, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';

import Navigation from './src/components/Navigation';
import colors  from './src/helpers/colors';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.iosUp}>
        <StatusBar backgroundColor={colors.primary} />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.screen}
        >
          <Navigation />
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={styles.iosLow}></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary
  },
  iosUp: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  iosLow: {
    flex: 0,
    backgroundColor: colors.primary
  }
});