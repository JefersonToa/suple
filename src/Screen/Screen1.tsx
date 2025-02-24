import { View, Button } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigator } from '../Navigator/StackNavigator';

export const Screen1 = () => {
  const navigation = StackNavigator();
 const navigaton =   useNavigation();
  return (
    <View>
      <Button 
        title="Ir a pantalla 2" 
        onPress={() => navigaton.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))} 
      />
     <Button 
        title="Ir a pantalla 3" 
        onPress={() => navigaton.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))} 
      />
    </View>
  );
};