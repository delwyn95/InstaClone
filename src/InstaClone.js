import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import config from './config';

class InstaClone extends Component {
    constructor(){
        super();
            this.state = {
                screenWidth: Dimensions.get("window").width
            };
    }


    render(){ 
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageUri = "https://lh3.googleusercontent.com/AMCbjqDdNvCR6Y_kyio_uwejcX2AFevF8NMucY5YDrUSL6BVNoeDhbYX8ZEhp0Yvm8jCszGsif-HlwfoH9oOpMLO4A" + 
        "=s" + 
        imageHeight +
        "-c";
        
        return( 
    
            <View style = {{flex: 1, width:100 + "%", height: 100 + "%" }}>
            <View style={styles.tempNav}>
                <Text>Uglygram</Text>    
            </View> 
            <View style={styles.userBar}> 
            
            <View style = {{ flexDirection: "row", alignItems: 'center', }}>
                <Image 
                style={styles.userPic}
                source = {{
                    uri:"https://lh3.googleusercontent.com/mg_fwh_obOFCS_E42lRSb7V-JUzisbmnav4v87whIyywy5ymPS-mQRYIjhCq2qs5F4W6TxnV4SCP7HRErcfGjQKTXJw"
                    }}
                />
                <Text style= {{marginLeft: 5}}>Gayake.Yit</Text>
                
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={{ fontSize: 30 }}>
                    ...
                </Text>
            </View>

            </View>
            <Image 
                style={{ width: this.state.screenWidth, height: 400 }}
                source={{
                    uri: imageUri
                    }}
            />
            <View></View>
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
        alignItems: "center" ,
     
    },
    userBar:{
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent:"space-between"
    },
    userPic:{
        height: 40,
        width:40,
        borderRadius: 20,
    }

})

export default InstaClone;