import { Button, Text, View } from "react-native";

import {Footer} from '../../components/index'
import { colors } from '../../constants/colors/colors';
import { styles } from "./styles";

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Product Screen</Text>
      <Button
        title="Ir a las Categorias"
        onPress={() => navigation.navigate('Categories')}
        color={colors.color6}
      />
      <Footer 
        title='Derechos Reservados 2023'
      />
    </View>
  );
};

export default ProductDetails;