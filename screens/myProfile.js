import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const myProfile = () => {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.username}>Hi, Ben Cline</Text>
        </View>
        <View>
          <View style={styles.option}>
            <Icon name="user-o" size={30} color="#900" />
            <Text style={styles.nameoption}>Privete Account</Text>
            <Icon name="angle-right" size={30} color="#900" />
          </View>
          <Text style={styles.line}>
            ________________________________________________
          </Text>
          <View style={styles.option}>
            <Icon name="user-o" size={30} color="#900" />
            <Text style={styles.nameoption}>My Consults      </Text>
            <Icon name="angle-right" size={30} color="#900" />
          </View>
          <Text style={styles.line}>
            ________________________________________________
          </Text>
          <View style={styles.option}>
            <Icon name="file-text-o" size={30} color="#900" />
            <Text style={styles.nameoption}>My Orders          </Text>
            <Icon name="angle-right" size={30} color="#900" />
          </View>
          <Text style={styles.line}>
            ________________________________________________
          </Text>
          <View style={styles.option}>
            <Icon name="user-o" size={30} color="#900" />
            <Text style={styles.nameoption}>Billing                  </Text>
            <Icon name="angle-right" size={30} color="#900" />
          </View>
          <Text style={styles.line}>
            ________________________________________________
          </Text>
          <View style={styles.option}>
            <Icon name="user-o" size={30} color="#900" />
            <Text style={styles.nameoption}>Faq                      </Text>
            <Icon name="angle-right" size={30} color="#900" />
          </View>
          <Text style={styles.line}>
            ________________________________________________
          </Text>
          <View style={styles.option}>
            <Icon name="user-o" size={30} color="#900" />
            <Text style={styles.nameoption}>Settings              </Text>
            <Icon name="angle-right" size={30} color="#900" />
          </View>
          <Text style={styles.line}>
            ________________________________________________
          </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  info: {
    flexDirection: 'row',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  avatar: {
    marginRight: 20,
    marginBottom: 35,
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  option: {
    flexDirection: 'row',
    margin: 10,
  },
  nameoption: {
    marginLeft: 20,
    marginRight: 185,
  },
  line: {
    marginLeft: 58,
  }
});

export default myProfile;