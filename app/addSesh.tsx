import { StyleSheet, Text, View } from 'react-native';

export default function Tabs() {
  return (
    <View style ={styles.container}>
      <Text> Add Sesh page </Text>
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
