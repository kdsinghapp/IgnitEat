
// screens/ShareScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { image } from '../../config/utils/images';
import { colors, marginTop } from '../../config/utils/utils';
import { useNavigation } from '@react-navigation/native';
import ScreenNameEnum from '../../routes/screenName.enum';

const ShareHackAplate = () => {
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
    <ScrollView contentContainerStyle={{flex:1,padding:20}}>
      <Text style={styles.heading}>Share Hackaplate With Friends</Text>
      <Text style={styles.greeting}>Hi JohnSmith1</Text>
      <View style={styles.card}>

        <Text style={styles.description}>
          Do you love creating delicious recipes with HackAplate? Now you can share that joy with your friends and earn rewards!
        </Text>
        <Text style={styles.description}>
          For every friend you invite who signs up for one of our monthly subscription plans, you’ll earn extra credits to use in the app. It’s a win-win.
        </Text>
        
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate(ScreenNameEnum.ShareMessage)
        }}
        style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share with friends</Text>
        </TouchableOpacity>
        
        <Text style={styles.howItWorksHeader}>Here’s how it works:</Text>
        <Text style={styles.howItWorksItem}>1. Share your unique referral link with friends and family.</Text>
        <Text style={styles.howItWorksItem}>2. Your friend signs up for a monthly subscription plan.</Text>
        <Text style={styles.howItWorksItem}>3. You both earn credits once they complete their first month.</Text>
        <Text style={styles.creditsInfo}>Earn 5 credits for each successful referral.</Text>
        <Text style={styles.finalNote}>Spread the love for Hackaplate and start earning today!</Text>
        <Text style={styles.signature}>Happy Cooking!</Text>
      </View>
      
    </ScrollView>
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
  heading: {
    fontSize:20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
    alignSelf: 'center',
    
  },
  card: {
    backgroundColor: '#D4FFD8',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#004d00',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    fontWeight:'500'
  },
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
  howItWorksHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  howItWorksItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    fontWeight:'500'
  },
  creditsInfo: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  finalNote: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  signature: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
   
    marginTop: 20,
  },
});

export default ShareHackAplate;
