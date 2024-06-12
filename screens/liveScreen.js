import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Live from '../components/squareImageComponent';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function liveScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <View stye={styles.container}>
          <View style={styles.textView}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>Live</Text>
          </View>
          <View style={styles.contentView}>
            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground
                  source={require('../assets/liveThumbnail.png')}
                  style={{
                    height: 230,
                    width: 160,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#FF0000',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 5,
                        height: 25,
                        width: 50,
                      }}>
                      <Text style={{color: '#FFF'}}>{'Live'}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>

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
            <IconIi name={'search'} size={25} color={'#FD941E'} />
            <Text style={styles.buttonTextStyle}>{'DISCOVER'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 0.12,
              backgroundColor: '#FFF',
              borderRadius: 50,
              elevation: 1,
              borderWidth: 0,
              alignItems: 'center',
              height: 45,
              justifyContent: 'center',
            }}>
            <IconMci name={'camera-outline'} size={25} color={'#707070'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen')}
            style={{flex: 0.22, alignItems: 'center'}}>
            <IconIi
              name={'notifications-outline'}
              size={25}
              color={'#707070'}
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
    flex: 0.8,
    backgroundColor: '#FFF',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  contentView: {
    marginLeft: 10,
    marginRight: 10,
  },
  contentSubView: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-around',
  },
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
});
