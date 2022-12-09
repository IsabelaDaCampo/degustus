
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from "../../helpers/colors";

export default function FloatingButton({onPressFunction = () => {}}){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressFunction} activeOpacity={0.7} style={styles.floating} >
      <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  touchableOpacityStyle: {
    width: 50,
    height: 50,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});