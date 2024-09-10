import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={24} color="black" />
          <Text style={styles.headerText}>Profile</Text>
        </View>
        
        <View style={styles.profileInfo}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://via.placeholder.com/80' }} // Replace with the actual image URL
          />
          <Text style={styles.profileName}>Elena</Text>
          <Text style={styles.profileEmail}>elena@gmail.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.list}>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Service history</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Promotions</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Payment methods</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Notifications</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Referrals</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Help</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F1F7',
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 32,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    marginTop: 16,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  listItemText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    marginTop: 4,
    fontSize: 12,
    color: 'black',
  },
});

export default ProfileScreen;
