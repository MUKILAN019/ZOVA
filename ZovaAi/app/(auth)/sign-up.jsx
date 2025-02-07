import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import images from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { router } from 'expo-router'
import { useGlobalContext } from '../../context/GlobalProvider'
const signUp = () => {
  const [form,setForm] = useState({
    username:'',email:'',password:''
  });
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setUser, setIsLogged } = useGlobalContext();
  const submit = async()=>{
    if(!form.username || !form.email || !form.password ){
      Alert.alert('Error','Please fill in all the fields')
    }
    setIsSubmitting(true);
    try{
      const result = await createUser(form.email,form.password,form.username)
      setUser(result);
      setIsLogged(true)
      router.replace('/home')
    }
    catch(er){
      Alert.alert('Error',er.message)
    }finally{
      setIsSubmitting(false);
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
        <Image source={images.logo} className="w-[50%] h-[70px]" resizeMode='contain'/>
        <Text className='text-2xl text-white text-sembold mt-10 font-psemibold'>Sign up</Text>
       <FormField
       Title='Username'
       value={form.username}
       handleChangeText={(e)=>setForm({...form,username:e})}
       />
       <FormField
       Title='Email'
       value={form.email}
       handleChangeText={(e)=>setForm({...form,email:e})}
       keyboardType="email-address"/>
       <FormField
       Title='Password'
       value={form.password}
       handleChangeText={(e)=>setForm({...form,password:e})}/>
       <CustomButton
         title="Sign Up"
         handlePress={submit}
         containerStyles='mt-7'
         isLoad={isSubmitting}/>
         <View className='justify-center pt-5 flex-row w-[100%] gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Have an account already?
          </Text>
          <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Log In</Link>
         </View>
         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signUp

const styles = StyleSheet.create({})