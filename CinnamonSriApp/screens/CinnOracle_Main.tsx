import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CinnOracle_Main = () => {
  const navigation = useNavigation<any>();
  
  // State for manual inputs
  const [temp, setTemp] = useState(32.0);
  const [wb, setWb] = useState(1200);
  const [wa, setWa] = useState(950);

  const handlePredict = () => {
    // Navigate to results page (you will create this next)
    navigation.navigate('Results', { temp, wb, wa });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CinnOracleAI</Text>
        <Text style={styles.subtitle}>Harvest Quality Assessment</Text>
      </View>

      <View style={styles.formCard}>
        {/* Temperature Input */}
        <Text style={styles.label}>Drying Temperature (°C)</Text>
        <View style={styles.stepperRow}>
          <TouchableOpacity onPress={() => setTemp(t => t - 0.5)} style={styles.stepBtn}>
            <Text style={styles.stepText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>{temp.toFixed(1)}</Text>
          <TouchableOpacity onPress={() => setTemp(t => t + 0.5)} style={styles.stepBtn}>
            <Text style={styles.stepText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Weight Before Input */}
        <Text style={styles.label}>Weight Before Drying (g)</Text>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={wb.toString()} 
          onChangeText={(v) => setWb(Number(v))} 
        />

        {/* Weight After Input */}
        <Text style={styles.label}>Weight After Drying (g)</Text>
        <TextInput 
          style={styles.input} 
          keyboardType="numeric" 
          value={wa.toString()} 
          onChangeText={(v) => setWa(Number(v))} 
        />

        <TouchableOpacity style={styles.predictBtn} onPress={handlePredict}>
          <Text style={styles.predictBtnText}>PREDICT QUALITY</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: { padding: 30, backgroundColor: '#5D4037', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  title: { color: '#FFF', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#D7CCC8', fontSize: 16 },
  formCard: { margin: 20, padding: 20, backgroundColor: '#FFF', borderRadius: 20, elevation: 5 },
  label: { fontSize: 14, color: '#757575', marginBottom: 10, marginTop: 20 },
  stepperRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F5F5F5', borderRadius: 10, padding: 5 },
  stepBtn: { width: 50, height: 50, backgroundColor: '#8D6E63', borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  stepText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  valueText: { fontSize: 20, fontWeight: 'bold', color: '#5D4037' },
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, fontSize: 18, color: '#5D4037' },
  predictBtn: { marginTop: 40, backgroundColor: '#5D4037', padding: 18, borderRadius: 15, alignItems: 'center' },
  predictBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});

export default CinnOracle_Main;