import React from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity, Image} from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors, marginTop } from '../../config/utils/utils';

const ShareMessage = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
    </View>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Share HackAplate With Friends</Text>
      
      <Text style={styles.subHeader}>The Message To The Friends</Text>

      <Text style={styles.title}>Join Me on HackAplate!</Text>

      <Text style={styles.message}>
        I've been using this amazing app called HackAplate to create delicious recipes, and I think you'll love it too! It's been a game-changer for my cooking and I want to share it with you.
      </Text>

      <Text style={styles.message}>
        As a special treat, you can use my referral code [User's Personal Token] to get a 5 credits bonus when you sign up for one of their monthly subscription plans.
      </Text>

      <Text style={styles.link}>[link to the appstore]</Text>

      <Text style={styles.message}>
        Here's what you'll get with HackAplate:
      </Text>

      <Text style={styles.bulletPoint}>
        • Recipe suggestions based on your ingredients list, image-based recipe suggestions, personalized meal planning, a cookbook to share and save your recipes, grocery lists, and recipe generation for any dish you like.
      </Text>
    </ScrollView>
    <TouchableOpacity
        onPress={()=>{
    
        }}
        style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    shareButton: {
        backgroundColor: '#004d00',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
      },
      shareButtonText: {
        color: '#fff',
        fontSize: 18,
      },
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
    heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'#000'
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 20,
  },
  title: {
    fontSize:18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
  link: {
    fontSize: 16,
    color: '#006400',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default ShareMessage;
