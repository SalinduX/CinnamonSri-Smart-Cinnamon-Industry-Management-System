import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ViewPlant from './ViewPlant';

type Props = {
  onBack?: () => void;
};

export default function ViewHistory({ onBack }: Props) {
  const [showPlant, setShowPlant] = useState(false);

  if (showPlant) {
    return <ViewPlant onBack={() => setShowPlant(false)} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7} onPress={onBack}>
          <Ionicons name="chevron-back" size={22} color="#000000" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <View style={{ width: 24 }} />
      </View>

      {/* Title below header */}
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>View History</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
      >
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#777777" style={styles.searchIcon} />
          <TextInput
            placeholder="Search by maturity or date"
            placeholderTextColor="#9a9a9a"
            style={styles.searchInput}
          />
        </View>

        {/* Recent history label */}
        <Text style={styles.recentLabel}>Recent history</Text>

        {/* History cards */}
        <View style={styles.card}>
          <Image
            source={require('../assets/images/example2.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <View style={styles.statusTagGreen}>
              <Text style={styles.statusTextGreen}>Matured</Text>
            </View>
            <Text style={styles.dateText}>02 Jan 2026</Text>
          </View>
          <TouchableOpacity
            style={styles.arrowButton}
            activeOpacity={0.7}
            onPress={() => setShowPlant(true)}
          >
            <Ionicons name="arrow-forward" size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/images/over.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <View style={styles.statusTagRed}>
              <Text style={styles.statusTextRed}>Overmatured</Text>
            </View>
            <Text style={styles.dateText}>23 Dec 2025</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton} activeOpacity={0.7}>
            <Ionicons name="arrow-forward" size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/images/homescan cin.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <View style={styles.statusTagYellow}>
              <Text style={styles.statusTextYellow}>Immatured</Text>
            </View>
            <Text style={styles.dateText}>15 Dec 2025</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton} activeOpacity={0.7}>
            <Ionicons name="arrow-forward" size={20} color="#000000" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Spacer for bottom nav */}
      <View style={{ height: 60 }} />

      {/* Bottom nav for consistency */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="home-outline" size={22} color="#26a852" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="settings-outline" size={22} color="#555555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="happy-outline" size={22} color="#555555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CARD_HEIGHT = 110;
const CARD_IMAGE_WIDTH = 90;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
  },
  backButton: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  titleSection: {
    backgroundColor: '#ffffff',
    paddingBottom: 12,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 8,
    marginBottom: 14,
    height: 38,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 2,
    width: '100%',
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#000000',
  },
  recentLabel: {
    marginTop: 4,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: '600',
    color: '#ff8c1a',
    alignSelf: 'flex-start',
    width: '100%',
  },
  card: {
    height: CARD_HEIGHT,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
    elevation: 3,
    width: '100%',
  },
  cardImage: {
    width: CARD_IMAGE_WIDTH,
    height: CARD_HEIGHT - 20,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  statusTagGreen: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#e6f7ec',
    marginBottom: 4,
  },
  statusTextGreen: {
    fontSize: 13,
    fontWeight: '600',
    color: '#26a852',
  },
  statusTagRed: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#ffe6e6',
    marginBottom: 4,
  },
  statusTextRed: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e05252',
  },
  statusTagYellow: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#fff8d9',
    marginBottom: 4,
  },
  statusTextYellow: {
    fontSize: 13,
    fontWeight: '600',
    color: '#b38b00',
  },
  dateText: {
    fontSize: 12,
    color: '#666666',
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 52,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e1e1e1',
    backgroundColor: '#ffffff',
    paddingBottom: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  // Search and filter improvements
  // Additional bug fixes
});


