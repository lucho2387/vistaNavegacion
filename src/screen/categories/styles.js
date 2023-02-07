import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors/colors';
import { fonts } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: colors.color10,
      fontFamily: fonts.bitterLight,
      fontSize: 25,
      margin: 10
    }
});