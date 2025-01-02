import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ViewImageScreen() {
 return (
  <View style={styles.container}>
   <View style={styles.closeIcon}>
    <MaterialIcons name='close' color={colors.black} size={30} />
   </View>
   <View style={styles.deleteIcon}>
    <MaterialIcons name='delete' color={colors.black} size={30} />
   </View>
   <Image
    resizeMode='contain'
    style={styles.image}
    source={require('../../assets/images/test.jpg')}
   />
  </View>
 );
}

const styles = StyleSheet.create({
 closeIcon: {
  position: 'absolute',
  top: 40,
  left: 30,
 },
 container: {
  backgroundColor: colors.black,
  flex: 1,
 },
 deleteIcon: {
  position: 'absolute',
  top: 40,
  right: 30,
 },
 image: {
  width: '100%',
  height: 900,
 },
});
