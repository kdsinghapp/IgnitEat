
  import React, { useRef, useState } from 'react';
  import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  import { image } from '../../config/utils/images';
  import Slider from '@react-native-community/slider';
  import { colors, marginTop } from '../../config/utils/utils';
  import Right from '../../assets/svg/rightIcon.svg'
  import Dot from '../../assets/svg/dot.svg'
  import Mic from '../../assets/svg/mic.svg'
  import Edit from '../../assets/svg/edit.svg'
  import Downgreen from '../../assets/svg/downgreen.svg'
  import CustomSlider from '../../config/customSlider';
  import MicModal from '../modals/MicModal';
  import SignupModel from '../modals/SignupModel';
  import CreateRecipe from '../modals/CreateRecipe';
  import ScreenNameEnum from '../../routes/screenName.enum';
import SubscribePrime from '../modals/SubscribePrime';

  export default function MealPlanning() {
    const [diners, setDiners] = useState(2);
    const [time, setTime] = useState(10);
    const [level, setLevel] = useState('Home Cooker');
    const [mood, setMood] = useState('Gourmet');
    const navigation = useNavigation();
    const [MicVoiceModal, setMicVoiceModal] = useState(false);
    const [CreateRecipeModal, setCreateRecipeModal] = useState(false);
    const [recipe, setrecipe] = useState('');
    const inputRef = useRef(null); // Ref for TextInput
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (id) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const [editable, setEditable] = useState(false); // State to track edit mode
    const [recentlyUsedIngredientsExpanded, setRecentlyUsedIngredientsExpanded] = useState(false);
    const [availableAppliancesExpanded, setAvailableAppliancesExpanded] = useState(false);
    const [cuisineStyleExpanded, setCuisineStyleExpanded] = useState(false);
  

    const handleOutsidePress = () => {
      if (editable && inputRef.current) {
        // Save changes or exit edit mode
        inputRef.current.blur(); // Blur TextInput to hide keyboard
        setEditable(false); // Exit edit mode
      }
    };
 
    const ExpandableSection = ({ title, content, expanded, onPress }) => (
      <View>
          <TouchableOpacity onPress={onPress} style={[styles.expandableHeader,]}>
              <Text style={{color:colors.btnColor,fontWeight:'600'}}>{title}</Text>
              <Image  style={{height:25,width:25}} source={image.circleDot} />
          </TouchableOpacity>
          {expanded && <View style={styles.expandableContent}><Text>{content}</Text></View>}
      </View>
  );
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
          <TouchableOpacity onPress={()=>{
navigation.navigate(ScreenNameEnum.MealPlan)

          }} style={[styles.expandableHeader,{marginTop:10,backgroundColor:'#CEBE33',borderRadius:10,justifyContent:'center'}]}>
              <Text style={{color:'#fff',fontWeight:'600'}}>Already have a Meal Plan? Press Here</Text>
              
          </TouchableOpacity>
   
   
   
    
            <FlatList
            data={sections}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <ExpandableSection
                    title={item.title}
                    content={item.content}
                    expanded={!!expandedSections[item.id]}
                    onPress={() => toggleSection(item.id)}
                />
            )}
        />
           
           <View style={styles.buttonsRow}>
            
              <TouchableOpacity style={styles.button}>
                <Right />
                <Text style={styles.buttonText}>Add Nutrition and Fitness Preferences</Text>
              </TouchableOpacity>
             
            </View>
          
  
        <View style={{padding:15,
        margin:5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5,
          backgroundColor:'#fff',borderRadius:20}}>
              <Text style={[styles.sliderLabel,{alignSelf:'center',color:colors.btnColor,marginVertical:10}]}>Diners</Text>
        <TouchableOpacity onPress={()=>{}} style={[styles.expandableHeader,{marginTop:10}]}>
              <Text style={{color:colors.btnColor,fontWeight:'600'}}>Cuisine style, prefencies</Text>
              <Image  style={{height:25,width:25}} source={image.circleDot} />
          </TouchableOpacity>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Diners</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Set number of diners</Text>
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
              <Text>{diners}</Text>
            </View>
  
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Time</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Set your cooking time to fit your schedule</Text>
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
              <Text>{diners}</Text>
            </View>
  
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Level</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Define the level of details provided in the recipe instruction</Text>
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
  
              <Text>{['Beginner', 'Home Cooker', 'Chef'][level]}</Text>
            </View>
  
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderLabel}>Mood</Text>
              <Text style={{ fontSize: 12, color: "#777777" }}>Define the creativity level of the recipe</Text>
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
  
              <Text>{['Classic', 'Gourmet', 'Artisan'][mood]}</Text>
            </View>
            </View>
            <TouchableOpacity
              onPress={() => {
      navigation.navigate(ScreenNameEnum.MealPlanPreferences)
              }}
              style={styles.createButton}>
              <Text style={styles.createButtonText}>Next</Text>
            </TouchableOpacity>
  
            <View style={{ height: hp(10) }} />
          </ScrollView>
          <MicModal modalVisible={MicVoiceModal} setModalVisible={() => setMicVoiceModal(false)} />
  
          <SubscribePrime modalVisible={CreateRecipeModal} setModalVisible={() => setCreateRecipeModal(false)} />
  
          {/* <SignupModel    modalVisible={MicVoiceModal} setModalVisible={()=>setMicVoiceModal(false)} />
      */}
        </View>
  
      </TouchableWithoutFeedback>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    iconContainer: {
      flexDirection: 'row',
    
    },
    iconButton: {
    marginLeft:10,
    },
    ingredientsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 16,
      marginTop:20
    },
    ingredient: {
      width:'30%',
 
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 10,
      flexDirection:'row',
      marginLeft:10,
      backgroundColor:'#fff',
      borderRadius:30,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    ingredientImage: {
      width:30,
      height:30,
      borderRadius:15,
      marginVertical: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    actionButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
    },
    actionButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
    },
    paginationDot: {
      height:8,width:8,borderRadius:4,color:'#ccc'
    },
    expandableHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#C8DBCE',
      borderRadius:30,
      paddingVertical:15,
      paddingHorizontal:15,
      marginBottom:10,
    },
    expandableContent: {
      padding: 10,
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      marginBottom: 8,
    },
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
      alignSelf:'center'
    },
    button: {
     
      flexDirection: 'row',
      borderRadius: 8,
      marginHorizontal: 4,
      alignItems: 'center',
    },
    buttonText: {
      color: colors.txtColor,
      fontWeight: 'bold',
      marginLeft: 10,
      fontSize:12
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
      marginTop:20
    },
    sliderLabel: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: '700',
      color:'#000'
    },
    slider: {
      width: '100%',
  
    },
    createButton: {
      backgroundColor: colors.btnColor,
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 16,
      marginTop:20
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
  
  const sections = [
    { id: 1, title: 'Recently Used Ingredients', content: 'Content for Recently Used Ingredients...' },
    { id: 2, title: 'Available Appliances', content: 'Content for Available Appliances...' },
    { id: 3, title: 'Cuisine Style', content: 'Content for Cuisine Style...' },
];
  const Dish = [
    { id: '1', name: 'Pizza' },
    { id: '2', name: 'Chicken' },
    { id: '3', name: 'Noodles' },
    { id: '4', name: 'Curry' },
    { id: '5', name: 'Pizza' },
    { id: '6', name: 'Pizza' },
    { id: '7', name: 'Pizza' },
    { id: '8', name: 'Chicken' },
    { id: '9', name: 'Pizza' },
  ];
  