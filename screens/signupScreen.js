import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import InputField from '../components/inputFieldComponent';
import ButtonComponent from '../components/buttonComponent';
import IconE from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';
export default function signupScreen({navigation}) {
  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <Image
            style={{width: 185, height: 135}}
            source={require('../assets/zigzaLogo.png')}
          />
        </View>

        <View style={{marginBottom: 10}}>
          <InputField
            IconColorValue={'#707070'}
            IconNameValue={'person-outline'}
            BorderWidthValue={1}
            PlaceHolderValue={'Username'}
            PlaceholderTextColorValue={'#707070'}
          />
          <InputField
            IconColorValue={'#707070'}
            IconNameValue={'email'}
            BorderWidthValue={1}
            PlaceHolderValue={'Email'}
            PlaceholderTextColorValue={'#707070'}
          />
          <InputField
            IconColorValue={'#707070'}
            SecureTextEntryValue={true}
            IconNameValue={'lock-outline'}
            BorderWidthValue={1}
            PlaceHolderValue={'Password'}
            PlaceholderTextColorValue={'#707070'}
          />
          <InputField
            KeyboardTypeValue={'numeric'}
            IconColorValue={'#707070'}
            IconNameValue={'phone-android'}
            BorderWidthValue={1}
            PlaceHolderValue={'Phone No'}
            PlaceholderTextColorValue={'#707070'}
          />
        </View>

        <View style={{marginTop: 20, marginBottom: 30}}>
          <ButtonComponent
            buttonTextValue={'SIGNUP'}
            backgroundColorValue="#FD941E"
            textColorValue="#fff"
            onPressValue={() => navigation.navigate('WelcomeLogin')}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{margin: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text>Already have an account? Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{borderWidth: 1, width: '30%', height: 0, marginTop: 10}}
            />
            <Text style={{paddingLeft: 5, paddingRight: 5}}>OR</Text>
            <View
              style={{borderWidth: 1, width: '30%', height: 0, marginTop: 10}}
            />
          </View>
          <View style={{margin: 10}}>
              <Text>Login with Social Networks</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '40%',
          }}>
          <TouchableOpacity>
            <IconE name="facebook-with-circle" size={45} color={'#3B5999'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconFA name="google-plus-circle" size={45} color={'#DD4B39'} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
