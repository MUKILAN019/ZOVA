import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'
const SearchInput = ({Title,value,placeholder,handleChangeText,...props}) => {
  const [showPass, setShowPass] = useState(false)
  return (
   
     
      <View className='border-2 border-white bg-blue-900  rounded-2xl focus:border-secondary w-full h-14 px-4 bg-black-100 flex-row items-center space-x-4'>
         <TextInput className='text-base mt-0.5 text-white flex-1 font-pregular ' value={value} placeholder="Search for a video topic" placeholderTextColor="#7b7"
         onChangeText={handleChangeText}
         secureTextEntry={Title==='Password' && !showPass}/>
         <TouchableOpacity>
            <Image source={icons.search} className='w-5 h-5' resizeMode='contain'/>
         </TouchableOpacity>
      </View>
   
  )
}

export default SearchInput

const styles = StyleSheet.create({})