import React from "react";
import { View, Text, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';


export default function login() {
    return <View style={{flex:1, justifyContent:"center",
    alignItems:"center", backgroundColor:"white"
    }}>
        <Image 
        style={{
            width:250,
            height:170, 
            borderRadius:20,
            marginBottom:20,
            transform:[{rotate:"-15deg"}]
        }}
        source = {{  uri:"https://surlybikes.com/uploads/bikes/Wednesday_BK0052_Background-1200x800.jpg"}}
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
        flexDirection:"row",
        borderRadius:10
        }}> 
        <AntDesign name="google" size={24} color="black" />
        <Text style={{fontSize:20, paddingLeft:5}}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{backgroundColor:"black",
        borderRadius:10,
        padding:10,
        paddingHorizontal:60,
        flexDirection:"row",
        marginTop:20}}>
            <AntDesign name="apple1" size={20} color="white" />
            <Text style={{fontSize:20, color:"white", paddingLeft:5}}>Login with Apple</Text>

        </TouchableOpacity>
        <Text style={{marginTop:10, fontWeight:'500', color:'grey'}}>Not a member?
         <Text style={{color:'orange', }}>Signup</Text>
        </Text>
         

    </View>;
}