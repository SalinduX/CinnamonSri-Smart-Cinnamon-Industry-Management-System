import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HistoricalTrends() {
  const navigation = useNavigation<NavigationProp>();

  const recentBatches = [
    { 
      date: 'Dec 08', 
      dateFull: 'Dec 08, 2025',
      grade: 'Premium', 
      price: 2600, 
      priceDisplay: '2,600 LKR',
      badgeColor: '#FFF3E0', 
      textColor: '#E65100',
      batchId: '#2048',
      inputs: { weightBefore: 1500, weightAfter: 900, temperature: 32.0 }
    },
    { 
      date: 'Dec 16', 
      dateFull: 'Dec 16, 2025',
      grade: 'Grade A', 
      price: 2000, 
      priceDisplay: '2,000 LKR',
      badgeColor: '#E8F5E9', 
      textColor: '#27ae60',
      batchId: '#2049',
      inputs: { weightBefore: 1400, weightAfter: 1050, temperature: 30.0 }
    },
    { 
      date: 'Dec 18', 
      dateFull: 'Dec 18, 2025',
      grade: 'Grade B', 
      price: 2000, 
      priceDisplay: '2,000 LKR',
      badgeColor: '#FFF9C4', 
      textColor: '#F57C00',
      batchId: '#2050',
      inputs: { weightBefore: 1600, weightAfter: 1400, temperature: 25.0 }
    },
    { 
      date: 'Dec 25', 
      dateFull: 'Dec 25, 2025',
      grade: 'Premium', 
      price: 3200, 
      priceDisplay: '3,200 LKR',
      badgeColor: '#FFF3E0', 
      textColor: '#E65100',
      batchId: '#2051',
      inputs: { weightBefore: 1500, weightAfter: 900, temperature: 33.0 }
    },
  ];

  // Chart data for 7 days of the week showing price volatility
  // Based on the image: M, T, W, T, F, S, S with varying heights
  const chartData = [
    { day: 'M', value: 70, isHighest: false }, // Monday - medium-high yellow
    { day: 'T', value: 45, isHighest: false }, // Tuesday - medium-low yellow
    { day: 'W', value: 85, isHighest: false }, // Wednesday - high yellow
    { day: 'T', value: 30, isHighest: false }, // Thursday - low yellow
    { day: 'F', value: 80, isHighest: false }, // Friday - high yellow
    { day: 'S', value: 100, isHighest: true }, // Saturday - tallest, green (highest)
    { day: 'S', value: 65, isHighest: false }, // Sunday - medium-high yellow
  ];

  // Calculate average price for the week
  const averagePrice = 2400;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Historical Trends</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Historical Trends Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Historical Trends</Text>
          <TouchableOpacity style={styles.monthButton}>
            <View style={styles.monthButtonIndicator} />
            <Text style={styles.monthButtonText}>This Month</Text>
          </TouchableOpacity>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryCards}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Highest Price</Text>
            <Text style={styles.summaryValue}>2,850 LKR</Text>
            <Text style={styles.summarySubtitle}>Best Dec 29</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Avg. Grade</Text>
            <Text style={styles.summaryValue}>Premium</Text>
            <Text style={styles.summarySubtitle}>Most Common</Text>
          </View>
        </View>

        {/* Price Volatility Section */}
        <View style={styles.volatilitySection}>
          <View style={styles.volatilityHeader}>
            <Text style={styles.volatilityTitle}>Price Volatility</Text>
            <TouchableOpacity style={styles.daysButton}>
              <Text style={styles.daysButtonText}>7 Days</Text>
            </TouchableOpacity>
          </View>

          {/* Bar Chart */}
          <View style={styles.chartContainer}>
            <View style={styles.chartBars}>
              {chartData.map((item, index) => {
                const maxBarHeight = 100; // Maximum height in pixels
                const barHeight = (item.value / 100) * maxBarHeight;
                const minBarHeight = 10; // Minimum visible bar height
                const finalBarHeight = Math.max(barHeight, minBarHeight);
                
                return (
                  <View key={index} style={styles.chartBarWrapper}>
                    <View
                      style={[
                        styles.chartBar,
                        {
                          height: finalBarHeight,
                          backgroundColor: item.isHighest ? '#27ae60' : '#FFC107', // Green for highest, yellow for others
                        },
                      ]}
                    />
                    <Text style={styles.chartDayLabel}>{item.day}</Text>
                  </View>
                );
              })}
            </View>
            {/* Average price text below chart */}
            <Text style={styles.averagePriceText}>
              Avg. {averagePrice.toLocaleString()} LKR/kg this week
            </Text>
          </View>
        </View>

        {/* Recent Batches Section */}
        <View style={styles.recentBatchesSection}>
          <Text style={styles.recentBatchesTitle}>Recent Batches</Text>
          {recentBatches.map((batch, index) => (
            <TouchableOpacity
              key={index}
              style={styles.batchCard}
              onPress={() => navigation.navigate('Report', { 
                batchData: {
                  ...batch,
                  date: batch.dateFull || batch.date
                }
              })}
              activeOpacity={0.7}
            >
              <Text style={styles.batchDate}>{batch.date}</Text>
              <View style={styles.batchInfo}>
                <View style={[styles.batchBadge, { backgroundColor: batch.badgeColor }]}>
                  <Text style={[styles.batchBadgeText, { color: batch.textColor }]}>
                    {batch.grade}
                  </Text>
                </View>
                <Text style={styles.batchPrice}>- {batch.priceDisplay}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#999999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="#999999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999999" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontWeight: '700',
    color: '#000000',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  monthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  monthButtonIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#27ae60',
  },
  monthButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#27ae60',
  },
  summaryCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  summaryLabel: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  summarySubtitle: {
    fontSize: 12,
    color: '#999999',
  },
  volatilitySection: {
    marginBottom: 24,
  },
  volatilityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  volatilityTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  daysButton: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  daysButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FF9800',
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  chartBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    paddingBottom: 28,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  chartBarWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    height: '100%',
  },
  chartBar: {
    width: 36,
    borderRadius: 4,
    marginBottom: 8,
    minHeight: 10,
    alignSelf: 'center',
  },
  chartDayLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
  },
  averagePriceText: {
    fontSize: 13,
    color: '#666666',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '500',
  },
  recentBatchesSection: {
    marginBottom: 24,
  },
  recentBatchesTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  batchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  batchDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  batchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  batchBadge: {
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  batchBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  batchPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    padding: 8,
  },
});

