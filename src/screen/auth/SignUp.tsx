import { View, Text, Image, Platform, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TextInputField from '../../config/TextInput'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { image } from '../../config/utils/images';
import { colors, marginTop } from '../../config/utils/utils';
import CheckBox from 'react-native-check-box'
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';
import TermsAndConditionsModal from '../modals/TermConditionmodal';
import PrivacyPolicyModal from '../modals/PrivacyModal';
import { errorToast } from '../../config/customToast';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/feature/authSlice';
import Loading from '../../config/Loader';
export default function SignUp() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const navigation = useNavigation()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCPassword] = useState('');
    const [TermModal, setTermModal] = useState(false);
    const [PrivacyModal, setPrivacyModal] = useState(false);
    const [ReadTerm, setReadTerm] = useState(false);
    const [ReadPrivacy, setReadPrivacy] = useState(false);
    const isLoading = useSelector(state => state.auth.isLoading);
    const validateEmail = (email) => {
        // Regular expression for basic email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(email);
    };
    const validatePassword = (password) => {
        // Password must be at least 8 characters long
        // Must contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;
        return regex.test(password);
    };

    const dispatch = useDispatch()
    const handleSignUp = () => {
        if (!firstName || !lastName || !email || !password) {

            errorToast('Please fill in all required fields');
            return;
        }
        if (!isChecked) {
            errorToast('You must accept terms and conditions or privacy policy to proceed.')
        }
        if (password !== Cpassword) {

            errorToast('Password and Confirm Password do not match. Please re-enter.');
            return;
        }
        if (!validatePassword(password)) {
            errorToast(

                'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
            );
            return;
        }

        if (!validateEmail(email)) {

            errorToast('Please enter a valid email address.');
            return;
        }
if(!ReadPrivacy || !ReadTerm){
    errorToast('Please read privacy policy or terms and conditions.');
    return;
}
        const params = {
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                confirm_password:Cpassword

            },
            navigation: navigation
        }

        dispatch(register(params))


    };

    return (
        <View style={styles.container}>
            {isLoading?<Loading />:null}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Image
                        resizeMode='contain'
                        source={image.appLogo}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.loginText}>Sign Up</Text>
                    <Text style={styles.subText}>Let`s get started by creating your account</Text>
                </View>
                <View style={[styles.inputContainer, { marginTop: 40, }]}>
                <Image resizeMode='contain' source={image.user} style={styles.icon} />
                    <TextInputField
                        placeholder={'First Name'}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 20, }]}>
                <Image resizeMode='contain' source={image.user} style={styles.icon} />
                    <TextInputField
                        placeholder={'Last Name'}
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 20, }]}>
                <Image resizeMode='contain' source={image.email} style={styles.icon} />
                    <TextInputField
                        placeholder={'Email Address'}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 20, paddingRight: 20 }]}>
                    <Image resizeMode='contain' source={image.Lock} style={styles.icon} />
                    <TextInputField
                        placeholder={'Password'}
                        hide={true}
                        value={password}
                        onChangeText={setPassword}
                        showEye={true}
                    />

                </View>
                <View style={[styles.inputContainer, { marginTop: 20, paddingRight: 20 }]}>
                    <Image resizeMode='contain' source={image.Lock} style={styles.icon} />
                    <TextInputField
                        placeholder={'Confirm Password'}
                        hide={true}
                        value={Cpassword}
                        onChangeText={setCPassword}
                        showEye={true}
                    />

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', height: 40,
                    marginHorizontal: 20, marginTop: 20
                }}>
                    <View>

                        <CheckBox
                            isChecked={isChecked}
                            onClick={handleCheck}
                            checkBoxColor={colors.txtColor}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', height: 40, marginTop: 13 }}>
                        <View style={styles.forgotPasswordButton}>
                            <Text style={[styles.forgotPasswordText, { color: '#575757' }]}>i agree to HackAplate</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setTermModal(true)
                                }}
                            >
                                <Text style={[styles.forgotPasswordText, { marginLeft: 5 }]}>Term & conditions</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.forgotPasswordButton}>
                            <Text style={[styles.forgotPasswordText, { color: '#575757' }]}>and</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setPrivacyModal(true)
                                }}
                            >
                                <Text style={[styles.forgotPasswordText, { marginLeft: 5 }]}>privacy & Policy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        handleSignUp()
                    }}
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>SignUp</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Alrady have an account?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ScreenNameEnum.LOGIN_SCREEN)

                        }}
                        style={styles.signupButton}>
                        <Text style={styles.signupButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.googleButton}>

                    <Text style={styles.googleButtonText}>Skip For Now</Text>
                </TouchableOpacity>
            </ScrollView>
            <TermsAndConditionsModal modalVisible={TermModal} setModalVisible={() => setTermModal(false)}   readTermCon={()=>setReadTerm(true)}/>
            <PrivacyPolicyModal modalVisible={PrivacyModal} setModalVisible={() => setPrivacyModal(false)} readPrivacy={()=>setReadPrivacy(true)} />
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


        flexDirection: 'row',
        marginLeft: 10

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
        fontWeight: '700',
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
        fontWeight: '700',
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
        marginTop: 30,


        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',


    },
    googleIcon: {
        height: 25,
        width: 25,
    },
    googleButtonText: {
        color: colors.txtColor,
        marginLeft: 10,
        fontWeight: '800',
        fontSize: 14,
    },
});
