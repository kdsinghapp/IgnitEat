
import React, { useState } from 'react';
import { Modal, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/utils/colors';

const CreateRecipe = ({ modalVisible, setModalVisible }) => {

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


                    <Text style={styles.text}>
                        You have 1 free credit to generate a recipe. Would you like to use it now?

                    </Text>



                    <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={handleAccept}>
                        <Text style={styles.buttonText}>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]} onPress={handleAccept}>
                        <Text style={[styles.buttonText, { color: colors.btnColor }]}>No</Text>
                    </TouchableOpacity>


                </View>
            </View>
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
        width: '90%',
        height: '25%',
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
    },
    scrollView: {
        width: '100%',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        color: '#000'
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
});

export default CreateRecipe;
