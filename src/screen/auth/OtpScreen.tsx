import {View, Text, Image, TouchableOpacity, Platform, StyleSheet,ScrollView} from 'react-native';
import React ,{useState}from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from
    'react-native-confirmation-code-field';
import { useDispatch, useSelector } from 'react-redux';
import { image } from '../../config/utils/images';
import { colors } from '../../config/utils/colors';
import ScreenNameEnum from '../../routes/screenName.enum';

export default function OtpScreen({}) {

const isLoading = useSelector(state => state.auth.isLoading);

  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount:4});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const dispatch = useDispatch();





  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: '#fff'}}>
   
      {Platform.OS === 'ios' ?<View style={{height: 68}} />: <View style={{height:10}} />}
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={image.Goback}
          style={{height: 32, width: 32}}
        />
      </TouchableOpacity>
      <View style={{height: hp(15), marginTop: 5}}>
        <View style={{marginTop: 25}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize:22,
              lineHeight: 24,
              color: '#000000',
            }}>
          Please check your email for a confirmation password key
          </Text>
        </View>
        <View style={{marginTop: 5}}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 24,
              color: '#9DB2BF',
            }}>
     Please enter the 4 digit code
          </Text>
        </View>
      </View>
     <View
   style={{height:hp(10),width:'50%',marginTop:20}} >
       <CodeField
        ref={ref}
        {...props}
     
        value={value}
        onChangeText={setValue}
        cellCount={4}
        rootStyle={{}}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View style={{backgroundColor:'#E9E9E9',borderRadius:15,}}>


          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
          </View>
        )}
      />
    </View>
    <View style={{alignItems:'center',justifyContent:'center',height:hp(30)}}>
<Image   source={image.otp} 
resizeMode='contain'
style={{height:'80%',width:'80%'}}/>
</View>
</ScrollView>
      <TouchableOpacity

onPress={()=>{
navigation.navigate(ScreenNameEnum.PASSWORD_RESET)

}}
style={styles.submitButton}>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 25.5,
            fontWeight: '600',
            color: '#FFFFFF',
          }}>
          Submit
        </Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
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

  codeFieldRoot: {marginTop: 20,},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#E9E9E9',
    textAlign: 'center',
    borderRadius:10,
   // backgroundColor:'#E9E9E9',
    
  },
  focusCell: {
    borderColor: '#6D6EEC',
    borderRadius:10,
   
  },
});



