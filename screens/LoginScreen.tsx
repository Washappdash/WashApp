import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const renderInitialScreen = () => (
    <View style={styles.initialContainer}>
      <Text style={styles.title}>Log in to Aspen</Text>
      <TouchableOpacity style={styles.button} onPress={() => setShowLoginForm(true)}>
        <Text style={styles.buttonText}>Use email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );

  const renderLoginForm = () => (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Login Screen</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('WASH APP')}>
        <Text style={styles.formButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.formButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {showLoginForm ? renderLoginForm() : renderInitialScreen()}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service to learn how we collect, use and share your data.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
        <View style={styles.footerSpacer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Work Sans, Noto Sans, sans-serif',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0e141b',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e7edf3',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0e141b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e141b',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#f8fafc',
    color: '#0e141b',
  },
  formButton: {
    backgroundColor: '#1466b8',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  formButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  footerText: {
    color: '#4e7397',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#0e141b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerSpacer: {
    height: 20,
  },
});

export default LoginScreen;
