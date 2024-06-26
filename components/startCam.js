import React from 'react';
import {View, Text, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function startCam() {
  const options = {
    title: 'Pick an Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const openPicker = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.data};
      }
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="PickImage" onPress={openPicker} />
    </View>
  );
}
