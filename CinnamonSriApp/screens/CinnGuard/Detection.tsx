import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetectionScreen() {
  const router = useRouter();
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Ionicons name="close" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image source={{ uri: imageUri }} style={styles.image} />

      {/* Disease Info */}
      <Text style={styles.disease}>Rough Bark Disease</Text>

      <View style={styles.severity}>
        <Ionicons name="warning" size={14} color="#f1c40f" />
        <Text style={styles.severityText}>Medium</Text>
      </View>

      {/* Confidence Card */}
      <View style={styles.confidenceCard}>
        <View>
          <Text style={styles.confidenceTitle}>AI Confidence</Text>
          <Text style={styles.confidenceValue}>92%</Text>
          <Text style={styles.accuracy}>Accuracy 92%</Text>
        </View>

        <View style={styles.circle}>
          <Text style={styles.circleText}>92%</Text>
        </View>
      </View>

      {/* Status */}
      <View style={styles.status}>
        <Ionicons name="alert-circle" size={18} color="#f1c40f" />
        <View>
          <Text style={styles.statusTitle}>Disease detected</Text>
          <Text style={styles.statusSub}>Early treatment recommended</Text>
        </View>
      </View>

      {/* Action */}
      <TouchableOpacity
  style={styles.actionButton}
  onPress={() =>
    router.push({
      pathname: '/prevention',
      params: {
        imageUri: imageUri,               // pass scanned / uploaded image
        disease: 'Rough Bark Disease',     // mock for now
      },
    })
  }
>
  <Text style={styles.actionText}>View Prevention & Treatment</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7f4',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginTop: 20,
  },

  disease: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },

  severity: {
    marginTop: 6,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff3cd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 6,
  },

  severityText: {
    fontSize: 12,
    color: '#7d6608',
    fontWeight: '500',
  },

  confidenceCard: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  confidenceTitle: {
    fontSize: 14,
    color: '#555',
  },

  confidenceValue: {
    fontSize: 26,
    fontWeight: '700',
  },

  accuracy: {
    fontSize: 12,
    color: '#2ecc71',
    marginTop: 2,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2ecc71',
  },

  status: {
    marginTop: 16,
    backgroundColor: '#fff3cd',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  statusTitle: {
    fontSize: 14,
    fontWeight: '600',
  },

  statusSub: {
    fontSize: 12,
    color: '#555',
  },

  actionButton: {
    marginTop: 20,
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  actionText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
