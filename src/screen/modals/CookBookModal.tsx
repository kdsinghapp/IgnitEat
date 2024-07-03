import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Share } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';
import BlackClose from '../../assets/svg/BlackClose.svg';
import Right from '../../assets/svg/right.svg';
import CookBookEditName from './CookBooknameModal';
import CookBookDelete from './DeleteCookBookModal';

const CookBookModal = ({ modalVisible, setModalVisible }) => {
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this link: https://www.google.com/',
            });
            if (result.action === Share.sharedAction && !result.activityType) {
                // Shared
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={[styles.button, { marginTop: 40 }]}
                        onPress={handleShare}
                    >
                        <Image source={image.shareLink} style={styles.buttonImage} />
                        <Text style={styles.buttonText}>
                            Share a link on your social network
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setEditModalVisible(true)}
                    >
                        <Image source={image.CircleEdit} style={styles.buttonImage} />
                        <Text style={styles.buttonText}>
                            Edit Cookbook Name
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setDeleteModalVisible(true)}
                    >
                        <Image source={image.delete} style={styles.buttonImage} />
                        <Text style={styles.buttonText}>
                            Delete The CookBook
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <BlackClose />
                    </TouchableOpacity>
                </View>

                <CookBookEditName
                    modalVisible={isEditModalVisible}
                    setModalVisible={() => setEditModalVisible(false)}
                />
                <CookBookDelete
                    modalVisible={isDeleteModalVisible}
                    setModalVisible={() => setDeleteModalVisible(false)}
                />
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
        width: '100%',
        height: '50%',
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
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonImage: {
        height: 40,
        width: 40,
    },
    buttonText: {
        marginLeft: 20,
        color: colors.btnColor,
        width: '70%',
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
});

export default CookBookModal;
