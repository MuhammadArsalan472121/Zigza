import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ButtonComponent from '../components/buttonComponent';

export default function verifyScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.imageViewStyle}>
            <Image source={require('../assets/zigzaLogo.png')} />
          </View>
          <View style={styles.text1ViewStyle}>
            <Text style={{fontSize:20, fontWeight:'500',}}>Verification</Text>
          </View>
          <View>
            <View style={styles.text2ViewStyle}>
              <Text>Enter Code Below</Text>
            </View>
            <View style={styles.inputFieldViewStyle}>
              <TextInput
                placeholder={'0'}
                placeholderTextColor={'#999'}
                textAlign={'center'}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.inputTextStyle}
              />
              <TextInput
                placeholder={'0'}
                placeholderTextColor={'#999'}
                textAlign={'center'}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.inputTextStyle}
              />
              <TextInput
                placeholder={'0'}
                placeholderTextColor={'#999'}
                textAlign={'center'}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.inputTextStyle}
              />
              <TextInput
                placeholder={'0'}
                placeholderTextColor={'#999'}
                textAlign={'center'}
                keyboardType={'numeric'}
                maxLength={1}
                style={styles.inputTextStyle}
              />
            </View>
          </View>
        </View>
       
      </ScrollView>
      <View style={styles.buttonViewStyle}>
          <ButtonComponent
            buttonTextValue={'VERIFY'}
            backgroundColorValue="#FD941E"
            textColorValue="#fff"
            onPressValue={() => navigation.navigate('ResetPasswordScreen')}
          />
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainView: {
    marginTop: 50,
    marginBottom: '80%',
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:30,
  },
  text2ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
  },
  inputFieldViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTextStyle:{
    borderWidth: 1,
    borderRadius: 60,
    fontSize: 25,
    color: '#111',
    padding: 5,
    margin: 10,
    height: 60,
    width: '15%',
  },
  buttonViewStyle: {
    marginBottom:50,
  },
});
