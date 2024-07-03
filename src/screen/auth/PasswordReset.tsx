
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




export default function PasswordReset() {



  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch()
  const handlePassText = value => {
    setPassword(value);
  };
  const handleCPassText = value => {
    setConfirmPassword(value);
  };

  const validatePassword = password => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password);
  };


  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>


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
                }}>Create New Password
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
          <View style={[styles.inputContainer, { marginTop: 10,paddingRight:20 }]}>
                <Image
                    resizeMode='contain'
                    source={image.Lock} 
                    style={styles.icon} 
                />
                <TextInputField placeholder={'Password'} />
                <TouchableOpacity>
                    <Image
                        resizeMode='contain'
                        source={image.eye} 
                        style={styles.icon} 
                    />
                </TouchableOpacity>
            </View>
          <View style={[styles.inputContainer, { marginTop: 10,paddingRight:20 }]}>
                <Image
                    resizeMode='contain'
                    source={image.Lock} 
                    style={styles.icon} 
                />
                <TextInputField placeholder={'Confirm Password'} />
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
        <View style={{ height: hp(5), paddingHorizontal: 5 }}>
          {error != '' && <Text style={{ fontSize: 12, color: 'red', fontWeight: '400' }}>{error}</Text>}
        </View>

      </ScrollView>
      <TouchableOpacity

        onPress={() => {
          navigation.navigate(ScreenNameEnum.BOTTOM_TAB)

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