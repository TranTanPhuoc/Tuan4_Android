import React from "react";
import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import { useState } from "react";
const data = [
    {id:1,name:'Xanh',img:'../assets/vsmartxanh.png',color:'blue',price:'1.790.000 đ',ncc:'Tiki Tradding'},
    {id:2,name:'Đỏ',img:'../assets/vsRed.png',color:'red',price:'2.790.000 đ',ncc:'Tiki Tradding'},
    {id:3,name:'Đen',img:'../assets/vsBlack.png',color:'black',price:'3.790.000 đ',ncc:'Tiki Tradding'},
    {id:4,name:'Trắng',img:'../assets/vsSilver.png',color:'white',price:'4.790.000 đ',ncc:'Tiki Tradding'},
];

function Screen2({navigation}){
  const [priceItem, setPriceItem] = useState("");
  const [colorItem, setColorItem] = useState("");
  const [nCCItem, setnCCItem] = useState("");
  const hanldPressScr3 = () => {
    navigation.navigate("Screen3");
  };
    const  renderItem = ({item}) =>{
        return (
        <TouchableOpacity onPress={()=>{
            setPriceItem(String(item.price))
            setColorItem(String(item.color))
            setnCCItem(String(item.ncc))
        }} style={{
            marginTop:20,
            height:90,
            width:90,
            backgroundColor:`${item.color}`,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,}}>
                                
        </TouchableOpacity> 
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <View  style={styles.containerTop}>
                <Image style={{height:150,width:130,marginRight:10,}} source = {require('../assets/vsmartxanh.png')}/>
                <View style={styles.containerTop_Text}>
                    <Text style={{fontSize:24,fontWeight:'bold',marginBottom:10,}}>Điện Thoại Vsmart Joy 3 {'\n'} Hàng chính hãng</Text>
                    <View style={styles.containerTop_Text_Row1}>
                        <Text style={{fontSize:20,marginRight:10,}}>Màu:</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:`${colorItem =='white'? 'black':colorItem}`}}>{colorItem}</Text>
                    </View>
                    <View style={styles.containerTop_Text_Row1}>
                        <Text style={{fontSize:20,marginRight:10,}}>Cung cấp bởi :</Text>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>{nCCItem}</Text>
                    </View>
                    <Text style={{fontSize:24,fontWeight:'bold',color:'black'}}>{priceItem}</Text>
                    {/* <Text style={{fontSize:24,fontWeight:'bold'}}>Điện Thoại Vsmart Joy 3 {'\n'} Hàng chính hãng</Text> */}
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerBottom_Layout}>
                    <Text style={{fontSize:22,}}>Chọn một màu bên dưới:</Text>
                    <View style={styles.containerBottom_Layout_Color}>
                        <FlatList data={data} renderItem ={renderItem}>
                        </FlatList>
                    </View>
                    <TouchableOpacity onPress={hanldPressScr3} style={styles.done}>
                        <Text style={{fontSize:22,color:'white',fontWeight:'bold'}}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    containerTop:{
        width:"100%",
        height:"24%",
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        marginLeft:20,
    },
    containerTop_Text:{

    },
    containerBottom:{
        backgroundColor:'#DDDDDD',
        height:"76%",
        width:"100%",
    },
    containerBottom_Layout:{
        marginLeft:20,
        marginRight:20,
    },
    containerBottom_Layout_Color:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    containerTop_Text_Row1:{
        display:'flex',
        flexDirection:'row',
        marginBottom:10,
    },
    done:{
      marginTop:10,
      height:50,
      width:"100%",
      backgroundColor:'#0099FF',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:15,
    }
});

export default Screen2;