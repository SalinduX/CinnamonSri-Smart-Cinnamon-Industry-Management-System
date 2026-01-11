import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../App';

export default function NewAnalysis() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [weightBefore, setWeightBefore] = useState<string>('1,500');
  const [weightAfter, setWeightAfter] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');

  const formatNumber = (value: string): string => {
    // Remove commas and non-numeric characters
    const numValue = value.replace(/[^0-9]/g, '');
    if (numValue === '') return '';
    // Add commas for thousands
    return parseInt(numValue, 10).toLocaleString();
  };

  const parseNumber = (value: string): number => {
    const numValue = value.replace(/[^0-9]/g, '');
    return numValue === '' ? 0 : parseInt(numValue, 10);
  };

  const increment = (currentValue: string, setValue: (value: string) => void) => {
    const num = parseNumber(currentValue);
    setValue(formatNumber((num + 1).toString()));
  };

  const decrement = (currentValue: string, setValue: (value: string) => void) => {
    const num = parseNumber(currentValue);
    if (num > 0) {
      setValue(formatNumber((num - 1).toString()));
    }
  };

  const handleWeightBeforeChange = (text: string) => {
    setWeightBefore(formatNumber(text));
  };

  const handleWeightAfterChange = (text: string) => {
    setWeightAfter(formatNumber(text));
  };

  const handleTemperatureChange = (text: string) => {
    setTemperature(formatNumber(text));
  };

  // Calculate weight loss percentage
  const calculateWeightLoss = (before: number, after: number): number => {
    if (before === 0) return 0;
    return ((before - after) / before) * 100;
  };

  // Determine quality grade based on temperature and weight loss %
  const determineQualityGrade = (temp: number, weightLoss: number): string => {
    // Premium: Temperature 30.0°C to 35.0°C AND Weight Loss % 18.0% to 22.0%
    if (temp >= 30.0 && temp <= 35.0 && weightLoss >= 18.0 && weightLoss <= 22.0) {
      return 'Premium';
    }
    
    // Grade A: Temperature 27.0°C to 38.0°C AND Weight Loss % 14.0% to 26.0%
    if (temp >= 27.0 && temp <= 38.0 && weightLoss >= 14.0 && weightLoss <= 26.0) {
      return 'Grade A';
    }
    
    // Grade B: Temperature <27.0°C or >38.0°C OR Weight Loss % <14.0% or >26.0%
    return 'Grade B';
  };

  // Calculate price based on grade and weight loss %
  const calculatePrice = (grade: string, weightLoss: number): number => {
    let basePrice = 0;
    
    switch (grade) {
      case 'Premium':
        basePrice = 5000;
        // Price peaks at 20% weight loss (ideal)
        // Calculate price variation: closer to 20% = higher price
        const idealWeightLoss = 20.0;
        const deviation = Math.abs(weightLoss - idealWeightLoss);
        // Maximum deviation is 4% (18% to 22%), so price adjustment is based on deviation
        const maxDeviation = 4.0;
        const priceAdjustment = (1 - (deviation / maxDeviation)) * 500; // Up to 500 LKR adjustment
        return Math.round(basePrice + priceAdjustment);
        
      case 'Grade A':
        basePrice = 3600;
        // Grade A has some variation based on weight loss
        // Ideal is around 20%, but range is 14-26%
        const idealGradeA = 20.0;
        const deviationGradeA = Math.abs(weightLoss - idealGradeA);
        const maxDeviationGradeA = 6.0; // Max deviation from ideal
        const priceAdjustmentGradeA = (1 - (deviationGradeA / maxDeviationGradeA)) * 300;
        return Math.round(basePrice + priceAdjustmentGradeA);
        
      case 'Grade B':
        basePrice = 2100;
        return basePrice;
        
      default:
        return basePrice;
    }
  };

  const handlePredict = () => {
    const weightBeforeNum = parseNumber(weightBefore);
    const weightAfterNum = parseNumber(weightAfter);
    const temperatureNum = parseNumber(temperature);

    // Validate inputs
    if (weightBeforeNum === 0 || weightAfterNum === 0 || temperatureNum === 0) {
      // You might want to show an alert here
      console.log('Please fill in all fields');
      return;
    }

    if (weightAfterNum >= weightBeforeNum) {
      // You might want to show an alert here
      console.log('Weight after drying must be less than weight before drying');
      return;
    }

    // Calculate weight loss percentage
    const weightLoss = calculateWeightLoss(weightBeforeNum, weightAfterNum);

    // Determine quality grade
    const qualityGrade = determineQualityGrade(temperatureNum, weightLoss);

    // Calculate price
    const price = calculatePrice(qualityGrade, weightLoss);

    // Generate batch ID (simple incrementing ID)
    const batchId = `#${Math.floor(Math.random() * 9000) + 1000}`;

    navigation.navigate('PricePrediction', {
      result: {
        quality: qualityGrade,
        price: price,
        weightLoss: weightLoss,
        batchId: batchId,
        inputs: {
          weightBefore: weightBeforeNum,
          weightAfter: weightAfterNum,
          temperature: temperatureNum,
        },
      },
    });
  };

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
        <Text style={styles.headerTitle}>New Analysis</Text>
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
        {/* Weight Before Drying Card */}
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Weight Before Drying</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => decrement(weightBefore, setWeightBefore)}
            >
              <MaterialIcons name="remove" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={[styles.inputField, styles.inputFieldFilled]}>
              <TextInput
                style={styles.inputText}
                value={weightBefore}
                onChangeText={handleWeightBeforeChange}
                keyboardType="numeric"
                placeholder="0"
              />
              {weightBefore !== '' && <Text style={styles.inputUnit}>(g)</Text>}
            </View>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => increment(weightBefore, setWeightBefore)}
            >
              <MaterialIcons name="add" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Weight After Drying Card */}
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Weight After Drying</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => decrement(weightAfter, setWeightAfter)}
            >
              <MaterialIcons name="remove" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={[styles.inputField, styles.inputFieldEmpty]}>
              <TextInput
                style={styles.inputText}
                value={weightAfter}
                onChangeText={handleWeightAfterChange}
                keyboardType="numeric"
                placeholder=""
              />
              {weightAfter === '' ? (
                <View style={styles.placeholderOverlay} pointerEvents="none">
                  <Text style={styles.inputPlaceholder}>(g)</Text>
                </View>
              ) : (
                <Text style={styles.inputUnit}>(g)</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => increment(weightAfter, setWeightAfter)}
            >
              <MaterialIcons name="add" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Temperature Card */}
        <View style={styles.inputCard}>
          <Text style={styles.inputLabel}>Temperature</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => decrement(temperature, setTemperature)}
            >
              <MaterialIcons name="remove" size={20} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={[styles.inputField, styles.inputFieldEmpty]}>
              <TextInput
                style={styles.inputText}
                value={temperature}
                onChangeText={handleTemperatureChange}
                keyboardType="numeric"
                placeholder=""
              />
              {temperature === '' && (
                <View style={styles.placeholderOverlay} pointerEvents="none">
                  <Text style={styles.inputPlaceholder}>()</Text>
                </View>
              )}
            </View>

            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => increment(temperature, setTemperature)}
            >
              <MaterialIcons name="add" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Predict Button */}
        <TouchableOpacity style={styles.predictButton} onPress={handlePredict}>
          <Text style={styles.predictButtonText}>Predict Quality & Price</Text>
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
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlButton: {
    width: 40,
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    minHeight: 52,
    position: 'relative',
  },
  inputFieldFilled: {
    borderWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor: '#FFFFFF',
  },
  inputFieldEmpty: {
    backgroundColor: '#E8F5E9',
    borderWidth: 0,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    padding: 0,
    flex: 1,
  },
  inputUnit: {
    fontSize: 14,
    color: '#999999',
    marginLeft: 6,
  },
  placeholderOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  inputPlaceholder: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  predictButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
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
  predictButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
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

