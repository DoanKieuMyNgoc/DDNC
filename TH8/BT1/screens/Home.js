import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View>
                <Text style={{ fontSize: 40, textAlign: 'center' }}>HomeScreen</Text>
                <Button
                    title='BT1'
                    onPress={() => { navigation.navigate('BT1') }}
                ></Button>
                <Button
                    title='BT2'
                    onPress={() => { navigation.navigate('BT2') }}
                ></Button>
                <Button
                    title='BT3'
                    onPress={() => { navigation.navigate('BT3') }}
                ></Button>
                <Button
                    title='BT4'
                    onPress={() => { navigation.navigate('BT4') }}
                ></Button>
                <Button
                    title='BT5'
                    onPress={() => { navigation.navigate('BT5') }}
                ></Button>
                 <Button
                    title='BT6'
                    onPress={() => { navigation.navigate('BT6') }}
                ></Button>

            </View>
        )
    }
}

const styles = StyleSheet.create({})