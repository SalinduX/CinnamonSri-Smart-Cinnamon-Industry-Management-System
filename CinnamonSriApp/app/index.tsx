import AppNavigator from "@/navigation/AppNavigator";

import { StatusBar } from "expo-status-bar"; // Use Expo StatusBar
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}