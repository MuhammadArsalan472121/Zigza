import React, {useRef} from 'react';
import {View, StyleSheet, Image, Text,TouchableOpacity,TextInput} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonComponent from '../components/buttonComponent';

export default function walletScreen() {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.9,
          width: '80%',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/diamond.png')} />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FD941E'}}>
              {'368'}
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{'Rewards'}</Text>
          </View>
        </View>
        <Text style={{fontSize: 26, marginTop: 50, fontWeight: 'bold'}}>
          {'Account Balance'}
        </Text>

        <Text
          style={{
            fontSize: 26,
            marginTop: 50,
            fontWeight: 'bold',
            color: '#FD941E',
          }}>
          {'Rs. 368'}
        </Text>
      </View>

      <View style={styles.buttonViewStyle}>
      
        <ButtonComponent
          buttonTextValue={'Add Balance'}
          backgroundColorValue="#FD941E"
          textColorValue="#fff"
          onPressValue={() => refRBSheet.current.open()}
        />
        <RBSheet
          ref={refRBSheet}
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
          <View style={{flex: 1}}>
          <TouchableOpacity style={{alignSelf:'flex-end',margin:10}}onPress={() => refRBSheet.current.close()}>
                  <IconMci name={'close-thick'} size={30} color={'#FD941E'} />
                </TouchableOpacity>
            <TextInput
            keyboardType={'numeric'}
              placeholder={'Enter Amount'}
              placeholderTextColor={'#707070'}
              style={{
                borderWidth:1,
                alignSelf:'center',
                width:'90%',
                padding: 15,
                margin:10,
                marginBottom:20,
                borderRadius: 10,
                color: '#111',
              }}
            />
            <ButtonComponent
              buttonTextValue={'Send'}
              backgroundColorValue="#FD941E"
              textColorValue="#fff"
              onPressValue={() => refRBSheet.current.close()}
            />
          </View>
        </RBSheet>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttonViewStyle: {
    flex: 0.1,
    marginBottom: 50,
  },
});
