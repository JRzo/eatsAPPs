import { Canvas } from '@react-three/fiber/native';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View } from 'react-native';
import { BottomUI } from './components/BottomUI';


export default function App() {
  return (

    <View style={styles.container}>
        <Canvas camera={{position: [-2,2.5,5], fov:30}}>
          <color attach="background" arg={["#512DA8"]}/>

          <mesh>
            <boxGeometry args={[1,1,1]}/>
            <meshBasicMaterial color="orange"/>
          </mesh>

          
        </Canvas>
        <BottomUI/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
