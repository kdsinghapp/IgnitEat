import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import { image } from '../../config/utils/images';
import { colors } from '../../config/utils/colors';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

interface SplashScreenProps {

}

const SplashScreen: React.FC<SplashScreenProps> = (props) => {


  const navigation = useNavigation();
  const isLogOut = useSelector((state) => state.auth.isLogOut);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isFoucs = useIsFocused();

  const checkLogout = () => {
    console.log('================checkLogout===========isLogOut=========', isLogOut);
    console.log('================checkLogout===========isLogin=========', isLogin);
    if (!isLogOut && !isLogin || isLogOut && !isLogin) {
      console.log('================Login====================');
      navigation.navigate(ScreenNameEnum.LOGIN_SCREEN);
    }
    if (!isLogOut && isLogin) {
      console.log('================HomeTab====================');
      navigation.navigate(ScreenNameEnum.MainDrawer);
    }
  }



  useEffect(() => {
    checkLogout();
  }, [isFoucs, isLogOut]);


  return (
    <View style={styles.container}>
      <Image
        source={image.appLogo}
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height:hp(20),
    width:wp(100),
  },
});

export default SplashScreen;
