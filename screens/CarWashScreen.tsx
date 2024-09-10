import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

interface Props {
  navigation: NavigationProp<any>;
}

const CarWashScreen = ({ navigation }: Props) => {
  const carWashServices = [
    {
      id: 1,
      title: 'Basic Wash',
      price: '$10',
      image: 'https://images.unsplash.com/photo-1582991957988-dc241a8c9a23',
    },
    {
      id: 2,
      title: 'Premium Wash',
      price: '$20',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    },
    {
      id: 3,
      title: 'Ultimate Wash',
      price: '$30',
      image: 'https://images.unsplash.com/photo-1598479300461-8ba96f832e14',
    },
  ];

  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState(5);
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);

  const handleBookNow = (serviceTitle: string) => {
    setBookingMessage(`You have booked the ${serviceTitle}`);
    setTimeout(() => {
      setBookingMessage(null);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Car Wash</Text>
      <View style={styles.tabContainer}>
        <Text style={[styles.tab, styles.activeTab]}>Wash</Text>
        <Text style={styles.tab}>Detail</Text>
        <Text style={styles.tab}>Oil Change</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {carWashServices.map((service) => (
          <View key={service.id} style={styles.card}>
            <Image source={{ uri: service.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardPrice}>{service.price}</Text>
              <TouchableOpacity
                style={[styles.chooseButton, selectedService === service.id && styles.selectedButton]}
                onPress={() => setSelectedService(service.id)}
              >
                <Text style={[styles.chooseButtonText, selectedService === service.id && styles.selectedButtonText]}>
                  Choose
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bookButton}
                onPress={() => handleBookNow(service.title)}
              >
                <Text style={styles.bookButtonText}>Book now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      {bookingMessage && (
        <View style={styles.bookingMessageContainer}>
          <Text style={styles.bookingMessage}>{bookingMessage}</Text>
        </View>
      )}
      <View style={styles.footer}>
        <View style={styles.tipAmountContainer}>
          <Text style={styles.tipLabel}>Add a tip</Text>
          <Picker
            selectedValue={tipAmount}
            style={styles.tipPicker}
            onValueChange={(itemValue) => setTipAmount(itemValue as number)}
          >
            {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((value) => (
              <Picker.Item key={value} label={`$${value}.00`} value={value} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('BookWash')}>
          <Text style={styles.checkoutButtonText}>Go to BookWash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0e141b',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#4e7397',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4e7397',
    fontWeight: 'bold',
  },
  horizontalScroll: {
    paddingLeft: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 16,
    width: 200,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 14,
    marginBottom: 8,
    color: '#4e7397',
  },
  chooseButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#4e7397',
  },
  chooseButtonText: {
    color: '#4e7397',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: '#fff',
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bookingMessageContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -100 }],
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bookingMessage: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  tipLabel: {
    fontSize: 16,
    color: '#0e141b',
  },
  tipAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipPicker: {
    width: 100,
    height: 30,
    marginLeft: 8,
  },
  checkoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CarWashScreen;
