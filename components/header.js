import * as React from 'react';
import {
        Text,
        View
} from 'react-native';

const Header = (props) => {
	return <View style={styles.viewStyle}><Text style={styles.textStyle}>{props.name}</Text></View>
};

const styles = {
	textStyle: {
	fontSize: 20,
	fontWeight: "bold",
	color: "black",
	marginLeft: 40,
	},

	viewStyle: {
	backgroundColor: "#2AAA8A",
	width: "100%",
	height: 45,
	justifyContent: "center",
	alignItems: "center",
	},
}
export default Header;
