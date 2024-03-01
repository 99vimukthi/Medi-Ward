import { View, Text, TouchableOpacity ,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {signOut} from 'firebase/auth'
import {auth} from '../config/firbase'
import { themeColors } from '../theme'
import Card from './Card'



export default function WelcomeScreen() {

    const handleLogout=async ()=>{
      await signOut(auth);
    }
  return (
    <SafeAreaView className="flex-1 flex-row justify-center items-center "style={{backgroundColor: themeColors.bg}}>
      <TouchableOpacity  >
        
      <ScrollView>
          <Card title="Card 1" content="This is the content of Card 1." />
          <Card title="Card 2" content="This is the content of Card 2." />
          <Card title="Card 3" content="This is the content of Card 3." />
          <Card title="Card 4" content="This is the content of Card 4." />
          <Card title="Card 5" content="This is the content of Card 5." />
          <Card title="Card 6" content="This is the content of Card 6." />
      {/* Add more cards as needed */}
      </ScrollView>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} className="p-1 bg-red-400 rounded-lg">
      <Text className="text-white text-lg font-bold">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}