import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ButtonComponent from '../components/buttonComponent';
import InputField from '../components/inputFieldComponent';

export default function forgotPasswordScreen({navigation}) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.imageViewStyle}>
            <Image source={require('../assets/zigzaLogo.png')} />
          </View>
          <View style={styles.text1ViewStyle}>
            <Text style={{fontWeight: '500', fontSize: 20}}>
              Forgot Password?
            </Text>
          </View>
          <View>
            <View style={styles.text2ViewStyle}>
              <Text>Enter Email for Verification Code</Text>
            </View>
            <View style={styles.inputFieldViewStyle}>
              <InputField
                IconNameValue={'person-outline'}
                IconColorValue={'#707070'}
                PlaceHolderValue={'Email'}
                PlaceholderTextColorValue={'#707070'}
                BorderWidthValue={1}
              />
            </View>
          </View>
        </View>
  
      <View style={styles.buttonViewStyle}>
        <ButtonComponent
          buttonTextValue={'SEND CODE'}
          backgroundColorValue="#FD941E"
          textColorValue="#fff"
          onPressValue={() => navigation.navigate('VerifyScreen')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  mainView: {
    marginTop: 50,
    marginBottom: '50%',
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  text2ViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  inputFieldViewStyle: {},
  buttonViewStyle: {
    marginBottom: 30,
  },
});
