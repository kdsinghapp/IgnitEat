import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
import RightIcon from '../../assets/svg/right.svg';
import ScreenNameEnum from '../../routes/screenName.enum';
const Profile = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={image.back} style={styles.logo} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Hack Aplate</Text>
                <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
            </View>
            
             <Text style={{alignSelf:'center',fontWeight:'700',color:'#000',fontSize:18,marginTop:20}}>Edit Profile Photo</Text>
            
            <View style={{
                alignSelf:'center',marginTop:30,backgroundColor:'#C8DBCE',
                borderRadius:60,height:120,width:120,borderWidth:5,borderColor:colors.txtColor}}>

            </View>
            <View style={{position:'absolute',bottom:20,alignSelf:'center',}}>
            <TouchableOpacity
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Personal_preferences)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.camera} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Take Photo</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
            <TouchableOpacity
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Personal_preferences)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.gallery} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Choose Photo</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
            <TouchableOpacity
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Personal_preferences)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.delete} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Delete Photo</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        </View>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: marginTop,
    },
    logo: {
        width: 30,
        height: 30,
    },
    headerText: {
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'anaktoria',
        color: colors.txtColor,
        marginLeft: 20,
    },
    menuIcon: {
        width: 50,
        height: 40,
    },
    aboutItem: {
  width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    marginVertical:7
    ,marginTop:20
      },
      aboutText: {
        width:'80%',
        fontSize: 14,
        color:colors.txtColor,
        fontWeight:'700'
      },
});

export default Profile;
