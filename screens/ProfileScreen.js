import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { themeColors } from '../theme';
import { styles } from '../theme';

export default function ProfileScreen() {
  const [profileDetails, setProfileDetails] = useState({
    name: 'Vimukthi Ranasinghe',
    email: 'vimukthiranasinghe084@gmail.com',
    address: '123 Street, City',
    avatarUri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
  });

  const handleChangeName = (name) => {
    setProfileDetails({ ...profileDetails, name });
  };

  const handleChangeEmail = (email) => {
    setProfileDetails({ ...profileDetails, email });
  };

  const handleChangeAddress = (address) => {
    setProfileDetails({ ...profileDetails, address });
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            alt=""
            source={{ uri: profileDetails.avatarUri }}
            style={styles.profileAvatar}
          />

          <TextInput
            style={styles.input}
            value={profileDetails.name}
            onChangeText={handleChangeName}
            placeholder="Name"
          />

          <TextInput
            style={styles.input}
            value={profileDetails.email}
            onChangeText={handleChangeEmail}
            placeholder="Email"
          />

          <TextInput
            style={styles.input}
            value={profileDetails.address}
            onChangeText={handleChangeAddress}
            placeholder="Address"
          />

          <TouchableOpacity
            onPress={() => {
              // handle update profile
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Update Profile</Text>

              <FeatherIcon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
