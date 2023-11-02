import {
  SafeAreaView,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native-animatable';
import Header from '../../components/Header';

const ChooseTemplate = () => {
  const { t } = useTranslation();

  return (
    <>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <Header title={t('permanentDeleteAccountText')} />
      </SafeAreaView>
      <ScrollView>
        <View>
          <Text>Choose template</Text>
        </View>
      </ScrollView>
    </>
  );
};

ChooseTemplate.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default ChooseTemplate;
