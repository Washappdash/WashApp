import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProp } from '@react-navigation/native';
import CarWashScreen from './CarWashScreen';
import OtherServiceScreen from './OtherServiceScreen';
import ProfileScreen from './ProfileScreen';
import BookWashScreen from './BookWashScreen';

const Tab = createBottomTabNavigator();

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreenContent = ({ navigation }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Find car wash"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={{ uri: 'https://cdn.usegalileo.ai/sdxl10/534e4a3d-1d97-434f-b9bb-5246a91138b1.png' }}
          style={styles.bannerImage}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.indicatorsContainer}>
            <View style={styles.indicator} />
            <View style={[styles.indicator, styles.inactiveIndicator]} />
            <View style={[styles.indicator, styles.inactiveIndicator]} />
            <View style={[styles.indicator, styles.inactiveIndicator]} />
            <View style={[styles.indicator, styles.inactiveIndicator]} />
          </View>
        </ImageBackground>
      </View>
      <Text style={styles.sectionTitle}>Car Wash Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {carWashServices.map((service, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: service.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardPrice}>{service.price}</Text>
              <TouchableOpacity
                style={styles.bookButton}
                onPress={() => navigation.navigate('BookWash')}
              >
                <Text style={styles.bookButtonText}>Book now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Special Offers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {specialOffers.map((offer, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: offer.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{offer.title}</Text>
              <Text style={styles.cardCode}>{offer.code}</Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Redeem now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreenContent}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="CarWash"
        component={CarWashScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="car" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="OtherService"
        component={OtherServiceScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="construct" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="BookWash"
        component={BookWashScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="book" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const carWashServices = [
  {
    title: 'Basic Wash',
    price: '$10',
    image: 'https://images.unsplash.com/photo-1582991957988-dc241a8c9a23',
  },
  {
    title: 'Premium Wash',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
  },
  {
    title: 'Ultimate Wash',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1598479300461-8ba96f832e14',
  },
];

const specialOffers = [
  {
    title: '10% Off',
    code: 'SUMMER10',
    image: 'https://images.unsplash.com/photo-1542838685-733995f4a43b',
  },
  {
    title: 'Buy 1 Get 1 Free',
    code: 'B1G1FREE',
    image: 'https://images.unsplash.com/photo-1542838685-733995f4a43b',
  },
  {
    title: 'Free Vacuum',
    code: 'FREEVAC',
    image: 'https://images.unsplash.com/photo-1542838685-733995f4a43b',
  },
];

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    backgroundColor: '#e7edf3',
    borderRadius: 15,
    padding: 12,
    fontSize: 16,
  },
  bannerContainer: {
    padding: 16,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  indicatorsContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  inactiveIndicator: {
    backgroundColor: '#aaa',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0e141b',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 16,
    width: 150,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
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
  },
  bookButton: {
    backgroundColor: '#4e7397',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardCode: {
    fontSize: 14,
    marginBottom: 8,
    color: '#4e7397',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
