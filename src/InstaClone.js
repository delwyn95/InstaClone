import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {

    render(){ 
        return( 
            <View style = {{flex: 1, width:100 + "%", height: 100 + "%" }}>
            <View style={styles.tempNav}>
                <Text > Uglygram</Text>    
            </View> 
            <View style={styles.userBar}> 
            
            <View style = {{ flexDirection: "row", alignItems: 'center', }}>
                <Image 
                style = {styles.userPic}
                source = {{
                    uri:"https://lh3.googleusercontent.com/mg_fwh_obOFCS_E42lRSb7V-JUzisbmnav4v87whIyywy5ymPS-mQRYIjhCq2qs5F4W6TxnV4SCP7HRErcfGjQKTXJw"
                    }}
                />
                <Text style= {{marginLeft: 5}}>Gayake.Yit</Text>
            </View>
         
            </View>
            
            <Image 
                style={{ width: 100 + "%", height: 100}}
                source={{
                    uri:
                        "https://lh3.googleusercontent.com/AMCbjqDdNvCR6Y_kyio_uwejcX2AFevF8NMucY5YDrUSL6BVNoeDhbYX8ZEhp0Yvm8jCszGsif-HlwfoH9oOpMLO4A"
                    }}
            />
            </View>

        )
    }

}
const styles = StyleSheet.create({
    tempNav: {
        width:100+"%", 
        height: 56, 
        marginTop: 20,
        backgroundColor:"rgb(250,250,250)", 
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent:"center",
        alignItems: "center" 
    },
    userBar:{
        width: 100 + '%',
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    userPic:{
        height: 40,
        width:40,
        borderRadius: 20,
    }

})

export default InstaClone;