import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function GuideScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Close Button */}
      <TouchableOpacity style={styles.close} onPress={() => router.back()}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Before You Scan...</Text>

      {/* Tips */}
      <View style={styles.tip}>
        <Ionicons name="checkmark-circle" size={22} color="#2ecc71" />
        <Text style={styles.tipText}>Capture clear images of leaves, bark or stem.</Text>
      </View>

      <View style={styles.tip}>
        <Ionicons name="checkmark-circle" size={22} color="#2ecc71" />
        <Text style={styles.tipText}>Ensure good natural lighting.</Text>
      </View>

      <View style={styles.tip}>
        <Ionicons name="checkmark-circle" size={22} color="#2ecc71" />
        <Text style={styles.tipText}>Avoid shadows on infected areas.</Text>
      </View>

      <View style={styles.tip}>
        <Ionicons name="checkmark-circle" size={22} color="#2ecc71" />
        <Text style={styles.tipText}>Hold the camera steady.</Text>
      </View>

      <View style={styles.tip}>
        <Ionicons name="checkmark-circle" size={22} color="#2ecc71" />
        <Text style={styles.tipText}>Focus closely on visible symptoms.</Text>
      </View>

      {/* Scan Now */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => router.push('/camera')}
      >
        <Text style={styles.scanText}>Scan Now</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },

  close: {
    alignSelf: 'flex-end',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
    textAlign: 'center',
  },

  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    gap: 10,
  },

  tipText: {
    fontSize: 14,
    flex: 1,
  },

  scanButton: {
    marginTop: 30,
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  scanText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
