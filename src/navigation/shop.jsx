import {Categories, Products, ProductsDetails} from  "../screen/index";

import { colors } from "../constants/colors/colors";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen 
        name="Categories" 
        component={Categories} 
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          statusBarColor: colors.color2,
        }}
      />
      <Stack.Screen 
        name="Products" 
        component={Products} 
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          statusBarColor: colors.color9,
        }}
      />
      <Stack.Screen 
        name="ProductsDetails" 
        component={ProductsDetails} 
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          statusBarColor: colors.color6,
        }}
      />
    </Stack.Navigator>
  );
}


export default ShopNavigator;