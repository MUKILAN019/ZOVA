import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'
const FormField = ({Title,value,placeholder,handleChangeText,...props}) => {
  const [showPass, setShowPass] = useState(false)
  return (
    <View className={`space-y-2 mt-7`}>
      <Text className='text-base text-gray-100 font-pmedium'>{Title}</Text>
      <View className='border-2 border-white bg-blue-900  rounded-2xl focus:border-secondary w-full h-16 px-4 bg-black-100 flex-row items-center'>
         <TextInput className='flex-1 text-white font-psemibold text-base' value={value} placeholder={placeholder} placeholderTextColor="#7b7"
         onChangeText={handleChangeText}
         secureTextEntry={Title==='Password' && !showPass}/>
         {Title==='Password' && (<TouchableOpacity onPress={()=>setShowPass(!showPass)}>
           <Image source={!showPass? icons.eye : icons.eyeHide} className='w-8 h-8' resizeMode='contain'/>
         </TouchableOpacity>)}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})