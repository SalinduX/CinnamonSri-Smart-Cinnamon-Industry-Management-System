import Header from '@/layout/header';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
         <Header 
       
       Left={
        <Link href={'/'} asChild>
        <TouchableOpacity>
            <Ionicons name="arrow-back-circle-sharp" size={27} color="black" />
       </TouchableOpacity>
         </Link>
    }
         centertext="Profile"
    /> 
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});