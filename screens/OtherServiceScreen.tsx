import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const OtherServiceScreen = () => {
  const specialOffers = [
    {
      id: 1,
      title: '10% Off First Order',
      code: 'FIRST10',
      image: 'https://images.unsplash.com/photo-1582991957988-dc241a8c9a23',
    },
    {
      id: 2,
      title: 'Free Upgrade to Premium',
      code: 'UPGRADE',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    },
    {
      id: 3,
      title: '20% Off All Services',
      code: 'SUMMER20',
      image: 'https://images.unsplash.com/photo-1598479300461-8ba96f832e14',
    },
  ];

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, // Add padding to the bottom to create space at the end
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0e141b',
    marginBottom: 16,
  },
  horizontalScroll: {
    flexDirection: 'row',
    maxHeight: 300, // Limit the maximum height of the horizontal scroll view
  },
  card: {
    width: 250, // Adjust the width to a proper size, for example, 200
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardCode: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default OtherServiceScreen;
