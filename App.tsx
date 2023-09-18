import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import './i18n.config';
import {useTranslation} from 'react-i18next';
import LanguagePicker from './src/screen/LanguagePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORE_LANGUAGE_KEY} from './src/utils/languageDetectorPlugin';

export default function App() {
  const {t} = useTranslation();
  React.useEffect(() => {
    const getCurrentLang = async () => {
      const currlen = await AsyncStorage.getItem('settings.lang');
      console.log('current Lang: ', currlen);
    };
    getCurrentLang();
  }, []);
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <Text style={styles.text}>{`${t('hello')}!`}</Text>
      <Button title={t('PRESS')} onPress={() => Alert.alert(t('hello'))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});
