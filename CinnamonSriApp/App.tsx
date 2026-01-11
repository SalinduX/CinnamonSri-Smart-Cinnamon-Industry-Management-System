import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CinnOracleMain from './screens/CinnOracle/CinnOracleMain';
import NewAnalysis from './screens/CinnOracle/NewAnalysis';
import PricePrediction from './screens/CinnOracle/PricePrediction';
import HistoricalTrends from './screens/CinnOracle/HistoricalTrends';
import SavedSuccess from './screens/CinnOracle/SavedSuccess';
import Report from './screens/CinnOracle/Report';
import HarvestHome from './screens/CinnHarvest/HarvestHome';

export type RootStackParamList = {
  CinnOracleMain: undefined;
  NewAnalysis: undefined;
  PricePrediction: { result: any };
  HistoricalTrends: undefined;
  SavedSuccess: undefined;
  Report: { batchData: any };
  HarvestHome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CinnOracleMain">
        <Stack.Screen 
          name="CinnOracleMain" 
          component={CinnOracleMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="NewAnalysis" 
          component={NewAnalysis}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PricePrediction" 
          component={PricePrediction}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HistoricalTrends" 
          component={HistoricalTrends}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SavedSuccess" 
          component={SavedSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Report" 
          component={Report}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HarvestHome" 
          component={HarvestHome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

