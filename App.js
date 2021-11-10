import React, { useState } from 'react';
import { StyleSheet, View, Keyboard, } from 'react-native';
import { TextInput, Appbar, Button, ActivityIndicator, Colors } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import DisplayLove from './components/DisplayLove';
// import { COLORS } from './utils/Colors';

export default function App() {
  const baseUrl = "https://love-calculator.p.rapidapi.com/getPercentage?"
  const [fName, setFName] = useState('');
  const [sName, setSName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const handleSubmit = () => {
    if (fName && sName) {
      Keyboard.dismiss();
      setLoading(true)
      fetch(`${baseUrl}fname=${fName}&sname=${sName}`, {
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key': '7ec3152171msh28d4e2c475870a8p1f4f6bjsn5a3884a59f62'
        }
      }).then(
        respone => respone.json()
      ).then(data => (
        setLoading(false),
        setResult(data)
      ))
      setFName(""),
        setSName("")
    } else {
      alert("Please enter names!")
    }
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: '#D3212C' }}>
        <Appbar.Content title="Love % Calculator" style={{ alignItems: 'center' }} />
      </Appbar.Header>
      <TextInput
        label="Male"
        value={fName}
        underlineColor='red'
        selectionColor='red'
        onChangeText={text => setFName(text)}
      />
      <TextInput
        label="Female"
        value={sName}
        underlineColor='red'
        selectionColor='red'
        onChangeText={text => setSName(text)}
      />
      <Button icon="heart" mode="contained" style={{ margin: 10, backgroundColor: '#D3212C' }} onPress={handleSubmit}>
        Calculate
      </Button>
      <View>
        {
          loading ? <ActivityIndicator animating={true} color={Colors.red900} size='large' style={{ marginTop: 180 }}></ActivityIndicator> : <DisplayLove response={result} />
        }
      </View>
      <View style={styles.icon}>
        <Icon style={{ alignSelf: 'center' }}
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          size={40}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  spinner: {
    width: "80px",
    height: "80px"
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    left: '45%'
  }
});
