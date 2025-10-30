import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';

type ScanItem = {
  id: string;
  imageUri: string;
  disease: string;
  date: string;
  status: 'Healthy' | 'Medium' | 'Severe';
};

export default function ScanHistoryScreen() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<'All' | 'Healthy'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [scans, setScans] = useState<ScanItem[]>([
    {
      id: '1',
      imageUri: 'https://i.imgur.com/Y0z7K9Z.jpg',
      disease: 'Leaf Spot Disease',
      date: '12 Dec 2025',
      status: 'Medium',
    },
    {
      id: '2',
      imageUri: 'https://i.imgur.com/t6pYJ6M.jpg',
      disease: 'Leaf Spot Disease',
      date: '12 Dec 2025',
      status: 'Severe',
    },
    {
      id: '3',
      imageUri: 'https://i.imgur.com/6n6N4dM.jpg',
      disease: 'Healthy Plant',
      date: '10 Dec 2025',
      status: 'Healthy',
    },
  ]);

  const filteredScans = scans.filter(item => {
    const matchesTab =
      activeTab === 'All' || item.status === 'Healthy';

    const query = searchQuery.toLowerCase();

    const matchesSearch =
      item.disease.toLowerCase().includes(query) ||
      item.date.toLowerCase().includes(query) ||
      item.status.toLowerCase().includes(query);

    return matchesTab && matchesSearch;
  });

  const deleteScan = (id: string) => {
    setScans(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scan History</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={22} />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'All' && styles.activeTab]}
          onPress={() => setActiveTab('All')}
        >
          <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Healthy' && styles.activeTab]}
          onPress={() => setActiveTab('Healthy')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Healthy' && styles.activeTabText,
            ]}
          >
            Healthy
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.search}>
        <Ionicons name="search" size={18} color="#555" />
        <TextInput
          placeholder="Search by disease or date"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* History List */}
      <FlatList
        data={filteredScans}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No scans found</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />

            <View style={styles.cardText}>
              <Text style={styles.disease}>{item.disease}</Text>
              <Text style={styles.date}>{item.date}</Text>

              <View
                style={[
                  styles.badge,
                  item.status === 'Healthy'
                    ? styles.healthy
                    : item.status === 'Medium'
                    ? styles.medium
                    : styles.severe,
                ]}
              >
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: '/detection',
                    params: { imageUri: item.imageUri },
                  })
                }
              >
                <Ionicons name="arrow-forward-circle" size={22} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteScan(item.id)}>
                <Ionicons name="trash" size={20} color="#d63031" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f4',
    paddingHorizontal: 16,
  },

  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  tabs: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: '#e3f4ea',
    borderRadius: 20,
    padding: 4,
  },

  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#2ecc71',
  },

  tabText: {
    fontSize: 13,
    color: '#2ecc71',
  },

  activeTabText: {
    color: '#fff',
  },

  search: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },

  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 13,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    marginTop: 12,
    alignItems: 'center',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },

  cardText: {
    flex: 1,
    marginLeft: 10,
  },

  disease: {
    fontSize: 14,
    fontWeight: '600',
  },

  date: {
    fontSize: 11,
    color: '#666',
  },

  badge: {
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  healthy: { backgroundColor: '#dff5e6' },
  medium: { backgroundColor: '#fff3cd' },
  severe: { backgroundColor: '#f8d7da' },

  badgeText: {
    fontSize: 11,
    fontWeight: '500',
  },

  actions: {
    justifyContent: 'space-between',
    height: 50,
  },

  emptyText: {
    marginTop: 40,
    textAlign: 'center',
    color: '#777',
    fontSize: 13,
  },
});
