import {
 Image,
 ImageSourcePropType,
 Platform,
 StyleSheet,
 Text,
 View,
} from 'react-native';
import colors from '../config/colors';

type TProps = {
 title: string;
 subTitle: string;
 image: ImageSourcePropType;
};

export default function Card({ image, subTitle, title }: TProps) {
 return (
  <View style={styles.card}>
   <Image style={styles.image} source={image} />
   <View style={styles.detailsContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 card: {
  borderRadius: 15,
  backgroundColor: colors.white,
  marginBottom: 20,
  overflow: 'hidden',
 },
 detailsContainer: {
  padding: 20,
 },
 image: {
  width: '100%',
  height: 200,
 },
 subTitle: {
  fontSize: 18,
  color: colors.secondary,
  fontWeight: 'bold',
 },
 title: {
  fontSize: 18,
  marginBottom: 7,
 },
});
