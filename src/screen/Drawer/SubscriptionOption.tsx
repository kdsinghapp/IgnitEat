
    import React from 'react';
    import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
    import { colors } from '../../config/utils/colors';
    import { image, marginTop } from '../../config/utils/utils';
    import { useNavigation } from '@react-navigation/native';
    
    const SubscriptionOption = () => {
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
        <ScrollView contentContainerStyle={{flex:1,   padding: 20,}}>
          <Text style={styles.heading}>Subscription Options</Text>
          <Text style={styles.planTitle}>Premium upgrade</Text>
          <View style={styles.card}>
        
            <Text style={styles.planDescription}>Generate recipes from text</Text>
            <Text style={styles.planDescription}>100 credit per month</Text>
           
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Upgrade to Premium </Text>
            </TouchableOpacity>

          </View>
          <Text style={styles.planTitle}>Premium+ upgrade</Text>
          <View style={styles.card}>
           
          <Text style={styles.planDescription}>Generate recipes from text, image and voice 130 credit per month</Text>

            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Upgrade to Premium +</Text>
            </TouchableOpacity>
      
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
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
        alignSelf: 'center',
      },
      card: {
        backgroundColor: '#D4FFD8',
        padding:20,
        borderRadius:20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      planTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004d00',
        marginBottom: 5,
      },
      planDescription: {
        fontSize:14,
        color: '#000',
       fontWeight:'500'
      },
      planPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004d00',
        marginBottom: 15,
      },
      planDuration: {
        fontSize: 16,
        fontWeight: 'normal',
      },
      subscribeButton: {
        backgroundColor:colors.btnColor,
        paddingVertical:14,
        borderRadius:10,
        alignItems: 'center',
        marginBottom: 10,
        marginTop:20
      },
      subscribeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight:'500'
      },
      planCredits: {
        fontSize: 14,
        color: '#000',
        fontWeight:'500'
      },
    });
    
    export default SubscriptionOption;
    