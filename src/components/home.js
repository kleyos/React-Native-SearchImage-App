import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet, Text, Button,
	View, FlatList, Slider, TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
	static navigationOptions = {
    title: 'Search',
  };
	constructor(props) {
		super(props);
		this.state = { text: 'socer', value:2 };
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.welcome}>Search term</Text>
					<TextInput
					 style={{
						 height: 40,
						 width: `${50}%`,
						 textAlign:'center'
					 }}
					 onChangeText={(text) => this.setState({...this.state, text})}
					 value={this.state.text}
				 />
			 </View>
				 <View style={styles.row}>
					 <Text style={styles.welcome}>Columns</Text>
					 <Slider
						style={{width: `${55}%`,}}
						maximumValue={4}
						maximumTrackTintColor={'#dc143c'}
						step={1}
						value={this.state.value}
						onValueChange={(value) => this.setState({...this.state, value})}
					/>
					<Text style={{color:'#dc143c', fontWeight:'bold'}}>{this.state.value}</Text>
				</View>
				<View style={styles.row}>
					<Button
						onPress={() => navigate('Result', { text:this.state.text, value: this.state.value })}
						title="SEARCH"
						color="#008b8b"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f5f5dc',
		padding:10,
	},
	row:{
		flexDirection:'row',
		justifyContent: 'space-around',
		marginBottom:10,
	},
	welcome: {
		fontSize: 14,
		margin: 5,
	},
});