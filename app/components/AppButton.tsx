import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

type TProps = {
 title: string;
 onPress: () => void;
 color?: keyof typeof colors;
};

export default function AppButton({
 title,
 onPress,
 color = 'primary',
}: TProps) {
 return (
  <TouchableOpacity
   style={[styles.button, { backgroundColor: colors[color] }]}
   onPress={onPress}
  >
   <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
 button: {
  backgroundColor: colors.primary,
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 15,
  width: '100%',
 },
 text: {
  color: colors.white,
  fontSize: 18,
  textTransform: 'uppercase',
  fontWeight: 'bold',
 },
});
