import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { colors } from '../../config/utils/colors';
import BlackClose from '../../assets/svg/BlackClose.svg';

const CookBookDelete = ({ modalVisible, setModalVisible }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', textAlign: 'center', paddingHorizontal: 20 }}>
                            Are you sure you want to delete the Cakes cookbook?
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={[styles.createButton,{backgroundColor:'#9E9E9E'}]}>
                            <Text style={styles.createButtonText}>NO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={styles.createButton}>
                            <Text style={styles.createButtonText}>YES</Text>
                        </TouchableOpacity>
                    </View>
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
        height:45,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center',
        width: '45%',
       marginTop:20,
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
        height: '25%',
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
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
});

export default CookBookDelete;
