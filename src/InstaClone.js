import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from './config';

class InstaClone extends Component {
    constructor(){
        super();
            this.state = {
                disliked: false,
                screenWidth: Dimensions.get("window").width
                
            };
    }

    dislikeToggle(){
        this.setState({
            disliked: !this.state.disliked
        })
    }


    render(){ 
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageUri = "https://lh3.googleusercontent.com/oHmovKBwQSNcvAcsv8423_rMOO5gvkbj0GdJkaDsn7bjfPzBW0ZkqvKNQEr0eF1bzgn55TVGfYie7Gj-LGrEGPmf3g" + 
        "=s" + 
        imageHeight +
        "-c";

        const dislikeColor = (this.state.disliked) ? "rgb(252,61,57)" : null;
        const dislikeIcon = (this.state.disliked)? config.images.thumbedIcon : config.images.thumbIcon;
        
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
                <Text style= {{marginLeft: 5}}>Ugly.Yit</Text>
                
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={{ fontSize: 30 }}>
                    ...
                </Text>
            </View>

            </View>
            <TouchableOpacity 
            onPress={()=> {
            this.dislikeToggle();
            // alert('You ugly AF!')
            }}>
                <Image 
                    style={{ width: this.state.screenWidth, height: 400 }}
                    source={{
                        uri: imageUri
                        }}
                />
            </TouchableOpacity>
            <View style={styles.iconBar}>
                <TouchableOpacity 
                onPress={()=> {
                this.dislikeToggle();
                // alert('You ugly AF!')
                }}>
                    <Image style={[styles.icon, 
                    { height:35, width: 35, tintColor: dislikeColor}]} 
                    source={dislikeIcon}
                    />
                </TouchableOpacity>
                <Image style={[styles.icon, {height:32, width: 31}]} 
                source={config.images.bubbleIcon}
                />
                <Image style={[styles.icon, {height:35, width: 38}]} 
                source={config.images.arrowIcon}
                />
            </View>
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
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: 'center'
        
    },
    icon:{
        marginLeft: 8,

    }

})

export default InstaClone;