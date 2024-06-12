import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';
import InputField from '../components/inputFieldComponent';
import NearBy from '../components/roundImageComponent';
import Following from '../components/squareImageComponent';

export default function discoverScreen({navigation}) {
  return (
    <View stye={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{ height: '10%'}}>
          <InputField
            IconNameValue={'search'}
            fontSize={10}
            IconColorValue={'#333'}
            PlaceHolderValue={'Search'}
            PlaceholderTextColorValue={'#000'}
            BackgroundColorValue={'#DDDDDD'}
            WidthValue={'90%'}
            HeightValue={55}
          />
        </View>

        <View style={{height: '33%', }}>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{'Near By'}</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('NearByScreen')}>
              <View style={styles.seeAllButtonView}>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 12}}>
                  {'See All'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 20,
            }}>
            <TouchableOpacity>
              <NearBy
                TextValue={'Maria'}
                ImageSource={require('../assets/maria.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Alexis'}
                ImageSource={require('../assets/alexis.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Jordan'}
                ImageSource={require('../assets/jordan.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Ines'}
                ImageSource={require('../assets/Ines.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Kevin'}
                ImageSource={require('../assets/kevin.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Sarah'}
                ImageSource={require('../assets/sarah.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 20,
            }}>
            <TouchableOpacity>
              <NearBy
                TextValue={'Maria'}
                ImageSource={require('../assets/maria.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Alexis'}
                ImageSource={require('../assets/alexis.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Jordan'}
                ImageSource={require('../assets/jordan.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Ines'}
                ImageSource={require('../assets/Ines.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Kevin'}
                ImageSource={require('../assets/kevin.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <NearBy
                TextValue={'Sarah'}
                ImageSource={require('../assets/sarah.png')}
                RoundImageHeightValue={50}
                RoundImageWidthValue={50}
                FontSizeValue={12}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: '33%', }}>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>
              {'My Following'}
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('MyFollowingScreen')}>
              <View style={styles.seeAllButtonView}>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 12}}>
                  {'See All'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              <Following
                TextValue={'@devmusama'}
                SquareImageSource={require('../assets/MaskGroup4.png')}
                SquareImageHeightValue={160}
                SquareImageWidthValue={160}
                BorderRadiusValue={30}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Following
                TextValue={'@devmusama'}
                SquareImageSource={require('../assets/MaskGroup4.png')}
                SquareImageHeightValue={160}
                SquareImageWidthValue={160}
                BorderRadiusValue={30}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{height: '30%', }}>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{'Live'}</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('LiveScreen')}>
              <View style={styles.seeAllButtonView}>
                <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 12}}>
                  {'See All'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/MaskGroup4.png')}
                style={{
                  height: 150,
                  width: 120,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: '#FF3300',
                      borderRadius: 20,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text style={{color: '#FFF', fontSize: 12}}>{'Live'}</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/MaskGroup4.png')}
                style={{
                  height: 150,
                  width: 120,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: '#FF3300',
                      borderRadius: 20,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text style={{color: '#FFF', fontSize: 12}}>{'Live'}</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground
                source={require('../assets/MaskGroup4.png')}
                style={{
                  height: 150,
                  width: 120,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: '#FF3300',
                      borderRadius: 20,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text style={{color: '#FFF', fontSize: 12}}>{'Live'}</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </TouchableOpacity>
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
                elevation:1,
                borderWidth:0,
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
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  seeAllButtonView: {
    height: 25,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#FD941E',
    alignItems: 'center',
    justifyContent: 'center',
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
