
import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { image } from '../../config/utils/images';
import Slider from '@react-native-community/slider';
import { colors, marginTop } from '../../config/utils/utils';
import Right from '../../assets/svg/rightIcon.svg'
import Dot from '../../assets/svg/dot.svg'
import Mic from '../../assets/svg/mic.svg'
import Edit from '../../assets/svg/edit.svg'
import Close from '../../assets/svg/close.svg'
import CustomSlider from '../../config/customSlider';
import MicModal from '../modals/MicModal';
import SignupModel from '../modals/SignupModel';
import CreateRecipe from '../modals/CreateRecipe';
import ScreenNameEnum from '../../routes/screenName.enum';
export default function DesiredDish() {
  const [diners, setDiners] = useState(2);
  const [time, setTime] = useState(10);
  const [level, setLevel] = useState('Home Cooker');
  const [mood, setMood] = useState('Gourmet');
  const navigation = useNavigation();
  const [MicVoiceModal, setMicVoiceModal] = useState(false);
  const [CreateRecipeModal, setCreateRecipeModal] = useState(false);
  const [recipe, setrecipe] = useState('');
  const inputRef = useRef(null); // Ref for TextInput

  const [editable, setEditable] = useState(false); // State to track edit mode

  const toggleEdit = () => {
    setEditable(!editable);
    if (!editable) {
      focusTextInput(); // Focus TextInput when entering edit mode
    } else {
      Keyboard.dismiss(); // Dismiss keyboard when exiting edit mode
    }
  };
  const focusTextInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleOutsidePress = () => {
    if (editable && inputRef.current) {
      // Save changes or exit edit mode
      inputRef.current.blur(); // Blur TextInput to hide keyboard
      setEditable(false); // Exit edit mode
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
      <View style={styles.header}>
          <Image source={image.appLogo} style={styles.logo} />
          <Text style={styles.headerText}>Hack Aplate</Text>
          <TouchableOpacity onPress={() => { navigation.openDrawer(); }}>
            <Image source={image.menu} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.greeting}>Hi, Rohan Smiths</Text>
          <Text style={styles.title}>What Dish Would You Like To Prepare Today?</Text>



          <View style={styles.avoidIngredientsContainer}>
            {editable ? (
              <TextInput
                ref={inputRef}
                style={styles.input}
                multiline
                placeholder="Enter the name of the dish..."
                value={recipe}
                onChangeText={(text) => {
                  setrecipe(text)
                }}
              />
            ) : (
              <Text style={styles.avoidIngredientsText}>
                {recipe ==''?'Enter the name of the dish recipe':recipe}
              </Text>
            )}

            <View style={{
              flexDirection: 'row', alignItems: 'center',


              position: 'absolute', bottom: 5, right: 5
            }}>
              <TouchableOpacity style={{}}>
                <Close height={20} />

              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleEdit}
                style={{}}>
                <Edit height={20} />

              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMicVoiceModal(true)
                }}
                style={{}}>
                <Mic height={20} />

              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.button}>
              <Right />
              <Text style={styles.buttonText}>Generate Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Right />
              <Text style={styles.buttonText}>Add Nutrition</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate(ScreenNameEnum.IngredientScreen)
          }}
          style={styles.avoidButton}>
            <Text style={styles.avoidButtonText}> Ingredients ...</Text>
            <Dot />
          </TouchableOpacity>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Diners</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Set number of diners</Text>
            <Text>{diners}</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              
              step={1} 
              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />
            
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Time</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Set your cooking time to fit your schedule</Text>
            <Text>{diners}</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />
            
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Level</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Define the level of details provided in the recipe instruction</Text>
            <Text>{['Beginner', 'Home Cooker', 'Chef'][level]}</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />

           
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Mood</Text>
            <Text style={{ fontSize: 12, color: "#777777" }}>Define the creativity level of the recipe</Text>
            <Text>{['Classic', 'Gourmet', 'Artisan'][mood]}</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              step={1}

              maximumTrackTintColor='#b7cbc0'
              minimumTrackTintColor='#0E522D'
              value={diners}
              onValueChange={value => setDiners(value)}
              style={styles.slider}
              thumbImage={image.customThumb}

            />

            
          </View>

          <TouchableOpacity
            onPress={() => {
              setCreateRecipeModal(true)
            }}
            style={styles.createButton}>
            <Text style={styles.createButtonText}>Create A Recipe</Text>
          </TouchableOpacity>

          <View style={{ height: hp(10) }} />
        </ScrollView>
        <MicModal modalVisible={MicVoiceModal} setModalVisible={() => setMicVoiceModal(false)} />

        <CreateRecipe modalVisible={CreateRecipeModal} setModalVisible={() => setCreateRecipeModal(false)} />

        {/* <SignupModel    modalVisible={MicVoiceModal} setModalVisible={()=>setMicVoiceModal(false)} />
    */}
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: marginTop
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'anaktoria',
    color: colors.txtColor
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  greeting: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: '700',
    color: colors.txtColor,
    fontFamily: 'Recoleta-Bold',
    marginTop:Platform.OS == 'android'?20:0
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
    color: '#575757',
    alignSelf: 'center'
  },
  input: {

    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  avoidIngredientsContainer: {
    backgroundColor: '#b7cbc0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,

  },
  avoidIngredientsText: {
    color: '#333',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    flexDirection: 'row',

    padding: 16,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.txtColor,
    fontWeight: 'bold',
    marginLeft: 10
  },
  avoidButton: {
    backgroundColor: colors.btnColor,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 30,
    flexDirection: 'row', justifyContent: 'space-between',
    marginBottom: 16,
  },
  avoidButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sliderContainer: {
    marginBottom: 16,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '700'
  },
  slider: {
    width: '100%',
    height: 40,

  },
  createButton: {
    backgroundColor: colors.btnColor,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});
