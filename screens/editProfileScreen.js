import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import ButtonComponent from '../components/buttonComponent';
import InputField from '../components/inputFieldComponent';

export default function editProfileScreen({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <View>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#FD941E',
                }}>
                Edit Profile
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <ImageBackground
                source={require('../assets/profileLogoBg.png')}
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/profileLogo.png')}
                  style={{
                    marginTop:25,
                    height: 90,
                    width: 90,
                  }}
                />
                <TouchableOpacity style={{marginLeft: 60}}>
                  <IconF name={'edit'} size={22} />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>

          <View style={{marginTop:20}}>
            <InputField
              IconNameValue={'person-outline'}
              IconColorValue={'#707070'}
              PlaceHolderValue={'Username'}
              PlaceholderTextColorValue={'#707070'}
              BorderWidthValue={1}
            />
            <InputField
              IconNameValue={'email'}
              IconColorValue={'#707070'}
              PlaceHolderValue={'Email'}
              PlaceholderTextColorValue={'#707070'}
              BorderWidthValue={1}
            />
            <InputField
              SecureTextEntryValue={true}
              IconNameValue={'lock-outline'}
              IconColorValue={'#707070'}
              PlaceHolderValue={'Password'}
              PlaceholderTextColorValue={'#707070'}
              BorderWidthValue={1}
            />
            <InputField
              KeyboardTypeValue={'numeric'}
              IconNameValue={'phone-android'}
              IconColorValue={'#707070'}
              PlaceHolderValue={'Phone No'}
              PlaceholderTextColorValue={'#707070'}
              BorderWidthValue={1}
            />
            <View
              style={{
                borderWidth: 1,
                height: 150,
                alignSelf: 'center',
                justifyContent: 'flex-start',
                borderRadius: 30,
                margin: 10,
                width: '80%',
              }}>
              <TextInput
                multiline={true}
                placeholder={'Bio'}
                placeholderTextColor={'#707070'}
                style={{
                  margin: 10,
                  textAlignVertical: 'top',
                  borderRadius: 10,
                  color: '#111',
                  height: 130,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonViewStyle}>
        <ButtonComponent
          buttonTextValue={'Update Profile'}
          backgroundColorValue="#FD941E"
          textColorValue="#fff"
          onPressValue={() => navigation.navigate('MyProfileScreen')}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  buttonViewStyle: {
  },
});
