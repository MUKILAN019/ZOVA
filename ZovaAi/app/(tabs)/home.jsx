import { Text, View, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import images from '../../constants/images'; 
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async ()=>{
    setRefreshing(true)
    setRefreshing(false)
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Text className="text-3xl text-gray-100 mt-10 text-center">
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="px-4 space-y-4">
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-sm text-gray-100 font-semibold">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-gray-100 font-semibold">
                  Mukilan
                </Text>
              </View>
              <View className="">
                <Image
                  source={images.logo}
                  className="w-28 h-18"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput/>
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>
              <Trending posts={[{id:1},{id:2},{id:3}] ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
        <EmptyState
        title='No Videos Found'
        subtitle='Be the first one to upload a video'/>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default Home;
