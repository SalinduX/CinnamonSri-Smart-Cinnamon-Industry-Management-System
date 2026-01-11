import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SavedPlant from './SavedPlant';
import ViewHistory from './ViewHistory';

type Props = {
  onClose?: () => void;
};

export default function Maturity({ onClose }: Props) {
  const [showTips, setShowTips] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  if (showHistory) {
    return <ViewHistory onBack={() => setShowHistory(false)} />;
  }

  

  if (showSaved) {
    return <SavedPlant onBack={() => setShowSaved(false)} onViewHistory={() => setShowHistory(true)} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Top bar with close icon */}
      <View style={styles.topBar}>
        <View style={{ width: 24 }} />
        <View />
        <TouchableOpacity 
          style={styles.closeButton}
          activeOpacity={0.7} 
          onPress={onClose}
        >
          <Ionicons name="close" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Middle section container */}
      <View style={styles.middleSection}>
        {/* Matured topic */}
        <Text style={styles.maturedTopic}>Matured</Text>

        {/* Image */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/images/example2.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Status card */}
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Matured</Text>
          <Text style={styles.statusSubtitle}>It's ready to harvest</Text>
        </View>

        {/* Add more details card */}
        <View style={styles.detailsCard}>
          <Text style={styles.detailsLabel}>Add more details</Text>
          <TextInput style={styles.detailsInput} placeholder="" placeholderTextColor="#c0c0c0" />
          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.85}
            onPress={() => setShowSaved(true)}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tips text */}
      <TouchableOpacity
        style={styles.tipsRow}
        activeOpacity={0.7}
        onPress={() => setShowTips(true)}
      >
        <Text style={styles.tipsText}>
          To follow next steps click{' '}
          <Text style={styles.tipsLink}>"Tips"</Text>
        </Text>
      </TouchableOpacity>

      {/* Spacer for bottom nav */}
      <View style={{ height: 60 }} />

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          activeOpacity={0.7}
          onPress={onClose}
        >
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

const IMAGE_SIZE = 220;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e1e1e1',
  },
  closeButton: {
    padding: 4,
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  maturedTopic: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  statusCard: {
    marginTop: 0,
    marginHorizontal: 0,
    width: '100%',
    maxWidth: 280,
    backgroundColor: '#e6f5e9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    elevation: 3,
  },
  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  statusSubtitle: {
    fontSize: 12,
    color: '#555555',
  },
  detailsCard: {
    marginTop: 12,
    marginHorizontal: 0,
    width: '100%',
    maxWidth: 280,
    backgroundColor: '#b8d9c3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    elevation: 3,
  },
  detailsLabel: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 6,
  },
  detailsInput: {
    width: '100%',
    height: 28,
    borderRadius: 8,
    backgroundColor: '#d7e6dd',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  addButton: {
    marginTop: 2,
    backgroundColor: '#26a852',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  tipsRow: {
    marginTop: 8,
    alignItems: 'center',
  },
  tipsText: {
    fontSize: 13,
    color: '#333333',
  },
  tipsLink: {
    fontWeight: '700',
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


