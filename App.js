import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  // State untuk Counter, Nama, dan Warna Background
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  // Fungsi ganti warna acak (Side Quest)
  const changeColor = () => {
    const colors = ['#FFADAD', '#CAFFBF', '#9BFBC0', '#A0C4FF', '#FFC6FF', '#FDFFB6'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.card}>
        <Text style={styles.title}>Magic Dashboard 🎛️</Text>
        
        {/* Input Nama */}
        <View style={styles.inputSection}>
          <Text style={styles.greeting}>Halo, {name || 'Bro'}! 👋</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ketik nama lo di sini..." 
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>

        <View style={styles.divider} />

        {/* Counter System */}
        <View style={styles.counterSection}>
          <Text style={styles.label}>Counter System</Text>
          <Text style={styles.counterValue}>{count}</Text>
          <View style={styles.row}>
            <TouchableOpacity 
              style={[styles.btn, { backgroundColor: '#FF595E' }]} 
              onPress={() => count > 0 && setCount(count - 1)} // Validasi tidak boleh < 0
            >
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.btn, { backgroundColor: '#1982C4' }]} 
              onPress={() => setCount(count + 1)}
            >
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tombol Ganti Warna (Side Quest) */}
        <TouchableOpacity style={styles.mainBtn} onPress={changeColor}>
          <Text style={styles.mainBtnText}>Ganti Warna Tema</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setCount(0); setName(''); setBgColor('#ffffff')}}>
          <Text style={styles.resetText}>Reset Dashboard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { 
    width: '85%', padding: 25, borderRadius: 25, backgroundColor: '#fff', 
    alignItems: 'center', elevation: 10, shadowColor: '#000', 
    shadowOpacity: 0.1, shadowRadius: 10 
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  inputSection: { width: '100%', alignItems: 'center' },
  greeting: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  input: { 
    width: '100%', height: 45, backgroundColor: '#f0f0f0', 
    borderRadius: 10, paddingHorizontal: 15 
  },
  divider: { width: '100%', height: 1, backgroundColor: '#eee', marginVertical: 20 },
  label: { fontSize: 12, color: '#888', textTransform: 'uppercase' },
  counterValue: { fontSize: 60, fontWeight: 'bold', color: '#222' },
  row: { flexDirection: 'row', marginTop: 10 },
  btn: { width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15 },
  btnText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  mainBtn: { marginTop: 25, backgroundColor: '#333', padding: 15, borderRadius: 12, width: '100%' },
  mainBtnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  resetText: { marginTop: 15, color: '#bbb', fontSize: 12 }
});