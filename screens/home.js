import React from "react";
import { View, Text } from "react-native";
import { Feather, FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';


export default function home() {
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
            <Text style={{backgroundColor:"grey",borderRadius:10, width:50, color:"orange"}}>All</Text>
            <Text style={{backgroundColor:"grey",borderRadius:10, width:50}}>Roadbike</Text>
            <Text style={{backgroundColor:"grey",borderRadius:10, width:50}}>Mountain</Text>
            <Text style={{backgroundColor:"grey",borderRadius:10, width:50}}>Urban</Text>
        </View>
        
    </View>
}