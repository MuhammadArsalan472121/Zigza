import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconF from 'react-native-vector-icons/Feather';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function myProfileScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.firstView}>
          <View style={styles.firstSubView1}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#FD941E',
              }}>
              My Profile
            </Text>
            <ImageBackground
              style={{
                height: 90,
                width: 90,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../assets/profileLogoBg.png')}>
              <Image
                style={{height: 80, width: 80}}
                source={require('../assets/profileLogo.png')}
              />
            </ImageBackground>
          </View>
          <View style={styles.firstSubView2}>
            <View style={styles.firstSubView2a}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingScreen')}>
                <IconF name={'settings'} size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.firstSubView2b}>
              <View style={styles.firstSubView2b1}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Devmusama</Text>
                <Text
                  style={{fontSize: 14, color: '#707070', fontWeight: '500'}}>
                  ID:75763357843
                </Text>
              </View>

              <View style={styles.firstSubView2b2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditProfileScreen')}>
                  <Text
                    style={{
                      fontSize: 10,
                      padding: 2,
                      fontWeight: '700',
                      color: '#FD941E',
                    }}>
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.firstSubView2c}>
              <Text style={{fontSize: 12, fontWeight: '600'}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={[styles.secondSubView, {flex: 0.4}]}>
            <Text style={styles.secondSubViewText}>56</Text>
            <Text style={{fontSize: 16, color: '#676767'}}>Following</Text>
          </View>
          <View style={styles.secondSubView}>
            <Text style={styles.secondSubViewText}>56</Text>
            <Text style={{fontSize: 16, color: '#676767'}}>Followers</Text>
          </View>
          <View style={styles.secondSubView}>
            <Text style={styles.secondSubViewText}>56</Text>
            <Text style={{fontSize: 16, color: '#676767'}}>Gifts</Text>
          </View>
        </View>

        <View style={styles.thirdView}>
          <View style={styles.imageViewStyle}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.imageViewStyle}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.imageViewStyle}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.imageViewStyle}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/liveThumbnail.png')}
                style={{
                  height: 230,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Image source={require('../assets/Icon_play_circle.png')} />
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

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
          <IconIi name={'md-person-sharp'} size={25} color={'#FD941E'} />
          <Text style={styles.buttonTextStyle}>{'PROFILE'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },

  firstView: {
    flex: 0.2,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  firstSubView1: {
    flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  firstSubView2: {flex: 0.7, justifyContent: 'space-around'},
  firstSubView2a: {flex: 0.3, alignItems: 'flex-end'},
  firstSubView2b: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  firstSubView2b1: {flex: 0.7},
  firstSubView2b2: {
    flex: 0.3,
    borderWidth: 2,
    borderColor: '#FD941E',
    borderRadius: 50,
    height: 25,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstSubView2c: {flex: 0.4, marginTop: 10},

  secondView: {
    flex: 0.1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondSubView: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSubViewText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FD941E',
    marginRight: 5,
  },

  thirdView: {
    flex: 0.7,
    marginTop: 10,
  },
  imageViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
});
