import {Image, Text, View} from 'react-native';

import {styles} from '../theme/appTheme';

export const AboutMeScreen = () => {
  return (
    <View style={styles.aboutMeScreen}>
      <Image source={require('../assets/logo-codeft.png')} />
      <View style={styles.infoContainer}>
        <Text style={styles.aboutMeText}>Acerca de Mi</Text>
        <Text style={styles.aboutMeText}>
          Powered By: <Text style={styles.boldText}>_Dark</Text>
        </Text>
        <Text style={styles.aboutMeText}>Alejandro Gómez Q</Text>
        <Text style={styles.aboutMeText}>150096</Text>
        <Text style={styles.aboutMeText}>alejandro.gomezq97@gmail.com</Text>
      </View>
    </View>
  );
};
