import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image,Alert } from 'react-native'
import React, { useState } from 'react'
import images from '../../constants/images'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link,router } from 'expo-router'
import { SignIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
const signIn = () => {
  const [form,setForm] = useState({
    email:'',
    password:''
})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setUser, setIsLogged } = useGlobalContext();
  const submit = async()=>{
    if(!form.email || !form.password){
      Alert.alert('Error','Please fill in all the fields')
    }
    setIsSubmitting(true);
    try{
      await SignIn(form.email,form.password)
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      router.replace('/home')
    }
    catch(er){
      Alert.alert('Error',er.message)
    }
    finally{
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
       <View className='w-full justify-center min-h-[95vh] px-4 my-6'>
         <Image source={images.logo} className="w-[50%] h-[70px]" resizeMode='contain'/>
         <Text className='text-2xl text-white text-sembold mt-10 font-psemibold'>Sign in</Text>
         <FormField
         Title="Email"
         value={form.email}
         handleChangeText={(e)=>setForm({...form,email:e})}
         keyboardType="email-address"/>
         <FormField
         Title="Password"
         value={form.password}
         handleChangeText={(e)=>setForm({...form,password:e})}
         />
         <CustomButton
         title="Sign In"
         handlePress={submit}
         containerStyles='mt-7'
         isLoad={isSubmitting}/>
         <View className='justify-center pt-5 flex-row w-[100%] gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have account?
          </Text>
          <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
         </View>
       </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default signIn

const styles = StyleSheet.create({})