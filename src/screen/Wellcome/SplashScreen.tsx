import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import { image } from '../../config/utils/images';
import { colors } from '../../config/utils/colors';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface SplashScreenProps {

}

const SplashScreen: React.FC<SplashScreenProps> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ScreenNameEnum.LOGIN_SCREEN); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

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
