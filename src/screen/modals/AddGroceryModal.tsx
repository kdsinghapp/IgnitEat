import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';
import TextInputField from '../../config/TextInput';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlackClose from '../../assets/svg/BlackClose.svg';

const AddGroceryModal = ({ modalVisible, setModalVisible }) => {

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
                    <Text style={styles.text}>Add To Grocery List</Text>
                    <View style={styles.inputContainer}>
                        <TextInputField placeholder={'List Name'} />
                    </View>
                    <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleAccept}>
                        <Image source={image.Add} style={styles.addButtonImage} />
                        <Text style={[styles.buttonText, styles.addButtonText]}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.createButton]} onPress={handleAccept}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={handleAccept}>
                        <BlackClose />
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
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 20,
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
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '700',
        color: '#000',
    },
    button: {
        borderRadius: 10,
        alignItems: 'center',
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
    createButton: {
        backgroundColor: colors.btnColor,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 20,
        marginTop: 20,
    },
});

export default AddGroceryModal;
