import React from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';

export default function squareImageComponent({
  TextValue,
  SquareImageSource,
  SquareImageHeightValue,
  SquareImageWidthValue,
  BorderRadiusValue,
}) {
  return (
    <View style={styles.imageViewStyle}>
      <ImageBackground
        source={SquareImageSource}
        style={[
          styles.imageStyle,
          {
            height: SquareImageHeightValue,
            width: SquareImageWidthValue,
            borderRadius: BorderRadiusValue,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Image source={require('../assets/Icon_play_circle.png')} />
      </ImageBackground>
      <Text style={{fontWeight: '700', fontSize: 18}}>{TextValue}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 20,
    height: 150,
    width: 150,
  },
});
