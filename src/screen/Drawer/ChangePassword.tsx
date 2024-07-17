
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView, Platform, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';


import { useDispatch, useSelector } from 'react-redux';
import TextInputField from '../../config/TextInput';
import { image } from '../../config/utils/images';
import { colors } from '../../config/utils/colors';
import ScreenNameEnum from '../../routes/screenName.enum';
import { change_password } from '../../redux/feature/authSlice';
import Loading from '../../config/Loader';
import { errorToast } from '../../config/customToast';




export default function ChangePassword() {

console.log('user?.email',user?.email);


  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [oldpassword, setOldPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();
  const isLoading = useSelector(state => state.auth.isLoading);
  const user = useSelector(state => state.auth.User);
  const dispatch = useDispatch()
  const handlePassText = value => {
    setPassword(value);
  };
  const handleCPassText = value => {
    setConfirmPassword(value);
  };


  console.log('user',user);
  
  const validatePassword = password => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);
  };





  const password_change = () => {

    if (!ChangePassword || !oldpassword || !password) {

      errorToast('Please fill in all required fields');
      return;
    }

    if (password !== ConfirmPassword) {

      errorToast('Password and Confirm Password do not match. Please re-enter.');
      return;
    }
    if (!validatePassword(password)) {
      errorToast(

        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    const params = {
      email: user?.email,
      old_password: oldpassword,
      password: password,
      confirm_password: ConfirmPassword

    }
    dispatch(change_password(params))
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>

      {isLoading ? <Loading /> : null}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1 }}>
        {Platform.OS === 'ios' ? (
          <View style={{ height: 68 }} />
        ) : (
          <View style={{ height: 10 }} />
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={image.Goback}
            style={{ height: 32, width: 32 }}
          />
        </TouchableOpacity>
        <View style={{ marginTop: 15 }}>
          <View style={{ height: hp(9) }}>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: '#000000',
                  lineHeight: 36,
                }}>Change Password
              </Text>
            </View>
            <View style={{ width: '85%', }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#9DB2BF',
                  lineHeight: 24,
                }}>
                Your new password must be different from previous used passwords.
              </Text>
            </View>
          </View>

          <View style={{ marginTop: hp(6), }}>
            <View style={[styles.inputContainer, { marginTop: 10, paddingRight: 20 }]}>
              <Image
                resizeMode='contain'
                source={image.Lock}
                style={styles.icon}
              />
              <TextInputField placeholder={'Old Password'} value={oldpassword}
                onChangeText={setOldPassword} />
              <TouchableOpacity>
                <Image
                  resizeMode='contain'
                  source={image.eye}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.inputContainer, { marginTop: 10, paddingRight: 20 }]}>
              <Image
                resizeMode='contain'
                source={image.Lock}
                style={styles.icon}
              />
              <TextInputField placeholder={'Password'}

                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity>
                <Image
                  resizeMode='contain'
                  source={image.eye}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.inputContainer, { marginTop: 10, paddingRight: 20 }]}>
              <Image
                resizeMode='contain'
                source={image.Lock}
                style={styles.icon}
              />
              <TextInputField placeholder={'Confirm Password'}

                value={ConfirmPassword}
                onChangeText={setConfirmPassword} />
              <TouchableOpacity>
                <Image
                  resizeMode='contain'
                  source={image.eye}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View   style={{height:hp(22)}} />
   
      <TouchableOpacity

        onPress={() => {
          password_change()

        }}
        style={styles.submitButton}>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 25.5,
            fontWeight: '600',
            color: '#FFFFFF',
          }}>
          Save
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: hp(6),
    marginTop: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  submitButton: {
    backgroundColor: colors.btnColor,
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})