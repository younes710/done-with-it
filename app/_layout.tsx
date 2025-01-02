import {
 DarkTheme,
 DefaultTheme,
 ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView, Text } from 'react-native';
import AppButton from './components/AppButton';
import WelcomeScreen from './screens/WelcomeScreen';
import Card from './components/Card';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 const colorScheme = useColorScheme();
 const [loaded] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
 });

 useEffect(() => {
  if (loaded) {
   SplashScreen.hideAsync();
  }
 }, [loaded]);

 if (!loaded) {
  return null;
 }

 return (
  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
   <SafeAreaView
    // style={{
    //  flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    // }}
    style={{
     flex: 1,
     backgroundColor: '#f8f4f4',
     padding: 20,
     paddingTop: 100,
    }}
   >
    {/* <AppButton title='login' onPress={() => console.log('Tapped')} /> */}
    {/* <WelcomeScreen /> */}
    <Card
     title='Jackets for sale !'
     subTitle='$100'
     image={require('../assets/images/jackets.jpg')}
    />
    <Card
     title='Couch in great condition !'
     subTitle='$900'
     image={require('../assets/images/sofa.jpg')}
    />
   </SafeAreaView>
  </ThemeProvider>
 );
}
