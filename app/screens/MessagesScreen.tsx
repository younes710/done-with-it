import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages = [
 {
  id: 1,
  title: 'T1',
  description: 'D1',
  image: require('../../assets/images/me.jpg'),
 },
 {
  id: 2,
  title: 'T2',
  description: 'D2',
  image: require('../../assets/images/me.jpg'),
 },
];

export default function MessagesScreen() {
 return (
  <Screen>
   <FlatList
    data={messages}
    keyExtractor={(message) => message.id.toString()}
    renderItem={({ item }) => (
     <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
     />
    )}
   />
  </Screen>
 );
}

const styles = StyleSheet.create({});
