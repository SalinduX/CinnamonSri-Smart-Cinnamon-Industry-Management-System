import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PricePrediction'>;
type PricePredictionRouteProp = RouteProp<RootStackParamList, 'PricePrediction'>;

export default function PricePrediction() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<PricePredictionRouteProp>();
  const { result } = route.params ?? { result: null };

  const handleSave = () => {
    // Navigate to SavedSuccess screen
    navigation.navigate('SavedSuccess');
  };

  // Get badge style based on quality grade
  const getBadgeStyle = (quality: string) => {
    switch (quality) {
      case 'Premium':
        return { backgroundColor: '#FF9800', text: 'PREMIUM GRADE' };
      case 'Grade A':
        return { backgroundColor: '#27ae60', text: 'GRADE A' };
      case 'Grade B':
        return { backgroundColor: '#F57C00', text: 'GRADE B' };
      default:
        return { backgroundColor: '#999999', text: 'UNKNOWN' };
    }
  };

  const badgeStyle = result?.quality 
    ? getBadgeStyle(result.quality) 
    : { backgroundColor: '#999999', text: '—' };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Prediction</Text>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="close" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Prediction Card */}
        <View style={styles.predictionCard}>
          {/* Icon Circle */}
          <View style={styles.iconCircle}>
            <MaterialIcons name="assignment" size={40} color="#2E7D32" />
          </View>

          {/* Quality Badge */}
          <View style={[styles.qualityBadge, { backgroundColor: badgeStyle.backgroundColor }]}>
            <Text style={styles.qualityBadgeText}>{badgeStyle.text}</Text>
          </View>

          {/* Price Section */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceValue}>
              {result?.price != null ? `${result.price.toLocaleString()} LKR` : '—'}
            </Text>
            <Text style={styles.priceLabel}>Estimated Price per kg</Text>
          </View>
        </View>

        {/* Data Cards Grid */}
        <View style={styles.dataGrid}>
          {/* Weight Before Drying Card */}
          <View style={styles.dataCard}>
            <Text style={styles.dataLabel}>Weight Before Drying</Text>
            <View style={styles.dataValueContainer}>
              <Text style={styles.dataValue}>
                {result?.inputs?.weightBefore 
                  ? `${result.inputs.weightBefore.toLocaleString()} g` 
                  : '—'}
              </Text>
            </View>
          </View>

          {/* Weight After Drying Card */}
          <View style={styles.dataCard}>
            <Text style={styles.dataLabel}>Weight After Drying</Text>
            <View style={styles.dataValueContainer}>
              <Text style={styles.dataValue}>
                {result?.inputs?.weightAfter 
                  ? `${result.inputs.weightAfter.toLocaleString()} g` 
                  : '—'}
              </Text>
            </View>
          </View>

          {/* Temperature Card */}
          <View style={styles.dataCard}>
            <Text style={styles.dataLabel}>Temperature</Text>
            <View style={styles.dataValueContainer}>
              <Text style={styles.dataValue}>
                {result?.inputs?.temperature 
                  ? `${result.inputs.temperature.toFixed(1)}°C` 
                  : '—'}
              </Text>
            </View>
          </View>

          {/* Batch ID Card */}
          <View style={styles.dataCard}>
            <Text style={styles.dataLabel}>Batch ID</Text>
            <View style={styles.dataValueContainer}>
              <Text style={styles.dataValue}>
                {result?.batchId ?? '#2048'}
              </Text>
            </View>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <MaterialIcons name="save" size={20} color="#FFFFFF" />
          <Text style={styles.saveButtonText}>Save to History</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="settings" size={24} color="#000000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="person" size={24} color="#000000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  headerIcon: {
    padding: 4,
    width: 32,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 20,
  },
  predictionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  qualityBadge: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    minWidth: 140,
    minHeight: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qualityBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  priceContainer: {
    alignItems: 'center',
    width: '100%',
  },
  priceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  priceLabel: {
    fontSize: 14,
    color: '#999999',
    marginTop: 4,
  },
  dataGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dataCard: {
    width: '48%',
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dataLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 8,
    fontWeight: '500',
  },
  dataValueContainer: {
    minHeight: 24,
  },
  dataValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    padding: 8,
  },
});

