
import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Share, TextInput } from 'react-native';
import { colors } from '../../config/utils/colors';
import { image } from '../../config/utils/images';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlackClose from '../../assets/svg/BlackClose.svg';
import Right from '../../assets/svg/right.svg';
import ShareRecipeModal from './ShareRecipeModal';

const AddtoCookBook = ({ modalVisible, setModalVisible }) => {
    const [isRecipeModalVisible, setRecipeModalVisible] = useState(false);


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
<Text style={{fontSize:14,color:'#000',fontWeight:'600'}}>Add to CookBook</Text>
                    <View style={{marginTop:20,backgroundColor:'#F7F8F8',
                width:'90%',height:50,justifyContent:'center',paddingHorizontal:10,borderRadius:10
                }}>
                        <TextInput  
placeholder='Cook Book Name'                        
                        
                        />
                    </View>
                    <TouchableOpacity
                        style={[styles.button, styles.addButton, { marginTop: 40 }]}
                        onPress={handleShare}
                    >
                        <Image source={image.book} style={styles.addButtonImage} />
                        <Text style={[styles.buttonText, styles.addButtonText]}>
                        The Recipe Critic
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.addButton]}
                        onPress={() => setRecipeModalVisible(true)}
                    >
                        <Image source={image.book} style={styles.addButtonImage} />
                        <Text style={[styles.buttonText, styles.addButtonText]}>
                        The Recipe Critic
                        </Text>
                        <Right />
                    </TouchableOpacity>

                    <TouchableOpacity
            onPress={() => {
              
            }}
            style={styles.createButton}>
            <Text style={styles.createButtonText}>Add</Text>
          </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <BlackClose />
                    </TouchableOpacity>
                </View>

                <ShareRecipeModal
                    isVisible={isRecipeModalVisible}
                    onClose={() => setRecipeModalVisible(false)}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    createButton: {
        backgroundColor: colors.btnColor,
        padding:15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        width:'90%',
        position:'absolute',
        bottom:10
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
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    addButton: {
        backgroundColor: '#fff',
    },
    addButtonImage: {
        height:50,
        width:50,
    },
    addButtonText: {
        marginLeft: 20,
        color: colors.btnColor,
        width: '70%',
    },
    buttonText: {
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
});

export default AddtoCookBook;
