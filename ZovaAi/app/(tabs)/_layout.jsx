import { StyleSheet, View, Image,Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import { StatusBar } from 'expo-status-bar';

const TabIcon = ({ icon, color,name, focused }) => {
  return (
    <View className='items-center justify-center mt-[80%]'>
      <Image 
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 24, height: 24,margin:4 }}
        className="w-6 h-6" 
      />
      <Text className={`${focused ? 'font-psemibold':'font-pregular'} text-xs w-[100%]`} style={{color:color}}>
        {name}
      </Text>
      <StatusBar backgroundColor='#161622' style='light'/>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{tabBarShowLabel:false,
      tabBarActiveTintColor:'#EC8305',
      tabBarInactiveTintColor:'#DBD3D3',
      tabBarStyle:{
        backgroundColor:'#161622',
        borderTopWidth:1,
        borderTopColor:'#232533',
        height:70
      }
    }}>
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home} 
              color={color} 
              name='Home'
              focused={focused} 
            />
          ),
        }} 
       />
      <Tabs.Screen 
        name="bookmarks" 
        options={{
          title: ' Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.bookmark} 
              color={color} 
              name='Bookmark'
              focused={focused} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="create" 
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.plus} 
              color={color} 
              name='Create'
              focused={focused} 
            />
          ),
        }} 
      />
       <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.profile} 
              color={color} 
              name='Profile'
              focused={focused} 
            />
          ),
        }} 
      />
    </Tabs>
    
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
