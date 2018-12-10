/** @format */

import {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import App from './App';
import Detector from './components/Detector';
import {name as appName} from './app.json';


const image_picker_options = {
    title: 'Select Photo', 
    takePhotoButtonTitle: 'Take Photo...', 
    chooseFromLibraryButtonTitle: 'Choose from Library...',
    cameraType: 'back', 
    mediaType: 'photo',
    maxWidth: 480,
    quality: 1, 
    noData: false, 
    path: 'images'
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
});

const api_key = 'aee46b85246944e19d193679d8735999';

class FaceDetector extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Detector imagePickerOptions={image_picker_options} apiKey={api_key} />
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
