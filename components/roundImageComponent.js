import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default function roundImageComponent({
  TextValue,
  ImageSource,
  RoundImageHeightValue,
  RoundImageWidthValue,
  FontSizeValue
}) {
  return (
    <View style={styles.imageViewStyle}>
      <Image source={ImageSource} style={[styles.imageStyle,{height:RoundImageHeightValue,width:RoundImageWidthValue}]}/>
      <Text style={{fontSize:FontSizeValue}}>
          {TextValue}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
 imageViewStyle:{
justifyContent:'center',
alignItems:'center'
 },
 imageStyle:{
    height:60,
    width:60
 }
});
