import { Dimensions, StatusBar, StyleSheet } from "react-native";

import { colors } from '../../constants/colors/colors'

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.color4,
    
  },
});