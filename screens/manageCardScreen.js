import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';
import CreditCardForm, {Button} from 'rn-credit-card';

export default function paymentDetails({navigation}) {
  const pressHandlerSend = () => {
    navigation.navigate('SettingScreen');
  };
  const formMethods = useForm({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  const {handleSubmit, formState} = formMethods;

  function onSubmit() {
    navigation.navigate('SettingScreen');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View>
         
          <FormProvider {...formMethods}>
          <Text
            style={{
              marginTop: 5,
              marginLeft:15,
              fontSize: 18,
              fontWeight: '600',
              color: '#FD941E',
            }}>
            Manage Card
          </Text>
            <KeyboardAvoidingView
              style={styles.avoider}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              
              <CreditCardForm
                LottieView={LottieView}
                horizontalStart
                inputColors={{
                  focused: '#111',
                  errored: '#B00020',
                  regular: '#B9C4CA',
                }}
                overrides={{
                  labelText: {
                    marginTop: 16,
                    color: '#000',
                  },
                }}
              />
            </KeyboardAvoidingView>
            {formState.isValid && (
              <Button
                style={styles.button}
                title={'CONFIRM PAYMENT'}
                onPress={handleSubmit(onSubmit)}
              />
            )}
          </FormProvider>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={pressHandlerSend}>
        <View style={styles.loginButtonStyle}>
          <IconAD name={'pluscircleo'} size={20} color={'#FFF'} />
          <Text style={styles.buttonTextStyle}> ADD CARD</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFF',
    margin: 10,
  },

  loginButtonStyle: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 15,
    marginBottom:50,
    backgroundColor: '#FD941E',
  },
  buttonTextStyle: {
    color: '#ffff',
    fontSize: 16,
  },
  avoider: {
    flex: 1,
    padding: 15,
  },
  button: {
    margin: 15,
    marginTop: 0,
  },
});
