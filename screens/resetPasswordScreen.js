import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonComponent from '../components/buttonComponent';
import InputField from '../components/inputFieldComponent';

export default function resetPasswordScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.mainView}>
          <View style={styles.imageViewStyle}>
            <Image source={require('../assets/zigzaLogo.png')} />
          </View>
          <View style={styles.text1ViewStyle}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>
              Reset Password
            </Text>
          </View>
          <View>
            <View style={styles.inputFieldViewStyle}>
              <InputField
                IconNameValue={'lock-outline'}
                IconColorValue={'#707070'}
                PlaceHolderValue={'New Password'}
                PlaceholderTextColorValue={'#707070'}
                BorderWidthValue={1}
              />
              <InputField
                SecureTextEntryValue={true}
                IconNameValue={'lock-outline'}
                IconColorValue={'#707070'}
                PlaceHolderValue={'Confirm New Password'}
                PlaceholderTextColorValue={'#707070'}
                BorderWidthValue={1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonViewStyle}>
        <ButtonComponent
          buttonTextValue={'CONTINUE'}
          backgroundColorValue="#FD941E"
          textColorValue="#fff"
          onPressValue={() => navigation.navigate('WelcomeLogin')}
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
  },
  inputFieldViewStyle: {},
  buttonViewStyle: {
    marginBottom: 50,
  },
});
