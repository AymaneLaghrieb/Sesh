import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function FeedPage() {
  return (
    <SafeAreaView
    style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 40, color: 'white', marginBottom: 20}}>Sesh</Text>
        <FlatList data = {mockGames}
        renderItem={({item}) => <GameCardComponent gc = {item} />}></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    color: '#FFFFFF',
  },
});

function GameCardComponent({ gc }: { gc: GameCard }) {
  const spotsLeft = gc.totalSpots - gc.participantsCount;
  return (
    <View style={cardStyles.card}>
      {/* Header: sport */}
      <View style={cardStyles.cardHeader}>
        <Text style={cardStyles.sport}>{gc.sport.toUpperCase()}</Text>
        <View style={[cardStyles.spotsBadge, spotsLeft <= 2 && cardStyles.spotsBadgeUrgent]}>
          <Text style={cardStyles.spotsBadgeText}>{spotsLeft} spots left</Text>
        </View>
      </View>

      {/* Info */}
      <Text style={cardStyles.location}>{gc.location}</Text>
      <Text style={cardStyles.participants}>
        {gc.participantsCount} / {gc.totalSpots} joined
      </Text>

      {/* Footer: organizer + button */}
      <View style={cardStyles.cardFooter}>
        <View style={cardStyles.organizer}>
          <View style={cardStyles.avatar}>
            <Text style={cardStyles.avatarText}>{gc.organizer.name.charAt(0)}</Text>
          </View>
          <Text style={cardStyles.organizerName}>{gc.organizer.name}</Text>
        </View>
        <TouchableOpacity style={cardStyles.imInButton} onPress={() => alert("Joined!")}>
          <Text style={cardStyles.imInText}>I'm in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
interface GameCard {
  id: number;
  sport: string; 
  location: string; 
  date: Date; 
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


const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sport: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  spotsBadge: {
    backgroundColor: '#1E3A1E',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  spotsBadgeUrgent: {
    backgroundColor: '#3A1E1E',
  },
  spotsBadgeText: {
    color: '#00FF7F',
    fontSize: 12,
    fontWeight: '700',
  },
  location: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 4,
  },
  participants: {
    color: '#666666',
    fontSize: 13,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  organizer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00FF7F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 14,
  },
  organizerName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  imInButton: {
    backgroundColor: '#00FF7F',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imInText: {
    color: '#000000',
    fontWeight: '800',
    fontSize: 14,
  },
});