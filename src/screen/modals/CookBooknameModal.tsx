import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '../../config/utils/colors';
import BlackClose from '../../assets/svg/BlackClose.svg';

const CookBookEditName = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.headerText}>Edit CookBook Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput  
                            placeholder='Cook Book Name'                        
                            style={styles.input}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.createButton}
                    >
                        <Text style={styles.createButtonText}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <BlackClose />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    createButton: {
        backgroundColor: colors.btnColor,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '90%',
        position: 'absolute',
        bottom: 10,
    },
    createButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headerText: {
        fontSize: 14,
        color: '#000',
        fontWeight: '600',
    },
    inputContainer: {
        marginTop: 20,
        backgroundColor: '#F7F8F8',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    input: {
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
});

export default CookBookEditName;
