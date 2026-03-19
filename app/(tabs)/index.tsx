import { StyleSheet, Text, View } from "react-native";

export default function FeedPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}


export function Tabs() {
  return (
    <View style ={styles.container}>
      <Text>Tab [Sesh|Map|Add Sesh|Activity|Profile]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
  },
});