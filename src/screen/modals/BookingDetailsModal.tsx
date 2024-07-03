
    import React, { useState } from 'react';
    import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
    import { colors } from '../../config/utils/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { image } from '../../config/utils/images';
import ShareListModal from './ShareListModal';
import CookBookEditName from './CookBooknameModal';
import CookBookDelete from './DeleteCookBookModal';
    
    const BookingDetailsModal = ({ modalVisible, setModalVisible }) => {
    const [shareModal,setShareModal] = useState(false)
  
    const [EditModal,setEditModal] = useState(false)
  
    const [DeleteModal,setDeleteModal] = useState(false)
  
    
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity 
          onPress={()=>{
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredView}>
            <View style={styles.modalView}>
             <TouchableOpacity
             onPress={()=>{
                setShareModal(true)
               
             }}
             >
                <Image source={image.share2} style={{height:30,width:30}} />
             </TouchableOpacity>
             <TouchableOpacity 
             onPress={()=>{
                setEditModal(true)
             }}
             >
                <Image source={image.CircleEdit} style={{height:30,width:30}} />
             </TouchableOpacity>
             <TouchableOpacity
              onPress={()=>{
                setDeleteModal(true)
               
             }}
             >
                <Image source={image.delete} style={{height:30,width:30}} />
             </TouchableOpacity>
    
    <ShareListModal  modalVisible={shareModal}  setModalVisible={()=>{ setShareModal(false)}}  />
    <CookBookEditName   modalVisible={EditModal}  setModalVisible={()=>{ setEditModal(false)}}  />
              
    <CookBookDelete   modalVisible={DeleteModal}  setModalVisible={()=>{ setDeleteModal(false)}}  />
              
            </View>
          </TouchableOpacity>
        </Modal>
      );
    };
    
    const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalView: {
        width: '40%',
        height: '6%',
        flexDirection:'row',
justifyContent:'space-between',
        backgroundColor: 'white',
        borderRadius:30,
        padding: 20,
        position:'absolute',
        top:hp(20),
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
      text: {
        fontSize: 16,
        lineHeight: 24,
      },
      button: {
        backgroundColor: colors.btnColor,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginLeft: 10,
        marginTop: 10,
        width: '90%'
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      skipButton: {
        marginTop: 30,
        height: 20,
      },
      skipButtonText: {
        color: colors.btnColor,
        fontWeight: 'bold',
      },
    });
    
    export default BookingDetailsModal;
    