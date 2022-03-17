import React from 'react'
import {StyleSheet, Text,TouchableOpacity, View} from 'react-native'
function TodoItem({item, pressHandler}) {
  return (
   <TouchableOpacity>
       <Text onPress={()=>pressHandler(item.key)}>
           {item.text}
       </Text>
    </TouchableOpacity>
  )
}

export default TodoItem