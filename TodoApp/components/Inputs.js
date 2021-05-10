import React, {useContext,useRef} from 'react'
import {Text, TextInput, View, StyleSheet, Button,Alert} from "react-native"
import {todoContext} from "./todoContext"
function Inputs() {
    
    const {username, setUsername, age, setEmail, email, setAge, person, setPerson} =useContext(todoContext)
    const usernameRef = useRef('')
    const addPerson = ()=>{
        if(username && email&& age){
            const newPerson = {id : Math.random().toString(36).substr(2, 9), username, email, age}
            setPerson([...person, newPerson])
            setEmail('')
            setAge('')
            setUsername('')
            usernameRef.current.focus()
            
        }else{
            Alert.alert("Invalid Inputs","Sorry ensure you have entered the correct inputs")
        }
    }
    return (

        <View style={styles.inputs}>
        <TextInput placeholder = "Enter your username" style = {styles.inputTexts}
        onChangeText= {(username)=>setUsername(username)}
        value={username}
        ref = {usernameRef}
        autoCompleteType = "off"

        />
        <TextInput placeholder = "Enter your email" style = {styles.inputTexts}
        onChangeText={(email)=>setEmail(email)}
        keyboardType="email-address"
        value={email}
        autoCompleteType = "off"

        />
        <TextInput placeholder = "Enter your age" style = {styles.inputTexts}
        onChangeText= {(age)=>setAge(age)}
        value={age}
        keyboardType="number-pad"
        autoCompleteType = "off"
        />

        <View style={styles.button}>
        <Button title = "Add person" 
        onPress = {addPerson}
        />
        </View>
        
        
        </View>

        


    )
}
const styles = StyleSheet.create({
    inputs:{
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"whitesmoke",
        width:"90%",
        marginVertical:10


    },
    inputTexts:{
        backgroundColor:"white",
        width:"100%",
        borderWidth:1,
        marginVertical:2,
        borderColor:"#6942f5",
        borderRadius:40,
        fontSize:17,
        height:40,

    },
    button:{
        width:"90%",
        marginVertical:5,
    }
})


export default Inputs
