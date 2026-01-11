import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onBack?: () => void;
};

export default function ViewPlant({ onBack }: Props) {
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

      {/* Middle section container */}
      <View style={styles.middleSection}>
        {/* Matured topic */}
        <Text style={styles.maturedTopic}>Matured</Text>

        {/* Center card with image and details */}
        <View style={styles.card}>
          <Image
            source={require('../assets/images/example2.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />

          <View style={styles.details}>
            <View style={styles.row}>
              <Text style={styles.label}>Date :</Text>
              <Text style={styles.value}>02 Jan 2026</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Time :</Text>
              <Text style={styles.value}>10.30 A.M</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Details :</Text>
              <Text style={styles.value} numberOfLines={2}>
                This scanned as matured and already harvested
              </Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
          <View style={styles.iconLeft}>
            <Text style={styles.iconText}>PDF</Text>
          </View>
          <Text style={styles.primaryText}>Download PDF Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85}>
          <View style={styles.iconLeftSecondary}>
            <Text style={styles.iconTextSecondary}>CSV</Text>
          </View>
          <Text style={styles.secondaryText}>Export as CSV</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Spacer for bottom nav */}
      <View style={{ height: 60 }} />

      {/* Bottom nav */}
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

const CARD_WIDTH = 260;
const CARD_IMAGE_SIZE = 170;

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
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  maturedTopic: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    elevation: 3,
    marginBottom: 20,
  },
  cardImage: {
    width: CARD_IMAGE_SIZE,
    height: CARD_IMAGE_SIZE,
    borderRadius: 4,
    marginBottom: 12,
  },
  details: {
    alignSelf: 'stretch',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    width: 70,
    fontSize: 13,
    fontWeight: '600',
    color: '#222222',
  },
  value: {
    flex: 1,
    fontSize: 13,
    color: '#333333',
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 280,
    paddingTop: 0,
    paddingBottom: 0,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26a852',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  iconLeft: {
    position: 'absolute',
    left: 16,
    width: 30,
    height: 22,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#26a852',
  },
  primaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    paddingHorizontal: 16,
  },
  iconLeftSecondary: {
    position: 'absolute',
    left: 16,
    width: 30,
    height: 22,
    borderRadius: 4,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTextSecondary: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
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


