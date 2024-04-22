// ProfileScreen.js

import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { themeColors } from '../theme';

export default function ProfileScreen() {
  const [profileDetails, setProfileDetails] = useState({
    name: 'Vimukthi Ranasinghe',
    email: 'vimukthiranasinghe084@gmail.com',
    mobile_no:'0779598153',
    address: '21/3,Gonawalla,Rajawella',
    avatarUri: 'https://media.istockphoto.com/id/1329569957/photo/happy-young-female-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=7Wq_Y2cl0T4op6Wg_3DFc-xtZfCqTTDvfaXkPGyrHDM=',
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
  const handleChangemobile = (mobile_no) => {
    setProfileDetails({ ...profileDetails, mobile_no });
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

          <TextInput
            style={styles.input}
            value={profileDetails.mobile_no}
            onChangeText={handleChangeAddress}
            placeholder="Mobile No"
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: themeColors.primary, 
    borderRadius: 10,
  },
  profileAvatar: {
    width: 300,
    height: 300,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#9AC8CD',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  profileAction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeColors.secondary, 
    padding: 10,
    borderRadius: 5,
  },
  profileActionText: {
    color: '#a7cde6',
    marginRight: 10,
  },
});