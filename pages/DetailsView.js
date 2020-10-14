'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DetailsView extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { nombre, origen, image, create ,genero ,especie} = this.props.route.params
        return (
            <View style={{flex : 1, flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
                <Image style={{ width: 300, height: 300, margin: 5 }}
                    source={{ uri: image }} />
                <Text style={{fontSize: 40}}>{nombre}</Text>
                <Text style={{fontSize: 20}}>Origen : {origen}</Text>
                <Text>Genero : {genero}</Text>
                <Text>Especie : {especie}</Text>
                <Text>Fecha de creación : {create}</Text>    
            </View>
            
        )

    }

}

