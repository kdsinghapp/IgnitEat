
  import React, { useEffect } from 'react';
  import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { image } from '../../config/utils/images';
import { colors, marginTop } from '../../config/utils/utils';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { get_privacy_policy } from '../../redux/feature/featuresSlice';
import Loading from '../../config/Loader';
import WebView from 'react-native-webview';
  
  const PrivacyPolicy = () => {
    const navigation = useNavigation()
    const isFocuse = useIsFocused()
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.feature.isLoading);
    const Priacypolicy = useSelector(state => state.feature.Priacypolicy);
    useEffect(() => {
      dispatch(get_privacy_policy())
    }, [isFocuse])
  console.log('Priacypolicy',Priacypolicy?.content_description);
  
    const generateHtmlContent = content => `
    <!DOCTYPE html>
    <html>
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Federo&display=swap" rel="stylesheet">
      <style>
        body {
          
          font-size:24px;
          color: #000;
        }
      </style>
    </head>
    <body>
      ${content}
    </body>
    </html>
  `;
  
    return (
      <View style={styles.container}>
{isLoading?<Loading />:null}
<View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
    </View>
        
        <Text style={styles.title}>Privacy Policy</Text>
          <Image
            source={image.PrivacyPolicy} // Replace with your image URL
            style={styles.image}
          />
       
       <View style={styles.section}>
          {Priacypolicy && Priacypolicy?.content_description && (
            <WebView
            showsVerticalScrollIndicator={false}
              source={{ html: generateHtmlContent(Priacypolicy?.content_description) }}
            />
          )}
        </View>

      </View>
    );
  };
  
  const styles = StyleSheet.create({
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
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color:'#000',
      marginVertical:20
    },
    scrollView: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: 150,
      marginBottom: 20,
      resizeMode: 'contain',
    },
    section: {
      marginBottom: 20,
flex:1
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color:'#000'
    },
    sectionContent: {
      fontSize: 14,
      color: '#000',
      lineHeight: 22,
      fontWeight:'500'
    },
  });
  
  export default PrivacyPolicy;
  