import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
const {width: WIDTH} = Dimensions.get('window');

export default function buttonComponent({
  buttonTextValue,
  backgroundColorValue,
  textColorValue,
  onPressValue,
}) {
  // const pressHandlerSignIn=()=>{
  //     navigation.navigate('Input')
  // };
  // onPress = {pressHandlerSignIn};
  // onPress={() => navigation.navigate('Input')}

  return (
    <TouchableOpacity
      onPress={onPressValue}
      style={[styles.viewBody, {backgroundColor: backgroundColorValue}]}>
      <Text style={[styles.buttonTextStyle, {color: textColorValue}]}>
        {buttonTextValue}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  
  viewBody: {
    width: WIDTH - 80,
    height: 58,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: 20,
  },
});
/*
<View style={{marginTop: 20}}>
  <CustomButton
    buttonTextValue={'Log In'}
    backgroundColorValue="#2D3E50"
    textColorValue="white"
    onPressValue={() => navigation.navigate('Welcome')}
  />
</View>;
*/