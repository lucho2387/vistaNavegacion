import { Button, Text, View } from "react-native";

import {Footer} from '../../components/index'
import { colors } from '../../constants/colors/colors';
import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Screen</Text>
      <Button
        title="Ir al Detalle del Producto"
        onPress={() => navigation.navigate('ProductsDetails')}
        color={colors.color7}
      />
      <Footer 
        title='Derechos Reservados 2023'
      />
    </View>
  );
};

export default Products;