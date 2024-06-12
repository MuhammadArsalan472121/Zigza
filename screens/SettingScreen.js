import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import ButtonComponent from '../components/buttonComponent';

export default function SettingScreen({navigation}) {
  const refRBSheetHC = useRef();
  const refRBSheetAU = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FD941E',
          }}>
          Setting
        </Text>
      </View>
      <View style={styles.secondView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <Text style={styles.textStyle}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <IconMi name={'chevron-right'} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ManageCardScreen')}>
            <Text style={styles.textStyle}>Manage Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ManageCardScreen')}>
            <IconMi name={'chevron-right'} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Wallet')}>
            <Text style={styles.textStyle}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Wallet')}>
            <IconMi name={'chevron-right'} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => refRBSheetHC.current.open()}>
            <Text style={styles.textStyle}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => refRBSheetHC.current.open()}>
            <IconMi name={'chevron-right'} size={30} />
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheetHC}
            animationType={'fade'}
            closeOnDragDown={false}
            height={400}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundTintColor: true,
              },
              draggableIcon: {
                // backgroundColor: '#000',
              },
            }}>
            <View style={{flex: 1}}>
              <View style={{flex: 0.1, alignItems: 'flex-end', margin: 10}}>
                <TouchableOpacity onPress={() => refRBSheetHC.current.close()}>
                  <IconMci name={'close-thick'} size={30} color={'#FD941E'} />
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.7}}>
                <TextInput
                  multiline={true}
                  placeholder={'Tell us about your Problem'}
                  placeholderTextColor={'#707070'}
                  style={{
                    borderWidth: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    padding: 20,
                    textAlignVertical: 'top',
                    borderRadius: 20,
                    color: '#111',
                    height: 250,
                  }}
                />
              </View>

              <View style={{flex: 0.2}}>
                <ButtonComponent
                  buttonTextValue={'Send'}
                  backgroundColorValue="#FD941E"
                  textColorValue="#fff"
                  onPressValue={() => refRBSheetHC.current.close()}
                />
              </View>
            </View>
          </RBSheet>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => refRBSheetAU.current.open()}>
            <Text style={styles.textStyle}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => refRBSheetAU.current.open()}>
            <IconMi name={'chevron-right'} size={30} />
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheetAU}
            animationType={'fade'}
            closeOnDragDown={false}
            height={260}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundTintColor: true,
              },
              draggableIcon: {
                // backgroundColor: '#000',
              },
            }}>
            <View style={{flex: 0.2, alignItems: 'flex-end', margin: 10}}>
              <TouchableOpacity onPress={() => refRBSheetAU.current.close()}>
                <IconMci name={'close-thick'} size={30} color={'#FD941E'} />
              </TouchableOpacity>
            </View>
            <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}><IconMci name={'alien'} size={100} color={'#FD941E'}/></View>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#FD941E'}}>
                There is Nothing About Us !
              </Text>
            </View>
          </RBSheet>
        </View>
      </View>
      <View style={[styles.buttonViewStyle, {flex: 0.1}]}>
        <ButtonComponent
          buttonTextValue={'Logout'}
          backgroundColorValue="#FD941E"
          textColorValue="#fff"
          onPressValue={() => navigation.navigate('WelcomeLogin')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  firstView: {
    flex: 0.1,
  },
  secondView: {
    flex: 0.8,
  },
  textStyle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '600',
  },

  buttonViewStyle: {
    margin: 50,
  },
});
