import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function homeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerSubView1}>
            <Image
              source={require('../assets/profileLogo.png')}
              style={{height: 50, width: 50, margin: 10}}
            />
          </View>
          <View style={styles.headerSubView2}>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#FFF'}}>
              {'@devmusama'}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#FD941E'}}>
              {'My Following'}
            </Text>
          </View>
          <View style={styles.headerSubView3}>
            <Text style={{fontSize: 30, fontWeight: '600', color: '#FD941E'}}>
              {'50'}
            </Text>
            <IconMci name={'plus'} size={25} color={'#FD941E'} />
          </View>
        </View>

        <View style={styles.firstView}>
          <View style={styles.firstSubView1}>
            <ImageBackground
              source={require('../assets/MaskGroup4.png')}
              style={{
                height: 160,
                width: 140,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/Icon_play_circle.png')} />
            </ImageBackground>
          </View>
          <View style={styles.firstSubView2}>
            <Text style={{fontWeight: '700'}}>
              {
                'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp \n \n#tiktok#night#party\n#happy#fiesta '
              }
            </Text>
          </View>
        </View>

        <View style={styles.centerView}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>{'COMMENTS'}</Text>
          <View style={styles.centerSubView}>
            <Text style={{fontSize: 26, fontWeight: '600', color: '#FD941E'}}>
              {'50'}
            </Text>
            <IconMci name={'plus'} size={25} color={'#FD941E'} />
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
          </View>

          <View style={styles.secondSubView}>
            <View style={styles.secondSubView1}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={styles.secondSubView2}>
              <Text style={{fontWeight: '600'}}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adi piscing elit Suspendisse mattis enim et semp'
                }
              </Text>
            </View>
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
          <IconMci name={'home'} size={25} color={'#FD941E'} />
          <Text style={[styles.buttonTextStyle,{color:'#FD941E'}]}>{'HOME'}</Text>
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
            elevation:1,
            borderWidth:0,
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
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },

  header: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
  },
  headerSubView1: {flex: 0.2, marginLeft: 10},
  headerSubView2: {flex: 0.6},
  headerSubView3: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  firstView: {
    flex: 0.2,
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstSubView1: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSubView2: {flex: 0.6, margin: 10},

  centerView: {
    flex: 0.05,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerSubView: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },

  secondView: {
    flex: 0.6,
    marginLeft: 10,
    marginRight: 10,
  },
  secondSubView: {
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    padding: 10,
    flexDirection: 'row',
  },
  secondSubView1: {flex: 0.2},
  secondSubView2: {flex: 0.8},
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
});
