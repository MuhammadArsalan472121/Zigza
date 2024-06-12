import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function notificationCommentScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ScrollView>
          <View>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FD941E',
              }}>
              Notification
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationFScreen')}>
              <View style={styles.followingViewStyle}>
                <View
                  style={{
                    borderRadius: 50,
                    height: 70,
                    width: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FD941E',
                  }}>
                  <IconMi name={'person-add-alt'} size={40} color={'#FFF'} />
                </View>
                <View>
                  <Text style={{marginTop: 5}}>Following</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationLScreen')}>
              <View style={styles.likesViewStyle}>
                <View
                  style={{
                    borderRadius: 50,
                    height: 70,
                    width: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#FF003C',
                  }}>
                  <IconMci name={'heart-outline'} size={40} color={'#FFF'} />
                </View>
                <View>
                  <Text style={{marginTop: 5}}>Likes</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationCScreen')}>
              <View style={styles.commentViewStyle}>
                <View
                  style={{
                    borderRadius: 50,
                    height: 70,
                    width: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#9000FF',
                  }}>
                  <IconMi name={'comment'} size={40} color={'#FFF'} />
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 5,
                      fontWeight: 'bold',
                      color: '#FD941E',
                    }}>
                    Comment
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View style={{flex: 0.2, marginRight: 5}}>
              <Image source={require('../assets/profileLogo.png')} />
            </View>
            <View style={{flex: 0.8}}>
              <View>
                <Text style={{color: '#FD941E', fontWeight: 'bold'}}>
                  @devmusama
                </Text>
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit
                  Suspendisse mattis enim et semp
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
          // backgroundColor: '#FCFCFC',
          height: '8%',
        }}>
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
            onPress={() => navigation.navigate('NotificationFScreen')}
            style={{flex: 0.22, alignItems: 'center'}}>
            <IconIi
              name={'notifications-outline'}
              size={25}
              color={'#FD941E'}
            />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  followingViewStyle: {alignItems: 'center', justifyContent: 'center'},
  likesViewStyle: {alignItems: 'center', justifyContent: 'center'},
  commentViewStyle: {alignItems: 'center', justifyContent: 'center'},
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
  mainView: {flex: 1, flexDirection: 'row', margin: 10},
});
