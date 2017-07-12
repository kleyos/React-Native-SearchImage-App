import React, { Component } from 'react'
import {
	StyleSheet, ScrollView, Image, Text,
	View, Dimensions,} from 'react-native'

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
		 .then(responseJson => this.setState({ hits: responseJson.hits }) )
		 .catch( error => console.error(error))
	}
	render() {
		const { params } = this.props.navigation.state
		const { navigate } = this.props.navigation;

		const hits = this.state.hits
		const {height, width} = Dimensions.get('window');

		const pictures = hits.length>0
			? hits.map( (img, index) =>
				<Image key={index}
					source={{ uri: img.previewURL }}
					style={{
						width: width/params.value-20,
						height: img.previewHeight/params.value,
						margin:5,
					}} /> )
			: <Text> No result </Text>

		return <View style={styles.container}>
			<ScrollView contentContainerStyle={styles.pictures}>
				{pictures}
			</ScrollView>
		</View>
		}
	}

const styles = StyleSheet.create({
	container:{
		flex:1,
		padding:10,
	},
	pictures:{
		flexDirection:'row',
		flexWrap: 'wrap',
		justifyContent:'center',
		}
});