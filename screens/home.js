import React , {useState,useRef}from "react";
import { View, Text, FlatList, Image } from "react-native";
import{ Feather, FontAwesome, AntDesign, 
    Ionicons, Foundation, FontAwesome5, MaterialIcons}
from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const IMAGES = {
    image1: require('../assets/bic2.png'),
    image2: require('../assets/bic2.png'),
    image3: require('../assets/bic2.png'),
    image4: require('../assets/bic2.png'),
};


export default function home({navigation}) {
    const [images, setimages] = useState([
        
        {image: IMAGES.image1, id:'1',
        name: "mountain bike", price:'$ 1700.00'
    },
        {image: IMAGES.image2, id:'2',
        name: "mountain bike", price:'$ 1700.00'},
        {image: IMAGES.image3, id:'3',
        name: "mountain bike", price:'$ 1700.00'},
        {image: IMAGES.image4, id:'4',name:"mountain bike",price:'$ 1700.00'}
    ]);
    return <View style={{backgroundColor:"white", flex:1, paddingTop:55, paddingHorizontal:20}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Feather name="menu" size={24} />
            <FontAwesome name="motorcycle" size={24} />
            <View style={{flexDirection:"row", justifyContent:"space-between", }}>
                <AntDesign name="search1" size={24}  />
                <Ionicons name="notifications-outline" size={24} />
            </View> 
        </View>
        <View style={{flexDirection:"row", marginTop:20}}>
            <Text style={{color:"grey",fontSize:15}}>
                The World's  <Text style={{color:"orange",fontWeight:"600",fontSize:20}}>Best Bike</Text>
            </Text>
        </View>
        <View>
            <Text style={{fontWeight:"600", marginTop:20}}>Categories</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:10}}>
            <Text style={{backgroundColor:"#f5f5f5",borderRadius:10,  color:"orange", padding:8}}>All</Text>
            <Text style={{backgroundColor:"#f5f5f5",borderRadius:10, padding:8}}>Roadbike</Text>
            <Text style={{backgroundColor:"#f5f5f5",borderRadius:10, padding:8 }}>Mountain</Text>
            {/*<Text style={{backgroundColor:"grey",borderRadius:10, width:50}}>Urban</Text>*/}
        </View>
        <View style={{ flex: 1, }}>
            <FlatList 
            
            numColumns={2}
            keyExtractor = {(item) => item.id}

              data={images}
              renderItem={({ item }) =>(
                  <View style={{padding: 25, backgroundColor: '#e9e8ed', margin: 10, borderRadius: 20, marginTop:20,}}>
                  <View style={{alignItems:"flex-end",}}>
                      <FontAwesome name="heart-o" size={24} style={{  }} />
                  </View>

                  <Image 
                  style={{ height: 100, width:100 }}
                   source={item.image} />
                   <Text>{item.name}</Text>
                   <Text style={{fontWeight:"bold"}}>{item.price}</Text>

                  </View>

              )}
            />

        </View>
        
        <View style={{backgroundColor:"#e9e8ed", flexDirection:"row", justifyContent:"space-between"}}>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate("login")
            }}>
            <Foundation name="home" size={24} style={{color:"orange"}} />
          </TouchableOpacity>

            <View style={{height:40, width:40, borderRadius:20, backgroundColor:"white",transform:[{translateY:-20}]}}>
            <View style={{height:40, width:40, borderRadius:20, backgroundColor:"black",}}>
            <MaterialIcons name="keyboard-voice" size={24} color="white" style={{paddingLeft:7}} />
            </View>
            </View>

            <FontAwesome5 name="shopping-bag" size={24} style={{color:"grey"}} />
            
            
        </View>
    </View>
}