import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>{"X"}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone number" style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerSpacer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Work Sans, Noto Sans, sans-serif',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  closeButton: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#0e141b',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0e141b',
    marginTop: 16,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 480,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#d0dbe7',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f8fafc',
    color: '#0e141b',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 480,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  createButton: {
    backgroundColor: '#1466b8',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSpacer: {
    height: 20,
    backgroundColor: '#f8fafc',
  },
});

export default RegisterScreen;
