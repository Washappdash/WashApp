// BookWashScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const BookWashScreen = ({ navigation }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Book a wash</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1611095565012-d4a6afaff4b9' }}
        style={styles.image}
      />
      <Text style={styles.sectionTitle}>Choose your wash</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Basic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Ultimate</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>When do you want us to come?</Text>
        <Text style={styles.infoText}>9:00 AM - 10:00 AM</Text>
        <Text style={styles.infoText}>Jan 5, 2023</Text>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Where should we go?</Text>
        <Image
          source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco,CA&zoom=14&size=400x400&key=YOUR_API_KEY' }}
          style={styles.mapImage}
        />
        <Text style={styles.infoText}>545 Mission St, San Francisco, CA</Text>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>What car are we washing?</Text>
        <View style={styles.carInfoContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1526768869276-a041ddbc2239' }}
            style={styles.carImage}
          />
          <View>
            <Text style={styles.infoText}>License plate: 4KJH123</Text>
            <Text style={styles.infoText}>Benz S550 - Black</Text>
          </View>
        </View>
        <Text style={styles.editText}>Edit</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('BookWash')}>
        <Text style={styles.confirmButtonText}>Confirm and pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e141b',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0e141b',
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#e7edf3',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  optionText: {
    fontSize: 16,
    color: '#0e141b',
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0e141b',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#0e141b',
    marginBottom: 8,
  },
  editText: {
    fontSize: 16,
    color: '#4e7397',
    fontWeight: 'bold',
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 8,
  },
  carInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  carImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 16,
  },
  confirmButton: {
    backgroundColor: '#4e7397',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookWashScreen;
