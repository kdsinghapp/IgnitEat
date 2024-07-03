import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import TextInputField from '../../config/TextInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { image } from '../../config/utils/images';
import { colors, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';

export default function Login() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    resizeMode='contain'
                    source={image.appLogo} 
                    style={styles.logo} 
                />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.subText}>Enter your email and password</Text>
            </View>
            <View style={styles.inputContainer}>
                <Image
                    resizeMode='contain'
                    source={image.email} 
                    style={styles.icon} 
                />
                <TextInputField placeholder={'Email Address'} />
            </View>
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
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate(ScreenNameEnum.FORGOT_PASSWORD)
            }}
            style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot your password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account?</Text>
                <TouchableOpacity 
                
                onPress={()=>{
                    navigation.navigate(ScreenNameEnum.SIGNUP_SCREEN)
                }}
                style={styles.signupButton}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.orContainer}>
                <Text style={styles.orText}>OR</Text>
            </View>
            <TouchableOpacity style={styles.googleButton}>
                <Image source={image.google} style={styles.googleIcon} />
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: marginTop,
    },
    logoContainer: {
        height: hp(20),
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    logo: {
        height: hp(20),
        width: wp(30),
    },
    headerContainer: {
        height: hp(5),
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    loginText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
    },
    subText: {
        fontSize: 14,
        color: '#565656',
        fontWeight: '500',
        marginTop: 20,
    },
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
    forgotPasswordButton: {
        alignSelf: 'center',
        marginTop: 20,
    },
    forgotPasswordText: {
        color: colors.txtColor,
        fontWeight: '500',
    },
    loginButton: {
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: colors.btnColor,
    },
    loginButtonText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 18,
    },
    signupContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    signupText: {
        color: '#777777',
        fontWeight: '500',
    },
    signupButton: {
        alignItems: 'center',
        marginLeft: 5,
    },
    signupButtonText: {
        color: colors.txtColor,
        fontWeight: '500',
    },
    orContainer: {
        height: hp(15),
        alignItems: 'center',
        justifyContent: 'center',
    },
    orText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
    },
    googleButton: {
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    googleIcon: {
        height: 25,
        width: 25,
    },
    googleButtonText: {
        color: '#777777',
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 14,
    },
});
