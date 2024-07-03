
  
  import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';
import TextInputField from '../../config/TextInput';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlackClose from '../../assets/svg/BlackClose.svg';

const MealPlanModal = ({ modalVisible, setModalVisible }) => {

    const handleAccept = () => {
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
                <View style={styles.modalView}>
                <TouchableOpacity style={styles.closeButton} onPress={handleAccept}>
                        <BlackClose />
                    </TouchableOpacity>
<View style={{width:'70%'}}>

                    <Text style={styles.text}>Classic Eggs Benedict: poached eggs on a toasted English muffin with Canadian bacon, topped with creamy hollandaise sauce</Text>
</View>
                    
             
                    <TouchableOpacity style={[styles.button, ]} onPress={handleAccept}>
                        <Text style={styles.buttonText}>Show recipe-</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        height: hp(6),
        marginTop: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
       
      width:'90%',
        backgroundColor: 'white',

    
       borderRadius:30,
        paddingVertical: 20,
     paddingHorizontal:15,
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
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '700',
        color: '#000',
    },
    button: {
        borderRadius: 10,
       
        padding: 15,
        marginTop: 10,
        width: '90%',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    addButtonImage: {
        height: 30,
        width: 30,
    },
    addButtonText: {
        marginLeft: 20,
        color: colors.btnColor,
    },
 
    buttonText: {
        color: colors.txtColor,
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 20,
        marginTop: 20,
    },
});

export default MealPlanModal;
