<!DOCTYPE html>
<head>
</head>

<body>

<h1> React Native ja uuden sovelluksen tekeminen </h1>

Sisältö:
<ul>
  <li> 1. <a href="#reactnative"> React Native </a> </li>
  <li> 2. <a href="#perus">React Nativen peruskäsitteitä </a> </li>
  <li> 2.1 <a href="#komps"> Komponentit </a> </li>
  <li> 2.3 <a href="#propsstate">Reactin Props ja State </a> </li>
  <li> 2.3 <a href="#styles"> Tyylit CSS:llä </a> </li>
  <li> 3. <a href="#asennus"> Uuden React native sovelluksen tekeminen</a> </li>
  <li> 4. <a href="#teht"> Tehtävät </a>
</ul>

<h3 id="reactnative">React Native</h3>
<p>React Nativella voi tehdä täysin natiiveja mobiilisovelluksia Adroidille ja iOS:lle käyttämällä JavaScriptiä. Se käyttää samoja käyttöliittymien rakennuspalikoita kuin natiivit sovellukset, mutta ne kasataan Javasciptillä. 
Koska React Nativella tehty käyttöliittymä on kokonaan natiivi, sen suoritusteho on parempi kuin esim. hybridisovellusten. 
</p>

<img src="https://d1eyrqnzwgnjjq.cloudfront.net/wp-content/uploads/2017/03/Image-1.png" width="600px" />
<p style="font-size: 8px">https://mentormate.com/blog/react-native-components/ </p>

<p>Reactin tapaan React Native koostuu komponenteista, joilla rakennetaan käyttöliittymä. Reactista poiketen React Native käyttää HTML elementtien sijaan natiiveja elementtejä, kuten View ja Text. </p>

<img src="https://appdividend.com/wp-content/uploads/2018/08/React-Native-Swiper-Component-Example.png" width="600px" />
<p style="font-size: 8px">https://appdividend.com/2018/08/13/react-native-swipe-components-example-tutorial/ </p>

<p> React Nativen kanssa voi käyttää  </p>

<h3 id="perus">React Nativen peruskäsitteitä </h3>

<h4 id="komps">Komponentit</h4>

<p>Komponenteista koostuva rakenne sovelluksessa (kuvassa webbisovellus, mutta toimii nativessa samaan tapaan)</p>

<img src="https://image.slidesharecdn.com/reactcomponents-171006140740/95/react-components-lifecycle-react-tutorial-for-beginners-reactjs-training-edureka-5-638.jpg?cb=1507298999"  width="500px" />
<p style="font-size: 8px">https://www.slideshare.net/EdurekaIN/react-components-lifecycle-react-tutorial-for-beginners-reactjs-training-edureka</p>

<p>  </p>

<h4 id="propsstate">Reactin Props ja State </h4>

<img src="http://www.medianic.co.uk/wp-content/uploads/2017/11/Stateful-vs-Stateless-Component-Tutorial-Component-with-prop.jpg" width="500px" />
<img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Component-with-state.jpg" width="500px" />
<p style="font-size: 8px">http://www.medianic.co.uk/stateful-vs-stateless-functional-components-in-react/</p>

<h4 id="styles"> Tyylit CSS:llä </h4>

<p>React Native käyttää CSS:ää, joka määritellään Javasript objektina. Pienenä erona CSS:ään React Nativessa tyylien nimet on kirjoitettu camelCase:nä. Esim: </p>
<p>const styles = StyleSheet.create({</p>
   <p> container: { </p>
    <p>    backgroundColor: '#FFFFFF',</p>
   <p>     paddingTop: 24</p>
   <p> } });</p>
   
<h4 id="styles"> CSS </h4>

<h3 id="asennus"> Ohjeet uuden projektin tekemiseen: </h3>

<h4>1. Asenna <a href="https://expo.io/">Expo CLI</a></h4>

        npm install -g expo-cli

<h4>2. Tehdään uusi React Native projekti. Tässä vaiheessa voi valita joko tyhjän tai tabs -projektin (jos aloittaa oman projektin niin suosittelen tyhjää) </h4>

        expo init TestProject

        cd TestProject
        

<h4>3. Yhdistä puhelin USB:llä (developer mode ja salli usb) tai avaa emulaattori </h4>

        Puhelin ja usb: 
              expo start --localhost –a
        Emulaattori: 
              expo start -a 
            
  Expon pitäisi bundlata ja avata sovellus puhelimeen automaattisesti.  

<h3 id="teht">Tehtävä: </h3>

1. a) Tee oma sovellus Reactilla. Voi ottaa mallia testisovelluksesta, mutta sen pitäisi olla itse tehty tyhjältä pohjalta. Sovellukseen tulee: 
    - Vähintään 3 komponenttia 
    - Navigointi vähintään 2 sivulle (Pitää asentaa react-navigation: npm install --save react-navigation) 
    - State ja props käytössä 
    
   Sovelluksen aihe on vapaa, mutta kannattaa valita joku aihe niin sovelluksen tekemisellä on selkeämpiä tavoitteita
   
2. Tee sovelluksesta .apk tai .ipa
  - expo build:android tai expo build:ios (https://docs.expo.io/versions/latest/distribution/building-standalone-apps)

</body>

</html>
