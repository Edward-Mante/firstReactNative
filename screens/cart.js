import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Ionicons, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Cart({navigation}){

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          name: 'Pinarello Bike',
          category: "Mountain bike",
          amt: "5000.00",
          url: require('../assets/bic2.png'),
          
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          name: 'Brompton Bike',
          category: "Road bike",
          amt: "5000.00",
          url: require('../assets/bic2.png'),
          urk:  {
            uri:  "https://media.istockphoto.com/photos/black-and-red-folding-bicycle-picture-id690917450?b=1&k=20&m=690917450&s=170667a&w=0&h=sRB_e9XjSBD0qn8l37ApXAFZkfQhZ5Dp2YzoVOEtyF0=",
        }
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          name: 'Pinarello Bike',
          category: "Urban bike",
          amt: "5000.00",
          url: require('../assets/bic2.png'),
          urk:  {
            uri:  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGluYXJlbGxvJTIwYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        }
        },
      ];
      
      const Item = ( props ) => (
        <View style={styles.item}>
            <View style={{ backgroundColor: "#eee", borderRadius: 10 }} >
                <Image style={{ height: 80, width: 80 }}
                 source={ props.url } />
            </View>
            <View style={{ justifyContent: "space-between" }}>
              <Text style={styles.title}>{props.name}</Text>
              <Text style={{ fontSize: 13 }}>{props.category}</Text>
              <Text style={styles.bold_font}><Text style={styles.money} >$</Text>{props.amt}</Text>
            </View>
            <View style={{ flexDirection: "column", justifyContent: 'space-between' }}>
                <AntDesign name="delete" size={18} color="orange" style={{ alignSelf: "flex-end" }} />
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity >
                    <AntDesign name="minuscircle" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{   
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    fontSize: 20
                    }}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <AntDesign name="pluscircle" size={24} color="orange" />
                  </TouchableOpacity>
                </View>
            </View>
        </View>
      );

      const renderItem = ({item} ) => <Item name={item.name} category={item.category} amt={item.amt} url={item.url} />;

    return <View style={{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: 'white'
    }}>
        <View style={{ 
            flexDirection: 'row',
            alignItems: 'center',
            width: 350,
            justifyContent: 'flex-start',
            
        }}>
            <View style={{ 
                flexDirection: 'row',
                alignItems: 'center',
                }}>
                    <TouchableOpacity
                      onPress={() => {
                          navigation.navigate('Home')
                      }}>
                        <Ionicons name="arrow-back" size={24} color="black" /> 
                </TouchableOpacity>
            </View>
            
            <View style={{ 
                flexDirection: 'column',
                alignItems: 'center',            
                marginHorizontal: "auto",
                marginBottom: 15
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 600 }} >Cart list</Text>
                    <Text style={{ fontSize: 16, color: "gray" }} >(3 items)</Text>
            </View>
        </View>
        <View style={{ marginBottom: 10 }} >
          <SafeAreaView style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
          </SafeAreaView>
        </View>

        <View style={{ backgroundColor: "#eee", borderRadius: 20, width: 340, marginBottom: 10 }} >
           <View style={styles.price}>
            <Text style={{ color: "gray" }}>Subtotal</Text><Text style={styles.bold_font}><Text style={styles.money} >$</Text>3,400.00</Text>
           </View>
           <View style={[styles.price, { borderStyle: "dotted", borderBottomWidth: 2,paddingBottom: 15, borderColor: "gray" }]}>
            <Text style={{ color: "gray" }}>Shipping fee</Text><Text style={styles.bold_font}><Text style={styles.money} >$</Text>1,00.00</Text>
           </View>
           <View style={[styles.price,{paddingBottom: 15}]}>
            <Text style={styles.bold_font}>Total</Text><Text style={styles.bold_font}><Text style={styles.money} >$</Text>3,500.00</Text>
           </View>
        </View>
        <View style={{ 
          width: 300, 
          color: "white", 
          backgroundColor: "orange", 
          padding: 15, 
          marginBottom: 20, 
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20 }}>Proceed to Checkout</View>
        <View style={{ 
                flexDirection: "row",
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 350,
                backgroundColor: "#eee",
                marginTop: 20,
                borderRadius: 5,
                marginBottom: 10
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                >
                    <Entypo name="home" size={30} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <View style={[styles.icon_container, { transform: [{translateY: -25}] } ]} >
                    <MaterialCommunityIcons name="microphone-outline" size={26} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Cart')
                    }}
                >
                    <SimpleLineIcons name="handbag" size={30} color="orange" />
                </TouchableOpacity>
            </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 350,
      backgroundColor: "white"
    },
    item: {
      paddingBottom: 18,
      flexDirection: "row",
      justifyContent: "space-around"
    },
    title: {
      fontSize: 18,
      fontWeight: "400"
    },
    price: { 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      paddingTop: 15, 
      paddingHorizontal: 15 
    },
    bold_font: { 
      fontSize: 20, 
      fontWeight: "600" 
    },
    money: {
      color: "orange", 
      fontWeight: "700", 
      fontSize: 16, 
      justifyContent: "flex-end",
      paddingRight: 2 
    },
    icon_container: {
      backgroundColor: "#000", 
      borderRadius: 30,
      padding: 30,
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: "center"
  }

});