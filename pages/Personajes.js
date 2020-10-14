import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, ToastAndroid, TextInput,term, onTermChange, onTermSubmit } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';





export default class Personajes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 6, flexDirection: 'column' }}>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
            onPress={() => this.props.navigation.navigate('DetailsView', {
              nombre: item.name,
              origen: item.origin.name,
              image: item.image,
              create: item.created,
              genero: item.gender,
              especie: item.species
            })}>
            <Image style={{ width: 100, height: 100, margin: 5 }}
              source={{ uri: item.image }} />
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, color: 'blue', marginBottom: 15 }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30, marginBottom: 16, marginRight: 30 }}>
          <Icon.Button
            name="star"
            backgroundColor="#3b5998"
            onPress={() => ToastAndroid.show(item.name, ToastAndroid.SHORT)}>
            Detalles
          </Icon.Button>
        </View>
      </View>

    )
  }
  renderSeparator = () => {
    return (
      <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}>
      </View>
    )
  }



  componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/"
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.results,
          isLoading: false
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {

    return (
      this.state.isLoading
        ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#330066" animating />
        </View>
        :
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>

    );
  }


}


const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

