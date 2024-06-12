import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import InputField from '../components/inputFieldComponent';
import NearBy from '../components/roundImageComponent';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function nearByScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <KeyboardAwareScrollView>
        <View stye={styles.container}>
          <View>
            <InputField
              IconNameValue={'search'}
              IconColorValue={'#333'}
              PlaceHolderValue={'Search'}
              PlaceholderTextColorValue={'#000'}
              BackgroundColorValue={'#DDDDDD'}
              WidthValue={'90%'}
              HeightValue={50}
            />
          </View>

          <View style={styles.textView}>
            <Text style={{fontSize: 22, fontWeight: '500'}}>Near By</Text>
          </View>

          <View style={styles.contentView}>
            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/maria.png')}
                  TextValue={'Maria'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/alexis.png')}
                  TextValue={'alexis'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/jordan.png')}
                  TextValue={'jordan'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/Ines.png')}
                  TextValue={'Ines'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/kevin.png')}
                  TextValue={'Kevin'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/sarah.png')}
                  TextValue={'sarah'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/maria.png')}
                  TextValue={'Maria'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/alexis.png')}
                  TextValue={'alexis'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/jordan.png')}
                  TextValue={'jordan'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/Ines.png')}
                  TextValue={'Ines'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/kevin.png')}
                  TextValue={'Kevin'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/sarah.png')}
                  TextValue={'sarah'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/maria.png')}
                  TextValue={'Maria'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/alexis.png')}
                  TextValue={'alexis'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/jordan.png')}
                  TextValue={'jordan'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.contentSubView}>
              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/Ines.png')}
                  TextValue={'Ines'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/kevin.png')}
                  TextValue={'Kevin'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <NearBy
                  ImageSource={require('../assets/sarah.png')}
                  TextValue={'sarah'}
                  FontSizeValue={18}
                  RoundImageHeightValue={80}
                  RoundImageWidthValue={80}
                />
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
