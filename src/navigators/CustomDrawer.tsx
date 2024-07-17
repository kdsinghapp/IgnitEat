// components/CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { image } from '../config/utils/images';
import { withDecay } from 'react-native-reanimated';
import { colors } from '../config/utils/colors';
import RightIcon from '../assets/svg/right.svg';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../routes/screenName.enum';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={{width:'70%',alignItems:'center'}}>

        <Image source={image.appLogo} style={{height:140,width:140,marginLeft:60}}  
        
        resizeMode='contain' />
        </View>
        <TouchableOpacity 
          onPress={()=>{
            navigation.navigate(ScreenNameEnum.NOTIFICATION)
          }}
        style={styles.notificationButton}>
        <Image source={image.bell} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.credits}>Credits: 500</Text>
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Profile)
        }}
        style={styles.profile}>
          <Image source={image.dp} style={styles.profileImage} />
          <Text style={styles.profileName}>Zaire Vetrovs</Text>
          
        </TouchableOpacity>
      </View>
      <View style={styles.aboutContainer}>
     
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate(ScreenNameEnum.Subscription)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.subscription} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Subscription</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Personal_preferences)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.Personal} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Personal preferences</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.aboutItem,]}>
          <Image  source={image.changepass} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>create cookbook</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.RingtoneMenu)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.bell2} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Timer ringtone</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Change_Username)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.Username} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Change Username</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Change_Password)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.passord} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Change Password</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity 
           onPress={()=>{
            navigation.navigate(ScreenNameEnum.ShareHackAplate)
          }}
        style={[styles.aboutItem,]}>
          <Image  source={image.shareApp} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Share Hackaplate with friends</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Privacy_Settings)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.PrivacySettings} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Privacy Settings</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
    
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutHeader}>About</Text>
    
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Termsconditions)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.term} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Terms And Conditions</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.Privacypolicy)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.term} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Privacy Policy</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.FrequentlyQuestions)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.term} style={{height:35,width:35}} />
          <Text style={styles.aboutText}>Frequently Asked Questions</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate(ScreenNameEnum.LOGIN_SCREEN)
        }}
        style={[styles.aboutItem,]}>
          <Image  source={image.Username} style={{height:35,width:35}} />
          <Text style={[styles.aboutText,{color:'red'}]}>Log Out</Text>
          <RightIcon height={30}  />
        </TouchableOpacity>
        <View  style={{height:60}}/>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:0,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:0,
 
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  notificationButton: {
    padding: 5,
    borderRadius: 15,
   
  },
  notificationIcon: {
    color: '#fff',
    fontSize: 20,
  },
  profileContainer: {
    paddingHorizontal: 20,
  },
  credits: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:colors.txtColor,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginTop:10
  },
  aboutHeader: {
    fontSize: 16,
    fontWeight: '800',
    color: '#333',
    marginBottom: 10,
  },
  aboutItem: {
  
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
marginVertical:7
  },
  aboutText: {
    width:'65%',
    fontSize: 14,
    color:colors.txtColor,
    fontWeight:'700'
  },
});

export default CustomDrawerContent;
