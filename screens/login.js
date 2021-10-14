import React from "react";
import { View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function login() {
    return <View style={{flex:1, justifyContent:"center",
    alignItems:"center"
    }}>
        <Image 
        style={{
            width:150,
            height:150, 
            borderRadius:10,
            marginBottom:20,
        }}
        source = {{  uri:"https://d1mo5ln9tjltxq.cloudfront.net/-/media/images/homepage/homepage_e-bike-collections.ashx"}}
         />
        <Text style={{color:"rgba(0,0,0,0.6)", fontSize:24}}>
            Welcome to 
        </Text>
        <Text style={{color:"black", fontSize:30, fontWeight:600}}>
            Power Bike Shop
        </Text>
        <TouchableOpacity 
        style={{backgroundColor:"#e3e3e3",
        padding:10,
         paddingHorizontal:60,
        marginTop:20,
        borderRadius:10
        }}> 
        <Text style={{fontSize:20}}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{backgroundColor:"black",
        borderRadius:10,
        padding:10,
        paddingHorizontal:60,
        marginTop:20}}>
            <Text style={{fontSize:20, color:"white"}}>Login with Apple</Text>

        </TouchableOpacity>

    </View>;
}