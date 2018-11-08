# react-native-test

Nämä ohjeet on tehty windows & android ympäristölle. 
Täältä löytyy ohjeet muillekin (-> Building Projects with Native Code): https://facebook.github.io/react-native/docs/getting-started 

Tarvittavat ohjelmat: 
-	node.js 
-	tekstieditori (VS code tai Atom) 
-	puhelimelle (Android tai iOS) Expo client app TAI koneelle emulaattori (esim. android studio)


# Ohjeet react-native-test sovelluksen avaamiseen: 

1. Asenna Expo CLI
  
        npm install -g expo-cli

2. Git clone ja mene kansioon 

        npm install 
  
3. Yhdistä puhelin USB:llä (developer mode ja salli usb) tai avaa emulaattori 

        Puhelin ja usb: 
              expo start --localhost -a
        Emulaattori: 
              expo start -a 
        Puhelin ilman usb, samassa wlanissa
              expo start
          -> avaa Expo client app ja scannaa QR-koodi
            
  Expon pitäisi bundlata ja avata sovellus puhelimeen automaattisesti.  

