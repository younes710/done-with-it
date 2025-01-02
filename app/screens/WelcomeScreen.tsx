import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function WelcomeScreen() {
 return (
  <ImageBackground
   blurRadius={10}
   style={styles.background}
   source={require('../../assets/images/home-image.jpg')}
  >
   <View style={styles.logoContainer}>
    <Image source={require('../../assets/images/react-logo.png')} />
    <Text style={styles.tagline}>Sell What You Don't Need</Text>
   </View>
   <View style={styles.buttonsContainer}>
    <AppButton title='login' onPress={() => console.log('login tapped')} />
    <AppButton
     title='register'
     onPress={() => console.log('register tapped')}
     color={'secondary'}
    />
   </View>
  </ImageBackground>
 );
}

const styles = StyleSheet.create({
 background: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
 },
 buttonsContainer: {
  padding: 20,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
 },
 logoContainer: {
  position: 'absolute',
  top: 70,
  alignItems: 'center',
 },
 tagline: {
  color: colors.white,
  fontSize: 25,
  fontWeight: '600',
  paddingVertical: 20,
 },
});
