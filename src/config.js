// src/config.js
// IMPORTANT: Do NOT hardcode your API key directly in the source code.
// Use environment variables for security.

// Example using expo-constants (install with `npx expo install expo-constants`)
// import Constants from 'expo-constants';
// const GEMINI_API_KEY = Constants.expoConfig?.extra?.geminiApiKey;

// Example using react-native-dotenv (install with `npm install react-native-dotenv` and configure babel.config.js)
// import { GEMINI_API_KEY as envApiKey } from '@env';
// const GEMINI_API_KEY = envApiKey;

// Placeholder for demonstration - Replace with your actual secure access method
const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || 'YOUR_API_KEY_ENV_VARIABLE_NOT_SET'; // Use EXPO_PUBLIC_ prefix for Expo Router env vars

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// Basic check to warn if the key looks like the placeholder or is missing
if (GEMINI_API_KEY === 'YOUR_API_KEY_ENV_VARIABLE_NOT_SET') {
  console.warn('Gemini API Key is not set. Please configure it in your environment variables (e.g., .env file with EXPO_PUBLIC_GEMINI_API_KEY).');
}

export { GEMINI_API_KEY, GEMINI_API_URL };