import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
 return (
  <View>
   <Image
    style={styles.image}
    source={require('../../assets/images/jackets.jpg')}
   />
   <View style={styles.detailsContainer}>
    <Text style={styles.title}>Jackets for sale !</Text>
    <Text style={styles.price}>$100</Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 detailsContainer: {
  padding: 20,
 },
 image: {
  width: '100%',
  height: 300,
 },
 price: {
  fontSize: 20,
  color: colors.secondary,
  fontWeight: 'bold',
  marginVertical: 10,
 },
 title: {
  fontSize: 24,
  fontWeight: '500',
 },
});
