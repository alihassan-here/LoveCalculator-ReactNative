import React from 'react'
import { StyleSheet, View, } from 'react-native';
// import { DataTable } from 'react-native-paper';
import { Text, Card, } from 'react-native-elements';


const DisplayLove = ({ response }) => {


    const { fname, sname, percentage, result } = response;
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <Text style={styles.title}>RESULT</Text>
                <Card.Divider />
                <View style={styles.row}>
                    <Text style={styles.text}>Male:</Text>
                    <Text style={styles.text}>{fname}</Text>
                </View>
                <Card.Divider />
                <View style={styles.row}>
                    <Text style={styles.text}>Female:</Text>
                    <Text style={styles.text}>{sname}</Text>
                </View>
                <Card.Divider />
                <View style={styles.row}>
                    <Text style={styles.text}>Love%:</Text>
                    <Text style={styles.text}>{percentage}%</Text>
                </View>
                <Card.Divider />
                <View style={styles.row}>
                    <Text style={styles.text}>Result:</Text>
                    <Text style={percentage < 65 ? { color: '#FFA500' } : { color: 'red' }}>{result}</Text>
                </View>
                <Card.Divider />
            </View>



            {/* <Card containerStyle={{borderRadius:5,borderColor:'#D3212C'}}>
                <Card.Title>RESULT</Card.Title>
                <Card.Divider />
                <View style={styles.user}>
                    <View style={styles.useData}>
                        <Text style={styles.name}>Male:</Text>
                        <Text style={styles.name}>{fname}</Text>
                    </View>
                    <Card.Divider />
                </View>
                <View style={styles.user}>
                    <View style={styles.useData}>
                        <Text style={styles.name}>FeMale:</Text>
                        <Text style={styles.name}>{sname}</Text>
                    </View>
                    <Card.Divider />
                </View>
                <View style={styles.user}>
                    <View style={styles.useData}>
                        <Text style={styles.name}>Love%:</Text>
                        <Text style={styles.name}>{percentage}%</Text>
                    </View>
                    <Card.Divider />
                </View>
                <View style={styles.user}>
                    <View style={[styles.useData,{paddingBottom:20}]}>
                        <Text style={styles.name}>Result:</Text>
                        <Text style={[styles.name,{marginLeft:30}]}>{result}</Text>
                    </View>
                    <Card.Divider />
                </View>
            </Card> */}
        </View>
    )
}

export default DisplayLove;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    // text: {
    //     fontSize: 30,
    //     textAlign: 'center'
    // },
    // fonts: {
    //     marginBottom: 8,
    // },
    // user: {
    //     flexDirection: 'column',
    //     marginBottom: 6,
    // },
    // useData: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     // padding: 5,  
    //     // marginBottom:10,
    //     // alignItems:'center'
    // },
    // name: {
    //     fontSize: 20,
    //     marginTop: 5,
    //     maxHeight: 25,
    //     marginVertical: 8
    // },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    border: {
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 5,
        height: "100%",
        width: "70%",
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
    }
})
