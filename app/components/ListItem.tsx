import {
 Image,
 ImageSourcePropType,
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

export default function ListItem({ image, subTitle, title }: TProps) {
 return (
  <View style={styles.container}>
   <Image style={styles.image} source={image} />
   <View style={styles.detailsContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
 },
 detailsContainer: {
  justifyContent: 'center',
 },
 image: {
  width: 70,
  height: 70,
  borderRadius: 35,
  marginInlineEnd: 10,
 },
 subTitle: {
  color: colors.medium,
 },
 title: {
  fontWeight: '500',
 },
});
