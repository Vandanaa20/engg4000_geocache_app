import * as React from 'react';
import {
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image
} from 'react-native';
import Header from './components/header'

const MainMenu = (navigation) => {
    return (
        <View>
            <Header name="Welcome User_007"/>
            <View style={styles.CameraContainer}>
                <Image source={require('./components/Camera.png')} />
            </View>

            <View style={styles.ProfileContainer}>
                 <TouchableOpacity style={styles.ProfileStyle} activeOpacity={0.5}>
                    <Image source={require('./components/Profile.png')}
                    style={styles.ImageIconStyle}/>
                    <Text style={{fontWeight: "bold", color: "black"}}>Profile</Text>
                 </TouchableOpacity>

                  <TouchableOpacity style={styles.MapStyle} activeOpacity={0.5}>
                    <Image source={require('./components/Map.png')}
                    style={styles.ImageIconStyle}/>
                    <Text style={{fontWeight: "bold", color: "black"}}>Map</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.SearchStyle} activeOpacity={0.5}>
                    <Image source={require('./components/Search.png')}
                    style={styles.ImageIconStyle}/>
                    <Text style={{fontWeight: "bold", color: "black"}}>Search</Text>
                  </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
	CameraContainer: {
	backgroundColor: "#fff",
	alignItems: "center",
	marginTop: 50,
    },

    ProfileContainer: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginTop: 400,
    justifyContent: 'space-between'
    },

	ImageIconStyle: {
	padding: 15,
	margin: 5,
	height: 25,
	width: 25,
	resizeMode: 'stretch',
	},
});
export default MainMenu;



