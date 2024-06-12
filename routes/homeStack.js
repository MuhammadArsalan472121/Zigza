import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LoginScreen from '../screens/loginScreen';
import ForgotPassword from '../screens/forgotPasswordScreen';
import VerifyScreen from '../screens/verifyScreen';
import ResetPasswordScreen from '../screens/resetPasswordScreen';
import SignupScreen from '../screens/signupScreen';
import NotificationFScreen from '../screens/notificationFollowingScreen';
import NotificationScreen from '../screens/notificationScreen';
import NotificationCScreen from '../screens/notificationCommentScreen';
import MyProfileScreen from '../screens/myProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import EditProfileScreen from '../screens/editProfileScreen';
import ManageCardScreen from '../screens/manageCardScreen';
import Wallet from '../screens/walletScreen';
import HomeScreen from '../screens/homeScreen';
import DiscoverScreen from '../screens/discoverScreen';
import NearByScreen from '../screens/nearByScreen';
import MyFollowingScreen from '../screens/myFollowingScreen';
import LiveScreen from '../screens/liveScreen';
import WelcomeLogin from '../screens/welcomeLogin';
import StartCam from '../components/startCam';
const screens = {

  LoginScreen: {
    screen: LoginScreen,
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: true,
      headerTitle: () => false,
    },
  },
  VerifyScreen: {
    screen: VerifyScreen,
    navigationOptions: {
      headerShown: true,
      headerTitle: () => false,
    },
  },
  ResetPasswordScreen: {
    screen: ResetPasswordScreen,
    navigationOptions: {
      headerShown: true,
      headerTitle: () => false,
    },
  },
  SignupScreen: {
    screen: SignupScreen,
  },
  // NotificationFScreen: {
  //   screen: NotificationFScreen,
  // },
  NotificationScreen: {
    screen: NotificationScreen,
  },
  // NotificationCScreen: {
  //   screen: NotificationCScreen,
  // },
  MyProfileScreen: {
    screen: MyProfileScreen,
  },
  SettingScreen: {
    screen: SettingScreen,
  },
  EditProfileScreen: {
    screen: EditProfileScreen,
  },
  ManageCardScreen: {
    screen: ManageCardScreen,
  },
  Wallet: {
    screen: Wallet,
    navigationOptions: {
      headerShown: true,
      headerTitleStyle: {
        color: '#FD941E',
      },
    },
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  DiscoverScreen: {
    screen: DiscoverScreen,
  },
  NearByScreen: {
    screen: NearByScreen,
  },
  MyFollowingScreen: {
    screen: MyFollowingScreen,
  },
  LiveScreen: {
    screen: LiveScreen,
  },
  
  StartCam: {
    screen: StartCam,
  },
  WelcomeLogin: {
    screen: WelcomeLogin,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#111',
    headerShown: false,

    // headerStyle: {backgroundColor: '#0090FF'},
  },
});

export default createAppContainer(HomeStack);
