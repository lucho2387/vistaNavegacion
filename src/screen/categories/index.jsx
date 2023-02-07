import { Button, Text, View } from 'react-native';

import {Footer} from '../../components/index'
import { colors } from '../../constants/colors/colors';
import { styles } from './styles';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories Screen</Text>
      <Button
        title="Ir a Productos"
        onPress={() => navigation.navigate('Products')}
        color={colors.color2}
      />
      <Footer 
        title='Derechos Reservados 2023'
      />
    </View>
    
  );
};

export default Categories;
