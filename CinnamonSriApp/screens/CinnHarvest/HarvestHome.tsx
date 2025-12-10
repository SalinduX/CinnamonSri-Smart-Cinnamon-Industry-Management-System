import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


import ViewHistory from './ViewHistory';
import Maturity from './Maturity';

export default function HomeScreen() {
  const [showScanSteps, setShowScanSteps] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showMaturity, setShowMaturity] = useState(false);

  const handleUpload = () => {
    setShowMaturity(true);
  };

  const handleScan = () => {
    setShowScanSteps(true);
  };

  const handleShowTips = () => {
    setShowTips(true);
  };

  const handleShowHistory = () => {
    setShowHistory(true);
  };

  if (showMaturity) {
    return <Maturity onClose={() => setShowMaturity(false)} />;
  }

  if (showHistory) {
    return <ViewHistory onBack={() => setShowHistory(false)} />;
  }

 
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top white status / header bar */}
      <View style={styles.headerBar}>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name="menu" size={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Black section with plant, side buttons and title overlay */}
      <View style={styles.topSection}>
        <View style={styles.sideButtonsContainer}>
          <TouchableOpacity
            style={styles.sideButton}
            activeOpacity={0.8}
            onPress={handleShowTips}
          >
            <Ionicons name="bulb-outline" size={26} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sideButton}
            activeOpacity={0.8}
            onPress={handleShowHistory}
          >
            <MaterialIcons name="menu" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.plantContainer}>
          <Image
            source={require('../assets/images/plantcin.jpg')}
            style={styles.plantImage}
            resizeMode="contain"
          />
          <Text style={styles.titleOverlay}>Harvest Your Plant</Text>
        </View>
      </View>

      {/* Middle white area with Upload / Scan cards */}
      <View style={styles.middleSection}>
        <View style={styles.cardContainer}>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.actionCard}
              activeOpacity={0.85}
              onPress={handleUpload}
            >
              <View style={styles.iconCircle}>
                <MaterialIcons name="file-upload" size={28} color="#26a852" />
              </View>
              <Text style={styles.actionText}>Upload</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionCard}
              activeOpacity={0.85}
              onPress={handleScan}
            >
              <View style={styles.iconCircle}>
                <MaterialIcons name="center-focus-strong" size={28} color="#26a852" />
              </View>
              <Text style={styles.actionText}>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Spacer for bottom nav */}
      <View style={{ height: 60 }} />

      {/* Enhanced UI improvements */}
      {/* Image assets optimization */}

      {/* Bottom navigation icons */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="home-outline" size={24} color="#26a852" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="settings-outline" size={24} color="#555555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Ionicons name="happy-outline" size={24} color="#555555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerBar: {
    height: 46,
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  topSection: {
    flex: 3.3,
    backgroundColor: '#000000',
    paddingHorizontal: 24,
  },
  sideButtonsContainer: {
    position: 'absolute',
    left: 24,
    top: 22,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sideButton: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#37B24D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    elevation: 4,
  },
  plantContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImage: {
    width: '80%',
    height: '80%',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 40,
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  middleSection: {
    flex: 1.7,
    backgroundColor: '#FFFFFF',
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  cardContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 18,
    elevation: 3,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E8F7EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#26a852',
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
});