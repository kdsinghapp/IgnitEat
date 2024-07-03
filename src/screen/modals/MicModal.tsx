import React from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';

const MicModal = ({ modalVisible, setModalVisible }) => {

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
                setModalVisible(false);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Speak Now</Text>

                    <View style={styles.imageContainer}>
                        <Image
                            resizeMode='contain'
                            source={image.mic}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>0.10</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(false)
                        }}
                        style={styles.closeButton}>
                        <Image
                            source={image.close}
                            style={styles.closeIcon}
                        />
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
        height: '40%',
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        marginTop: 20,
    },
    image: {
        height: 120,
        width: 120,
    },
    timerContainer: {
        marginTop: 30,
    },
    timerText: {
        fontSize: 16,

    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeIcon: {
        height: 20,
        width: 20,
    },
});

export default MicModal;
