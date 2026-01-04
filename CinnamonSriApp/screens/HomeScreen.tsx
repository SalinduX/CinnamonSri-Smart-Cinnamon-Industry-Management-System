// src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Cinnamon Research Center</Text>
          <Text style={styles.subtitle}>Sri Lanka</Text>
        </View>

        {/* Info Cards */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cinnamon Varieties</Text>
          <Text style={styles.cardText}>• Ceylon Cinnamon (True Cinnamon)</Text>
          <Text style={styles.cardText}>• Cassia Cinnamon</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quality Standards</Text>
          <Text style={styles.cardText}>• Essential oil: 1.5% – 3.5%</Text>
          <Text style={styles.cardText}>• Thin bark, sweet aroma, mild flavor</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Drying Recommendations</Text>
          <Text style={styles.cardText}>• Temperature: 30°C – 40°C</Text>
          <Text style={styles.cardText}>• Humidity: 50% – 60%</Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>📷</Text>
            </View>
            <Text style={styles.actionLabel}>Capture Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>📊</Text>
            </View>
            <Text style={styles.actionLabel}>Log Data</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>📈</Text>
            </View>
            <Text style={styles.actionLabel}>View Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Text style={styles.icon}>⚙️</Text>
            </View>
            <Text style={styles.actionLabel}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0', // Light cinnamon-inspired background
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513', // Cinnamon brown
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ffe0b2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B4513',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: '#333333',
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5d2e0f',
    marginVertical: 20,
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    flex: 0.47,
    padding: 20,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffd180',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffecb3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5d2e0f',
    textAlign: 'center',
  },
});

export default HomeScreen;