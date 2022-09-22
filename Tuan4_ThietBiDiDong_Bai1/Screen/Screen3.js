import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const data = ["Xanh", "Đỏ", "Đen", "Trắng"]
function Screen3(){
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.containerTop}>
         <Image source = {require('../assets/vsmartxanh.png')}/>
        </View>
        <View style={styles.containerMidle}>
             <Text style={{fontSize:20,}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
              <View style={styles.containerMidle_Row1}>
                 <View style={styles.containerMidle_Row1_Start}>
                   <Rating  imageSize={25} />
                 </View>
                 <View style={styles.containerMidle_Row1_Text}>
                     <Text style={{fontSize:16,}}>(Xem 828 đánh giá)</Text>
                 </View>
              </View>
              <View style={styles.containerMidle_Row2}>
                   <Text style={{fontSize:22,fontWeight:'bold',marginRight:50,}}>1.790.000 đ</Text>
                   <Text style={{fontSize:20,fontWeight:'bold',color:'grey',textDecorationLine:'line-through'}}>1.790.000 đ</Text>
              </View>
              <View style={styles.containerMidle_Row3}>
                   <View>
                     <Text style={{fontSize:16,fontWeight:'bold',marginRight:20,color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                   </View>
                   <Image source = {require('../assets/icon1.png')}/>
              </View>
              <View style={styles.containerMidle_Row3_ComboBox}>
                 <SelectDropdown 
                     data={data} defaultButtonText={'4 MÀU-CHỌN MÀU'} 
                     buttonTextStyle = {{fontSize:16,}}
                     onSelect={(selectedItem, index) => {}} 
                     renderDropdownIcon={isOpened => {
                     return <FontAwesome name={isOpened ? 'chevron-down' : 'chevron-right'} color={'black'} size={18} />;
                     }}
                     rowStyle={styles.dropdown2RowStyle}
                     buttonStyle = {{width:350, borderRadius:10,backgroundColor:'#fff',borderWidth:1,borderColor:'black'}}
                     />
              </View>
         </View>
         <View style={styles.containerButtom}>
           <TouchableOpacity style={styles.order}>
                     <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>Mua</Text>
           </TouchableOpacity>
         </View>
     </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    containerTop:{
      alignItems:'center',
      marginTop:50,
    },
    containerMidle:{
      display:'flex',
      flexDirection:'column',
      marginRight:20,
      marginTop:15,
      marginLeft:20,
    },
    containerMidle_Row1_Start:{
      marginRight:30,
    },
    containerMidle_Row1:{
      display:'flex',
      flexDirection:'row',
      marginTop:15,
      marginLeft:10,
      marginRight:10,
    },
    containerMidle_Row1_Text:{
      justifyContent:'center'
    },
    containerMidle_Row2:{
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      display:'flex',
      flexDirection:'row',
    },
    containerMidle_Row3:{
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      display:'flex',
      flexDirection:'row',
    },
    containerMidle_Row3_ComboBox:{
      alignItems:'center',
      marginTop:20,
    },
    containerButtom:{
      paddingLeft:10,
      paddingRight:10,
      marginTop:20,
    },
    order:{
      marginTop:20,
      height:50,
      width:"100%",
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
    },
  });

export default Screen3;