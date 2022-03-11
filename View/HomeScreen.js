import * as React from 'react';
import {
        View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image
} from 'react-native';
import Header from './components/header'

const HomeScreen= (navigation) => {
    return (
        <View>
            <Header name="AR GEOCACHING"/>
            <View style={styles.container}>
                <Image source={require('./components/WelcomeIcon.png')} />

            <TouchableOpacity style={styles.LoginButton} onPress={()=> navigation.navigate('Login')}>
        	    <Text style={{fontWeight: "bold", color: "black"}}>Login</Text>
        </TouchableOpacity>

            <TouchableOpacity style={styles.RegisterButton} onPress={()=> navigation.navigate('Register')}>
                <Text style={{fontWeight: "bold", color: "black"}}>Register</Text>
        </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
	backgroundColor: "#fff",
	alignItems: "center",
	marginTop: 30,
    },

	LoginButton: {
	width: "40%",
	height: 30,
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#2AAA8A",
    marginTop: 10,
    },

    RegisterButton: {
    width: "40%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2AAA8A",
    marginTop: 10,
    },
});
export default HomeScreen;



