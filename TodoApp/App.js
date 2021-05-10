import React, {useState} from 'react'
import {Text, View, StyleSheet} from "react-native"
import FetchData from './components/FetchData'
import Inputs from './components/Inputs'
import {todoContext} from "./components/todoContext"
function App() {
  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[age, setAge] = useState('')
  const[person, setPerson] = useState([])
  return (
    <todoContext.Provider value = {{username, setUsername, email, setEmail, age, setAge,person, setPerson}}>
        <View style = {styles.mainContainer}>
        <View >
        <Text style={styles.title}>Todo Application</Text>
        </View>
        <Inputs/>
        <FetchData/>
        </View>
    </todoContext.Provider>
    

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width:370,
    backgroundColor:"cyan",
    flex: 1,
    alignItems:"center",
    

  },
  title: {
    fontSize: 30,
  }
})
export default App
