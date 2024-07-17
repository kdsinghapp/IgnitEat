import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import TextInputField from '../../config/TextInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { image } from '../../config/utils/images';
import { colors, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import { errorToast } from '../../config/customToast';
import { useDispatch, useSelector } from 'react-redux';
import { send_password } from '../../redux/feature/authSlice';
import Loading from '../../config/Loader';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
    
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.auth.isLoading);
    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);
    };
    const send_email_password = () => {
        if (!email) {

            errorToast('Please fill in all required fields');
            return;
        }



        if (!validateEmail(email)) {

            errorToast('Please enter a valid email address.');
            return;
        }

        const params = {
            data: {

                email: email,
                


            },
            navigation: navigation
        }

        dispatch(send_password(params))


    };

  
  return (
    <View style={styles.container}>
      {isLoading?<Loading />:null}
      <ScrollView>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={image.Goback} style={styles.goBackImage} />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Password Reset</Text>
        </View>
        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerSubtitle}>Please enter your email to reset your password</Text>
        </View>
      </View>

      <View style={styles.tab}>
        <View style={styles.tabImageContainer}>
          <Image source={image.Gemail} style={styles.tabImage} resizeMode="contain" />
        </View>
        <View style={styles.tabInputContainer}>
          <View>
            <Text style={styles.tabInputLabel}>Email</Text>
          </View>
          <View style={{}}> 
            <TextInput
              style={styles.tabInputField}
              placeholder="Enter email"
              onChangeText={(txt) => setEmail(txt)}
              value={email}
            />
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={image.lp} resizeMode="contain" style={styles.image} />
      </View>
<View   style={{height:hp(22)}} />

      <TouchableOpacity
        onPress={() => {
        send_email_password()
        }}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: marginTop,
  },
  goBackButton: {
    marginHorizontal: 10,
  },
  goBackImage: {
    height: 32,
    width: 32,
  },
  headerContainer: {
    height: hp(15),
    marginTop: 5,
    marginHorizontal: 10,
  },
  headerTextContainer: {
    marginTop: 25,
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 24,
    color: '#000000',
  },
  headerSubtitleContainer: {
    marginTop: 5,
  },
  headerSubtitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#9DB2BF',
  },
  tab: {
    marginHorizontal: 10,
    marginTop: 10,
    height: hp(15),
    padding: 5,
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  tabImageContainer: {
    width: '25%',
    padding: 5,
  },
  tabImage: {
    height: '100%',
    width: '100%',
  },
  tabInputContainer: {
    width: '60%',
    marginLeft: 30,
 
  },
  tabInputLabel: {
    fontSize: 16,
    lineHeight: 19.09,
    fontWeight: '700',
    color: '#000000',
  },
  tabInputField: {
    fontSize: 14,

    fontWeight: '400',
    color: '#000',
    marginTop: 10,
  },
  imageContainer: {
    height: hp(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '80%',
    width: '80%',
  },
  submitButton: {
    backgroundColor: colors.btnColor,
    alignItems: 'center',
    height: 60,
    borderRadius: 10,

 bottom:20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 17,
    lineHeight: 25.5,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
