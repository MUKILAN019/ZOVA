import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import images from '../constants/images';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading,isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[50%] h-[70px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[100%] h-[55%] mt-5"
            resizeMode="contain"
          />
        </View>

        <View className="w-full items-center px-4px mt-[-40px]">
          <Text className="text-xl text-white font-bold text-center">
            Transforming Ideas into Reality
          </Text>
          <Text className='text-white text-sm font-pregular mt-7 text-center '>Unlock the Power of AI: Seamlessly Create and Explore Videos with</Text>
          <Image source={images.Small_logo} className='w-[15%] h-[45px] absolute-bottom-3  -left-10 -bottom-1 '/>
          <Text className='text-2xl text-secondary-100 font-bold mt-2 ml-4 -top-11 -right-4 '> ZOVA</Text>
          <CustomButton title='Continue to Email'
          handlePress={()=>{router.push('/sign-in')}}
          containerStyles="w-full "
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
