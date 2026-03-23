import { StyleSheet, Text, View } from 'react-native';

export default function MapTabs() {
  return (
    <View style ={styles.container}>
      <Text>Map page</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
