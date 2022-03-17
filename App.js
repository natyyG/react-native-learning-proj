

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import {
  Colors,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './components/Register';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
const App = () => {
  const [todos, setTodos] = useState([
    {text: "Make portifolio design by xd", key:"1"},
    {text: "Todo React Native", key:"2"},
    {text: "App Design xd", key:"3"}
  ])
  const pressHandler = (key)=>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
    return [
    {text: text, key:Math.random().toString()},
      ...prevTodos]
    })  
  }
  return (
    <View>
      <Header />
      <AddTodo submitHandler = {submitHandler}/>
      <View style={styles.container}>
        <FlatList style={styles.list} data={todos}
        renderItem={({item})=>(
          <TodoItem item={item} pressHandler={pressHandler}/>
        )}/>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    padding:40,
  },
})
export default App;
