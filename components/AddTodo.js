import React, {useState} from 'react'
import {Text, View, Button, TextInput, StyleSheet} from 'react-native'
function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
  return (
    <View>
        <TextInput 
           placeholder='new todo...'
        
        onChangeText={(e)=>{
            setText(e)
            console.log(e)
        }}
        />
        <Button title="Add To Do" onPress={()=>submitHandler(text)}/>
    </View>
  )
}

export default AddTodo