import React from 'react';
import {View, Text, StyleSheet,SectionList,FlatList,Button,TouchableOpacity,Image,StatusBar} from "react-native";
import Icons from "react-native-vector-icons/FontAwesome6"
const App = () => {
  return (
      <View style={{marginBottom:50,margin:10}}>
          <Button onPress={() => {

          }}
                  title="Add Pokemon"
             />
          {/*<StatusBar hidden={true}/>*/}
              <SectionList sections={datasource} renderItem={renderItem}
                           renderSectionHeader={({section:{title, bgColor,icon}})=>(
                               <View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
                               <Icons name={icon} size={20} color='#877f34' style={{marginRight: 10}} />
                               <Text style={styles.headerText}>{title}</Text>
                           </View>


                               //     <Text style ={[styles.headerText,{backgroundColor:bgColor}]}>{title}</Text>
                           //
                            )}/>
          </View>
  )
}
const datasource = [
    {
        data:[
            {name:'Persian', num:'53'}, {name:'Jigglypuff', num:'39'}
        ],
        title: 'NORMAL', bgColor: '#B284BE', icon:'star-half-stroke'
    },
    {
        data:[
            {name:'Ninetales', num:'38'}, {name:'Rapidash', num:'78'}
        ],
        title: 'FIRE', bgColor: '#D4AF37', icon:'fire'
    },
    {
        data:[
            {name:'Nidoran(m)', num:'29'}, {name:'Nidoran(f)', num:'32'}
        ],
        title:'Dark', bgColor: '#C8A87F', icon:'meteor'
    }

];

const styles = StyleSheet.create({
    opacityStyle:{
        borderWidth:1,
        borderRadius:4,
        backgroundColor:'#F8b195',
        borderColor:'grey'
    },
    textStyle:{
        fontStyle:"italic",
        fontSize:15,
        margin:10,
        textAlign:'left',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#877f34',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },


});

const renderItem = ({item}) => {
    const pokeimage = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.num + "-2x.png";
    return (
        <TouchableOpacity style={[styles.opacityStyle, {flexDirection: 'row', alignItems: 'center', padding: 10}]}>
            <Text style={[styles.textStyle, {flex: 1}]}>{item.name}</Text>
            <Image source={{uri: pokeimage}} style={{width: 200, height: 300}} />
        </TouchableOpacity>
    );
};

export default App;
