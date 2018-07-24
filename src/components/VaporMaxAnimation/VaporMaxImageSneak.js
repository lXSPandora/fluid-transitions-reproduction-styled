//@flow
import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

const { height } = Dimensions.get('window');

const sneakSize: number = (height / 2) - 90;

type Props = {
  navigation: {
    state: {
      params: {
        shared: string,
        image: () => string,
      },
    },
  },
};

const VaporMaxImageSneak = ({ navigation }: Props) => (
  <View style={styles.container}> 
    <Transition shared={navigation.state.params.shared}>
      <View style={styles.imageContainer}>
        <Image></Image>
      </View>
    </Transition>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: sneakSize,
    height: sneakSize,
    borderRadius: 20,
    backgroundColor: '#ededed',
  },
})

export default VaporMaxImageSneak;