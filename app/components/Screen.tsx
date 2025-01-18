import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PropsWithChildren } from 'react';

export default function Screen({ children }: PropsWithChildren) {
 return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
 screen: {
  // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  paddingTop: Constants.statusBarHeight,
 },
});
