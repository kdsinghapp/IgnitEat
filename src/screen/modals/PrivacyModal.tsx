import React, { useEffect, useState } from 'react';
import { Modal, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/utils/colors';
import { get_privacy_policy } from '../../redux/feature/featuresSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import WebView from 'react-native-webview';
import Loading from '../../config/Loader';

const PrivacyPolicyModal = ({ modalVisible, setModalVisible ,readPrivacy}) => {
  const navigation = useNavigation()
  const isFocuse = useIsFocused()
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.feature.isLoading);
  const Priacypolicy = useSelector(state => state.feature.Priacypolicy);
  useEffect(() => {
    dispatch(get_privacy_policy())
  }, [isFocuse])


  const generateHtmlContent = content => `
  <!DOCTYPE html>
  <html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Federo&display=swap" rel="stylesheet">
    <style>
      body {
        
        font-size:30px;
        color: #000;
      }
    </style>
  </head>
  <body>
    ${content}
  </body>
  </html>
`;

  const handleAccept = () => {
    readPrivacy()
    setModalVisible(false);
    // Handle acceptance logic
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
      {isLoading?<Loading />:null}
        <View style={styles.modalView}>
          <Text style={styles.title}>Privacy Policy</Text>
          <View style={styles.section}>
          {Priacypolicy && Priacypolicy?.content_description && (
            <WebView
            showsVerticalScrollIndicator={false}
              source={{ html: generateHtmlContent(Priacypolicy?.content_description) }}
            />
          )}
        </View>
           
            <TouchableOpacity style={styles.button} onPress={handleAccept}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
   
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    flex:1,
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#000'
  },
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor:colors.btnColor,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    padding: 15,
    marginLeft: 10,
width:'90%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PrivacyPolicyModal;
