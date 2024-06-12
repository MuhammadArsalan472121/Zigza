import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import IconMi from 'react-native-vector-icons/MaterialIcons';

export default function inputFieldComponent({
  IconNameValue,
  IconColorValue,
  PlaceHolderValue,
  PlaceholderTextColorValue,
  WidthValue,
  HeightValue,
  BorderWidthValue,
  BackgroundColorValue,
  SecureTextEntryValue,
  KeyboardTypeValue,
}) {
  return (
    <View
      style={[
        styles.viewBody,
        {
          width: WidthValue,
          height: HeightValue,
          borderWidth:BorderWidthValue,
          backgroundColor: BackgroundColorValue,
        },
      ]}>
      <IconMi name={IconNameValue} size={25} color={('#999', IconColorValue)} />
      <TextInput
        keyboardType={KeyboardTypeValue}
        secureTextEntry={SecureTextEntryValue}
        placeholder={PlaceHolderValue}
        placeholderTextColor={('#999', PlaceholderTextColorValue)}
        style={styles.textInputStyle}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    alignSelf: 'center',
    borderRadius: 30,
    paddingLeft: 10,
    padding: 5,
    margin: 10,
    width: '80%',
  },
  textInputStyle: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#111',
    width: '80%',
  },
});
