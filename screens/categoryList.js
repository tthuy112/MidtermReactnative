import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    padding: 15,
  },
  banner: {
    alignItems: 'center',
  },
  bannerImage: {
    width: 360,
    height: 200,
    borderRadius: 15,
  },
  text: {
    padding: 15,
  },
  topProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
  },
  topProducts: {
    borderWidth: 1,
    width: 125,
    height: 160,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
  },
  topProductImage: {
    width: 125,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  allProduct: {
    flexDirection: 'row',
  },
  allProducts: {
    backgroundColor: '#F5F5F5',
  },
  allProductImage: {
    width: 170,
    height: 170,
    marginRight: 20,
  },
});

const categoryList = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Image
            style={styles.bannerImage}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Text style={styles.text}>React Native</Text>
        <View style={styles.topProduct}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.topProducts}>
              <Image
                style={styles.topProductImage}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <Text style={styles.text}>Su ca` na</Text>
            </View>
            <View style={styles.topProducts}>
              <Image
                style={styles.topProductImage}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <Text style={styles.text}>Su ca` na</Text>
            </View>
            <View style={styles.topProducts}>
              <Image
                style={styles.topProductImage}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <Text style={styles.text}>Su ca` na</Text>
            </View>
            <View style={styles.topProducts}>
              <Image
                style={styles.topProductImage}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <Text style={styles.text}>Su ca` na</Text>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.text}>React Native</Text>
        <View style={styles.allProduct}>
          <View style={styles.allProducts}>
            <Image
              style={styles.allProductImage}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text style={styles.text}>Su ca` na</Text>
          </View>
          <View style={styles.allProducts}>
            <Image
              style={styles.allProductImage}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default categoryList;