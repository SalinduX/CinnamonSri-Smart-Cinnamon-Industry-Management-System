import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function HomeScreen() {
  const router = useRouter();

  const handleUpload = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission required to access gallery');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      router.push({
        pathname: '/detection',
        params: {
          imageUri: result.assets[0].uri,
        },
      });
    }
   };

  

  return (
    <View style={styles.container}>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={require('@/assets/images/cinnamon.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
        <Text style={styles.heroText}>Protect Your Cinnamon</Text>
      </View>

      {/* Action Cards */}
      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card} onPress={handleUpload}>
          <Ionicons name="cloud-upload-outline" size={28} color="#2ecc71" />
          <Text style={styles.cardText}>Upload</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.card}
           onPress={() => router.push('/guide')}
          >
         <Ionicons name="scan-outline" size={28} color="#2ecc71" />
         <Text style={styles.cardText}>Scan</Text>
        </TouchableOpacity>

      </View>


      {/* Scan History Button */}
      <TouchableOpacity
         style={styles.historyButton}
          onPress={() => router.push('/scan-history')}
        >
       <Ionicons name="time-outline" size={18} color="#fff" />
       <Text style={styles.historyText}>Scan History</Text>
       </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  hero: {
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    paddingVertical: 40,
  },

  heroImage: {
    width: 220,
    height: 220,
    marginBottom: 10,
  },

  heroText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -30,
    paddingHorizontal: 20,
  },

  card: {
    width: 140,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  cardText: {
    marginTop: 6,
    fontSize: 14,
    color: '#2ecc71',
    fontWeight: '500',
  },

  previewContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  previewTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },

  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  historyButton: {
    marginTop: 25,
    marginHorizontal: 20,
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },

  historyText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
