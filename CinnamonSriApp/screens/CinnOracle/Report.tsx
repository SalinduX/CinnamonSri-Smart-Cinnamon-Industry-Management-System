import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Report'>;
type ReportRouteProp = RouteProp<RootStackParamList, 'Report'>;

export default function Report() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<ReportRouteProp>();
  const { batchData } = route.params ?? { batchData: null };

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

  // Check for both 'quality' and 'grade' properties for compatibility
  const qualityGrade = batchData?.quality || batchData?.grade || null;
  const badgeStyle = qualityGrade 
    ? getBadgeStyle(qualityGrade) 
    : { backgroundColor: '#999999', text: 'UNKNOWN' };

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '—';
    // If dateString is already formatted, return it
    if (dateString.includes(',')) return dateString;
    // Otherwise format it
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };

  const handleDownloadPDF = () => {
    // TODO: Implement PDF download functionality
    console.log('Download PDF Report', batchData);
    // You can use libraries like react-native-pdf or expo-print for PDF generation
  };

  const handleExportCSV = () => {
    // TODO: Implement CSV export functionality
    console.log('Export as CSV', batchData);
    // You can use libraries like react-native-fs or expo-file-system for CSV export
  };

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
        <Text style={styles.headerTitle}>
          Batch {batchData?.batchId ?? '#2048'} Report
        </Text>
        <TouchableOpacity
          style={styles.headerIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="close" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Report Card */}
        <View style={styles.reportCard}>
          {/* Grade Badge */}
          <View style={[styles.gradeBadge, { backgroundColor: badgeStyle.backgroundColor }]}>
            <Text style={styles.gradeBadgeText}>{badgeStyle.text}</Text>
          </View>

          {/* Estimated Price */}
          <View style={styles.priceSection}>
            <Text style={styles.priceValue}>
              {batchData?.price 
                ? `${batchData.price.toLocaleString()} LKR` 
                : '—'}
            </Text>
            <Text style={styles.priceLabel}>Estimated Price per kg</Text>
          </View>

          {/* Detailed Metrics */}
          <View style={styles.metricsSection}>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Date Processed</Text>
              <Text style={styles.metricValue}>
                {formatDate(batchData?.date ?? 'Dec 08, 2025')}
              </Text>
            </View>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Weight Before Drying</Text>
              <Text style={styles.metricValue}>
                {batchData?.inputs?.weightBefore 
                  ? `${Math.round(batchData.inputs.weightBefore / 1000).toLocaleString()} kg` 
                  : '1,500 kg'}
              </Text>
            </View>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Weight After Drying</Text>
              <Text style={styles.metricValue}>
                {batchData?.inputs?.weightAfter 
                  ? `${Math.round(batchData.inputs.weightAfter / 1000).toLocaleString()} kg` 
                  : '900 kg'}
              </Text>
            </View>
            <View style={styles.metricRow}>
              <Text style={styles.metricLabel}>Temperature</Text>
              <Text style={styles.metricValue}>
                {batchData?.inputs?.temperature 
                  ? `${batchData.inputs.temperature.toFixed(1)}°C` 
                  : '32.0°C'}
              </Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity
          style={styles.downloadPDFButton}
          onPress={handleDownloadPDF}
          activeOpacity={0.85}
        >
          <MaterialIcons name="picture-as-pdf" size={24} color="#FFFFFF" />
          <Text style={styles.downloadPDFButtonText}>Download PDF Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.exportCSVButton}
          onPress={handleExportCSV}
          activeOpacity={0.85}
        >
          <MaterialIcons name="description" size={24} color="#000000" />
          <Text style={styles.exportCSVButtonText}>Export as CSV</Text>
        </TouchableOpacity>
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
    backgroundColor: '#F5F5F5',
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
    flex: 1,
    textAlign: 'center',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 20,
  },
  reportCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gradeBadge: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  gradeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  priceSection: {
    marginBottom: 24,
  },
  priceValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  priceLabel: {
    fontSize: 14,
    color: '#999999',
  },
  metricsSection: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 20,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  metricLabel: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  metricValue: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  downloadPDFButton: {
    backgroundColor: '#27ae60',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    gap: 12,
  },
  downloadPDFButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  exportCSVButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 12,
  },
  exportCSVButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
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

