import React from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function welcomeLogin({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('../assets/HomeBG.png')}
        style={{height: '100%', width: '100%'}}
      />
      {/* <Button
        title={'Start Cam'}
        onPress={() => navigation.navigate('StartCam')}
      /> */}

      <View
        style={{
          flexDirection: 'row',
          height: 70,
          justifyContent: 'space-around',
          alignItems: 'center',
          borderWidth: 0,
          elevation: 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{flex: 0.22, alignItems: 'center'}}>
          <IconMci name={'home'} size={25} color={'#707070'} />
          <Text style={styles.buttonTextStyle}>{'HOME'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DiscoverScreen')}
          style={{flex: 0.22, alignItems: 'center'}}>
          <IconIi name={'search'} size={25} color={'#707070'} />
          <Text style={styles.buttonTextStyle}>{'DISCOVER'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('StartCam')}
          style={{
            flex: 0.12,
            backgroundColor: '#FFF',
            borderRadius: 50,
            alignItems: 'center',
            height: 45,
            elevation: 1,
            borderWidth: 0,
            justifyContent: 'center',
          }}>
          <IconMci name={'camera-outline'} size={25} color={'#707070'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}
          style={{flex: 0.22, alignItems: 'center'}}>
          <IconIi name={'notifications-outline'} size={25} color={'#707070'} />
          <Text style={styles.buttonTextStyle}>{'NOTIFICATION'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyProfileScreen')}
          style={{flex: 0.22, alignItems: 'center'}}>
          <IconIi name={'md-person-sharp'} size={25} color={'#707070'} />
          <Text style={styles.buttonTextStyle}>{'PROFILE'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
});
