import React , {useContext}from 'react'
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native'
import {todoContext} from "./todoContext"
function FetchData() {
    const {person, setPerson} =useContext(todoContext)
    const removePerson=(id)=>{
        const newPerson  = person.filter((per)=>(per.id !== id))
        setPerson(newPerson)
    }
    return (
<View style = {styles.dataContainer}>
<ScrollView>
{
    person.map((per)=>{
        const{id,username, email, age} = per

        return (
     <View style={styles.itemContainer} key = {id}>
        <View style={styles.username}>
        <Text>{username}</Text>
        </View>
        <View style={styles.email}>
        <Text>{email}</Text>
        </View>
        <View style={styles.age}>
        <Text>{age}</Text>
        </View>
        <View style={styles.button}>
        <Button title = "X" color = "brown" 
        onPress = {()=>removePerson(id)}

        />
        </View>
    </View>
        )
    })
}
    
    </ScrollView>

</View>
    )
}
const styles = StyleSheet.create({
    dataContainer:{
        backgroundColor:'whitesmoke',
        width:"90%",
        height:"63%",
    },
    itemContainer:{
        display:'flex',
        flexDirection:'row',
        height:40,
        backgroundColor:'white',
        margin:2,
        alignItems:'center',
        width:"98%"

    },
    username:{
        marginLeft:4,
        width:"18%",
    },

    email:{
        marginLeft:4,
        width:"58%",

    },
    age:{
        marginLeft:4,
        width:"8%",
    },
    button:{
        marginLeft:4,
        width:"10%",
        height:32,
    }

})

export default FetchData
