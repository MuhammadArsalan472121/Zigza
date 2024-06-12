import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

const listTab = [
  {
    status: 'Following',
    iconName: require('../assets/IconAddPerson.png'),
    iconBgColor: '#FD941E',
  },
  {
    status: 'Likes',
    iconName: require('../assets/IconHeart.png'),
    iconBgColor: '#FF0000',
  },
  {
    status: 'Comments',
    iconName: require('../assets/IconComment.png'),
    iconBgColor: '#9000FF',
  },
];

const data = [
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  {    name: '@devmusama',    status: 'Likes',  },
  
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  {    name: '@devmusama',    status: 'Comments',  },
  
];

const notificationScreen = ({navigation}) => {
  const [status, setStatus] = useState('Following');
  const [datalist, setDatalist] = useState(data);

  const setStatusFilter = status => {
    if (status !== 'Following') {
      //likes and comments check
      setDatalist([...data.filter(e => e.status === status)]);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.ItemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            source={require('../assets/profileLogo.png')}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDetails}>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit mattis
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 10,paddingHorizontal: 10,}}>
        <Text
          style={{
            fontSize: 20,
            color: '#FD941E',
            fontWeight: '500',
          }}>
          Notification
        </Text>
      </View>
      <View style={styles.listTab}>
        {listTab.map(e => (
          <TouchableOpacity
            style={styles.btnTab}
            onPress={() => setStatusFilter(e.status)}>
            <View
              style={{
                backgroundColor: e.iconBgColor,
                width: 50,
                height: 50,
                marginBottom: 20,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={e.iconName} />
            </View>
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          width:'100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderWidth: 0,
          elevation: 1,
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
          <IconIi name={'notifications-outline'} size={25} color={'#FD941E'} />
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
};
export default notificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    borderColor: '#111',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTab: {
    fontSize: 16,
    fontWeight: '500',
  },
  textTabActive: {
    color: '#FD941E',
  },
  ItemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
    width: '100%',
  },
  itemLogo: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemDetails: {
    fontSize: 16,
  },
  itemStatus: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 6,
    justifyContent: 'center',
    right: 12,
  },
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
});
