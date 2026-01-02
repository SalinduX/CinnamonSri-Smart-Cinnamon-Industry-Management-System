import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  onBack?: () => void;
};

export default function TipsFollow({ onBack }: Props) {
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

      {/* Scrollable content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
      >
        {/* Main topic above instructions */}
        <Text style={styles.mainTopic}>Tips to follow for next steps</Text>

        <Text style={styles.timelineLabel}>Harvest Timeline: 6 months to 2.5 years</Text>

        <Text style={styles.sectionTitle}>🪴 Next Steps</Text>
        <View style={styles.bulletGroup}>
          <Text style={styles.bulletItem}>
            • Wait 6 Months: Growth takes time; do not harvest yet.
          </Text>
          <Text style={styles.bulletItem}>
            • Monthly Checks: Scan once a month to track maturity.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>💧 Daily Care</Text>
        <View style={styles.bulletGroup}>
          <Text style={styles.bulletItem}>
            • Watering: Keep soil moist; water in the morning or evening.
          </Text>
          <Text style={styles.bulletItem}>
            • Weeding: Remove nearby weeds to save nutrients.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>⚠️ Growth Stalled?</Text>
        <Text style={styles.bodyText}>
          If still immature after 6 months, it may be:
        </Text>
        <View style={styles.bulletGroup}>
          <Text style={styles.bulletItem}>
            1. Disease: Pests or fungus slowing growth.
          </Text>
          <Text style={styles.bulletItem}>
            2. Poor Nutrition: Soil needs more fertilizer.
          </Text>
        </View>

        <Text style={styles.actionLabel}>Action:</Text>
        <View style={styles.bulletGroup}>
          <Text style={styles.bulletItem}>
            • Scan with CinnGuard to check for illness.
          </Text>
          <Text style={styles.bulletItem}>
            • Contact an Expert via the app for advice.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  mainTopic: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    width: '100%',
  },
  timelineLabel: {
    fontSize: 15,
    color: '#ff8c1a',
    fontWeight: '600',
    marginBottom: 18,
    textAlign: 'center',
    width: '100%',
  },
  sectionTitle: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#1f9254',
    textAlign: 'center',
    width: '100%',
  },
  bulletGroup: {
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  bulletItem: {
    fontSize: 15,
    color: '#222222',
    lineHeight: 22,
    marginBottom: 6,
    textAlign: 'center',
    width: '100%',
  },
  bodyText: {
    fontSize: 15,
    color: '#222222',
    marginBottom: 6,
    textAlign: 'center',
    width: '100%',
  },
  actionLabel: {
    marginTop: 12,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '700',
    color: '#ff8c1a',
    textAlign: 'center',
    width: '100%',
  },
  // Enhanced tips content and formatting
  // Final UI polish and refinements
});


