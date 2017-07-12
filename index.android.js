	/**
	 * Sample React Native App
	 * https://github.com/facebook/react-native
	 * @flow
	 */

	import React, { Component } from 'react'
	import { StackNavigator } from 'react-navigation'
	import { AppRegistry } from 'react-native'

	import Home from './src/components/home'
	import Result from './src/components/result'

	const SearchImages = StackNavigator({
		Home: { screen: Home },
		Result: { screen: Result},
	})


	AppRegistry.registerComponent('SearchImages', () => SearchImages)
