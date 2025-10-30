import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function PreventionScreen() {
  const router = useRouter();
  const { imageUri, disease } = useLocalSearchParams<{
    imageUri: string;
    disease?: string;
  }>();

  const [activeTab, setActiveTab] = useState<'prevention' | 'treatment'>('prevention');

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Prevention & Treatment</Text>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Ionicons name="close" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Tabs */}
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'prevention' && styles.activeTab]}
            onPress={() => setActiveTab('prevention')}
          >
            <Text style={[styles.tabText, activeTab === 'prevention' && styles.activeTabText]}>
              Prevention
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'treatment' && styles.activeTab]}
            onPress={() => setActiveTab('treatment')}
          >
            <Text style={[styles.tabText, activeTab === 'treatment' && styles.activeTabText]}>
              Treatment
            </Text>
          </TouchableOpacity>
        </View>

        {/* Scanned / Uploaded Image */}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
          />
        )}

        {/* Prevention Section */}
        {activeTab === 'prevention' && (
          <>
            <Text style={styles.sectionTitle}>Prevention tips</Text>

            <View style={[styles.tipCard, styles.greenCard]}>
              <Ionicons name="search" size={20} color="#000" />
              <View style={styles.tipTextWrap}>
                <Text style={styles.tipTitle}>Regular Monitoring</Text>
                <Text style={styles.tipText}>
                  Inspect cinnamon plants regularly for early signs of disease.
                </Text>
              </View>
            </View>

            <View style={[styles.tipCard, styles.greenCard]}>
              <Ionicons name="water" size={20} color="#000" />
              <View style={styles.tipTextWrap}>
                <Text style={styles.tipTitle}>Proper Watering</Text>
                <Text style={styles.tipText}>
                  Avoid overhead watering to keep leaves dry.
                </Text>
              </View>
            </View>
          </>
        )}

        {/* Treatment Section */}
        {activeTab === 'treatment' && (
          <>
            <Text style={styles.sectionTitle}>Treatment Tips</Text>

            <View style={[styles.tipCard, styles.yellowCard]}>
              <Ionicons name="cut" size={20} color="#000" />
              <View style={styles.tipTextWrap}>
                <Text style={styles.tipTitle}>Remove Infected Bark</Text>
                <Text style={styles.tipText}>
                  Carefully remove infected bark areas and dispose of them safely.
                </Text>
              </View>
            </View>

            <View style={[styles.tipCard, styles.yellowCard]}>
              <Ionicons name="medkit" size={20} color="#000" />
              <View style={styles.tipTextWrap}>
                <Text style={styles.tipTitle}>Apply Fungicide</Text>
                <Text style={styles.tipText}>
                  Use recommended fungicides as advised by agriculture officers.
                </Text>
              </View>
            </View>
          </>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f3',
    paddingHorizontal: 16,
  },

  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  tabWrapper: {
    marginTop: 18,
    flexDirection: 'row',
    backgroundColor: '#e3f4ea',
    borderRadius: 20,
    padding: 4,
  },

  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#2ecc71',
  },

  tabText: {
    fontSize: 13,
    color: '#2ecc71',
    fontWeight: '500',
  },

  activeTabText: {
    color: '#ffffff',
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    marginTop: 16,
  },

  sectionTitle: {
    marginTop: 22,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '600',
  },

  tipCard: {
    flexDirection: 'row',
    gap: 12,
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
  },

  greenCard: {
    backgroundColor: '#dff5e6',
  },

  yellowCard: {
    backgroundColor: '#fff2c2',
  },

  tipTextWrap: {
    flex: 1,
  },

  tipTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  tipText: {
    fontSize: 12,
    marginTop: 2,
    color: '#333',
  },
});
