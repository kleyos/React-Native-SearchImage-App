import React, { Component } from 'react'
import {
	AppRegistry,
	StyleSheet, Text, Button, ScrollView,
	View, } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Result extends Component {
	static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.text}`,
  })
	constructor(props) {
		super(props);
		this.state = { hits: [] };
	}
	componentDidMount(){
		const { params } = this.props.navigation.state
		const url = `https://pixabay.com/api/?key=5859244-dff5b035b6ba2a43a111794af&q=${params.text}&image_type=photo`
		fetch(url)
		 .then(response => response.json())
		 .then(responseJson => { this.setState({hits: responseJson.hits})
		 .catch( error => console.error(error));
	}
	render() {
		const { navigate } = this.props.navigation;
		const hits = this.state.hits
		console.log('state',this.state)
  	const picture = this.props.data ? this.props.data.map( (img, index) =>
	                              <Picture key={index}
	                                  url={img.image_url}
	                                  name={img.name}
	                                  id={img.id}
	                                  onPress={this.handlePress.bind(this)} /> ) : null;
			return (
					<ScrollView contentContainerStyle={styles.gallery}>
						{ picture }
					</ScrollView>
					)
		}
	}
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