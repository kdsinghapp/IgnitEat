
  import React from 'react';
  import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { image } from '../../config/utils/images';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../config/utils/colors';
import { marginTop } from '../../config/utils/utils';
  
  const TermCondition = () => {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={image.back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hack Aplate</Text>
        <Image source={image.appLogo} style={styles.menuIcon} resizeMode='contain' />
    </View>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Terms and condition</Text>
          <Image
            source={image.termc} // Replace with your image URL
            style={styles.image}
          />
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Terms and condition</Text>
            <Text style={styles.sectionContent}>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You. We use Your Personal data to provide and
              improve the Service. By using the Service, You agree to the
              collection and use of information in accordance with this Privacy
              Policy. This Privacy Policy has been created with the help of the
            </Text>
          </View>
          <View style={styles.section}>
            
            <Text style={styles.sectionContent}>
              The words of which the initial letter is capitalized have
              meanings defined under the following conditions. The following
              definitions shall have the same meaning regardless of whether
              they appear in singular or in plural.
            </Text>
            <Text style={styles.sectionContent}>
              Lorem ipsum dolor sit amet consectetur. Proin urna lorem odio
              consectetur pharetra nisl sit et. Ut venenatis in id tortor arcu
              ultrices ipsum et aliquet varius venenatis nec convallis sed.
              Vestibulum felis velit laoreet nulla tellus neque malesuada. Ut
              integer quam fermentum nullam pharetra massa in nibh aliquam.
              Nulla pellentesque magna est consequat a placerat scelerisque.
              Orci nunc eget metus ac egestas rhoncus consequat. Dictumst
              habitasse nunc eget sit. Viverra volutpat lectus nunc et ipsum in
              etiam ut vel.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: marginTop,
  },
  logo: {
      width: 30,
      height: 30,
  },
  headerText: {
      fontSize: 24,
      fontWeight: '500',
      fontFamily: 'anaktoria',
      color: colors.txtColor,
      marginLeft: 20,
      
  },
  menuIcon: {
      width: 50,
      height: 40,
  },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color:'#000',
      marginVertical:20
    },
    scrollView: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: 150,
      marginBottom: 20,
      resizeMode: 'contain',
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color:'#000'
    },
    sectionContent: {
      fontSize: 14,
      color: '#000',
      lineHeight: 22,
      fontWeight:'500'
    },
  });
  
  export default TermCondition;
  