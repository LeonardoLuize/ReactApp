import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#F2545B'}}>
      <StatusBar barStyle="light-content" backgroundColor="#D24A51" translucent={true}/>
      <View style={{ backgroundColor: '#F2545B',flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
        <Ionicons  style={{color: '#FCFCFC', fontSize: 100  }} name="md-flame"></Ionicons>
        <Text style={{color: '#FCFCFC', fontWeight: 'bold', width: '100%', textAlign: 'center', fontSize: 40}}>Heat your Style!</Text>
      </View>

      <Text style={{color: '#FCFCFC', fontWeight: 'bold', width: '100%', textAlign: 'left', fontSize: 16, paddingLeft: 40, paddingTop: 100, paddingBottom: 50}}>Shoes</Text>

      <View style={styles.container}>
        <View style={{backgroundColor: '#FCFCFC', width: '80%', borderRadius: 8, display: 'flex', flexDirection: 'row'}}>
          <Image style={styles.image1} source={require('./assets/img1.jpg')} resizeMode="cover"/>
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Text style={styles.text}>Yeezy Boost</Text>
            <Text style={styles.textDescription}>O Yeezy white se concentra em conforto com um incrível boost.</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{backgroundColor: '#FCFCFC', width: '80%', borderRadius: 8, display: 'flex', flexDirection: 'row'}}>
          <Image style={styles.image1} source={require('./assets/img2.jpg')} resizeMode="cover"/>
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Text style={styles.text}>Vans OldSkool</Text>
            <Text style={styles.textDescription}>Feito para skatistas, a linha old skool oferece máximo conforto e estilo.</Text>
          </View>
        </View>
      </View>

      <Text style={{color: '#FCFCFC', fontWeight: 'bold', width: '100%', textAlign: 'left', fontSize: 16, paddingLeft: 40, paddingTop: 50, paddingBottom: 50}}>Jackets</Text>
      
      
      <View style={{display: 'flex', alignItems: 'center', paddingBottom: 5}}>
        <Image style={styles.imageCover} source={require('./assets/img4.jpg')} resizeMode="cover"/>
      </View>

      <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', paddingBottom: 50}}>
        <Image style={styles.imageSide} source={require('./assets/img3.jpg')} resizeMode="cover"/>
        <Image style={styles.imageSide2} source={require('./assets/img5.jpg')} resizeMode="cover"/>
      </View>

      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#D24A51', textAlign: 'center', paddingBottom: 20}}>New Products Soon!</Text>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#F2545B'}}>
        <View style={{display: 'flex', flexDirection: 'row', paddingTop: 50, paddingLeft: 10}}>
          <Ionicons  style={{color: '#FCFCFC', fontSize: 50  }} name="md-flame"></Ionicons>
          <Text style={{color: '#FCFCFC', fontWeight: 'bold', fontSize: 40, width: '100%'}}>Settings</Text>
        </View>

        <Text style={{color: '#FCFCFC', fontWeight: 'bold', fontSize: 18, paddingLeft: 20, marginTop: 50, borderTopWidth: 2, borderBottomWidth: 2, borderColor: "#D24A51", paddingTop: 10, paddingBottom: 10}}>We don't have settings :c</Text>
      
      </ScrollView>
    </>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Shop') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-bonfire'
                      : 'ios-bonfire-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-settings' : 'ios-settings-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F2545B',
          inactiveTintColor: '#08415C',
        }}
      >
        <Tab.Screen name="Shop" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  image1: {
    width: 170,
    height: 170,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  container: {
    width: '100%', 
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingBottom: 25
  },

  text: {
    fontWeight: 'bold',
    width: '35%', 
    fontSize: 18,
    paddingLeft: 10,
    paddingBottom: 10
  },

  textDescription: {
    fontSize: 14,
    width: '35%', 
    paddingLeft: 10,
    paddingBottom: 10
  },

  imageCover: {
    width: '80%',
    height: 170,
    borderRadius: 8,
  },

  imageSide: {
    width: '39%',
    height: 170,
    borderRadius: 8,
    marginRight: 10
  },

  imageSide2: {
    width: '39%',
    height: 170,
    borderRadius: 8,
  },

})