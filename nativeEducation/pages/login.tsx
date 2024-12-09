import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

export default function login() {
    WebBrowser.maybeCompleteAuthSession();
    const [request,response,promptAsync]=Google.useAuthRequest({
        androidClientId:'454722437353-9gbk993a5r01bdaav1tql8nfmsuq8irn.apps.googleusercontent.com',
        webClientId:'454722437353-aipusq80e8r4u8hje5ockv9altktrmg3.apps.googleusercontent.com',
        
    })
  return (
    <View style={styles.container}>
      <Image source={require('../app/assets/Images/login.png')} style={{height:250, width:'auto'}}></Image>
      <View >
        <Text style={[styles.headingText,styles.card]}>Welcome to Education App </Text>
        <Text style={styles.signin}>Login/Signup </Text>

        <View style={styles.main}>
            <Pressable onPress={()=>promptAsync()} style={styles.butt}>
            <FontAwesome name="google" size={24} color="white" style={{marginRight:10}} />
            <Text style={styles.buttonText}>Sign in with Google </Text>
            </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    headingText:{
        fontSize:35,
        textAlign:"center",
        paddingTop:40,
        marginTop:-20,
        backgroundColor:"#fff",
    },
    container:{
        backgroundColor:"#fff",
        flex:1,
    },
    signin:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
        marginTop:60,
    },
    butt:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color:"#fff",
    },
    main:{
        backgroundColor:'#3ca4e3',
        padding:10,
        margin:20,
        borderRadius:10,
        
    },
    card:{
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    }
})