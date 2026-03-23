import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FeedPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <FlatList data = {mockGames}
        renderItem={({item}) => <GameCardComponent gc = {item} />}></FlatList>
      // {/* <GameCardComponent gc={gc1} /> */}
    </View>
  );
}


export function Tabs() {
  return (
    <View style ={styles.container}>
      <Text></Text>
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

function GameCardComponent({ gc }: { gc: GameCard }) {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{gc.sport}</Text>
      <Text>{gc.location}</Text>
      <Text>{gc.participantsCount} / {gc.totalSpots} joueurs</Text>
      <Text>Organisé par {gc.organizer.name}</Text>
      <TouchableOpacity onPress={() => alert("Joined!")}>
        <Text>I'm in!</Text>
      </TouchableOpacity>
    </View>
  );
}

interface GameCard {
  id: number;
  sport: string; 
  location: string; 
  dateTime: string; 
  totalSpots: number; 
  participantsCount: number; 
  organizer: User;
}

interface User {
  id: number; 
  name: string; 
  email: string;  
  matchesPlayed: number; 
  mvpAwards: number;
}

const date1 = new Date("2023-12-25T10:00:00");
const user1: User = {id: 1, name: "Alex", email: "abcd@gmail.com", matchesPlayed: 20, mvpAwards: 1, };
const gc1: GameCard = {id: 1, sport: "Football", location: "Central Park", date: date1, totalSpots: 26, participantsCount: 15, organizer: user1, };


const date2 = new Date("2023-12-26T18:30:00");
const user2: User = { id: 2, name: "Sofia", email: "sofia@gmail.com", matchesPlayed: 45, mvpAwards: 8 };
const gc2: GameCard = { id: 2, sport: "Basketball", location: "Parc Jarry", date: date2, totalSpots: 10, participantsCount: 8, organizer: user2 };

const date3 = new Date("2023-12-27T16:00:00");
const user3: User = { id: 3, name: "Marcus", email: "marcus@gmail.com", matchesPlayed: 12, mvpAwards: 2 };
const gc3: GameCard = { id: 3, sport: "Volleyball", location: "Parc Lafontaine", date: date3, totalSpots: 12, participantsCount: 6, organizer: user3 };

let mockGames : GameCard[] = [gc1, gc2, gc3];


