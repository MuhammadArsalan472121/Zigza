import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Linking,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import InputField from '../components/inputFieldComponent';
import ButtonComponent from '../components/buttonComponent';
import IconE from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';



export default function loginScreen({navigation, userText, userPin}) {
  const Onsubmit =()=>{
    console.log(userText,userPin);

  }
  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={{margin: 40}}>
          <Image
            style={{width: 185, height: 135}}
            source={require('../assets/zigzaLogo.png')}
          />
        </View>

        <View style={{marginTop: 20, marginBottom: 30}}>
          <InputField
            IconColorValue={'#707070'}
            IconNameValue={'person-outline'}
            BorderWidthValue={1}
            PlaceHolderValue={'Email'}
            PlaceholderTextColorValue={'#707070'}>
            {userText}
            
          </InputField>
          <InputField
            IconColorValue={'#707070'}
            SecureTextEntryValue={true}
            IconNameValue={'lock-outline'}
            BorderWidthValue={1}
            PlaceHolderValue={'Password'}
            PlaceholderTextColorValue={'#707070'}>
            {userPin}
          </InputField>
        </View>

        <View style={{marginTop: 20, marginBottom: 30}}>
          <ButtonComponent
            buttonTextValue={'LOGIN'}
            backgroundColorValue="#FD941E"
            textColorValue="#fff"
            onPressValue={() => Onsubmit}
          />

          <View style={{marginTop: 20, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{margin: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignupScreen')}>
              <Text>Don't have an account? Sign UP</Text>
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
          <View style={{margin: 20}}>
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
