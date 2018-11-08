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
<p>React Nativella on Reactiin pohjautuva framework, jolla voi tehdä täysin natiiveja mobiilisovelluksia Adroidille ja iOS:lle käyttämällä JavaScriptiä. Se käyttää samoja käyttöliittymien rakennuspalikoita kuin natiivit sovellukset, mutta ne kasataan Javasciptillä. 
Koska React Nativella tehty käyttöliittymä on kokonaan natiivi, sen suoritusteho on parempi kuin esim. hybridisovellusten. 
</p>

<img src="https://d1eyrqnzwgnjjq.cloudfront.net/wp-content/uploads/2017/03/Image-1.png" width="600px" />
<p style="font-size: 8px">https://mentormate.com/blog/react-native-components/ </p>

<p>Reactin tapaan React Native koostuu komponenteista, joilla rakennetaan käyttöliittymä. Reactista poiketen React Native käyttää HTML elementtien sijaan natiiveja elementtejä kuten View ja Text, jotka ovat kuin html:n div ja p. Muuten se on hyvin samanlainen kuin React. </p>

<img src="https://appdividend.com/wp-content/uploads/2018/08/React-Native-Swiper-Component-Example.png" width="600px" />
<p style="font-size: 8px">https://appdividend.com/2018/08/13/react-native-swipe-components-example-tutorial/ </p>

<h2>Miten React Native toimii?</h2>

<p> Selaimessa toimiva React käyttää selaimen DOM:in (Document object model) sijaan omaa virtuaalista DOM:ia. Tämä päivittää React-sovelluksen automaattisesti päivittämättä selaimen sivua mutta renderöimällä muutoksen sen DOM:iin, ja päivittää vain ne osat, jotka ovat muuttuneet. </p>

<p> React Native käyttää natiiveja ohjelmointikieliä komponenttien renderöintiin. Tämä onnistuu "connector":lla, joka antaa Reactille rajapinnan mobiilikäyttöliittymien natiiveille UI-elementeille. </p>

<img src="http://qph.fs.quoracdn.net/main-qimg-3e10b8469def465ae0f2baac9b301c41" />

<h3 id="perus">React Nativen peruskäsitteitä </h3>

<h4 id="komps">Komponentit</h4>

<p>Reactissa kaikki käyttöliittymässä näkyvä sisältö koostuu komponenteista. Komponenteista koostuva rakenne sovelluksessa (kuvassa webbisovellus, mutta toimii React Nativessa samaan tapaan)</p>

<img src="https://image.slidesharecdn.com/reactcomponents-171006140740/95/react-components-lifecycle-react-tutorial-for-beginners-reactjs-training-edureka-5-638.jpg?cb=1507298999"  width="500px" />
<p style="font-size: 8px">https://www.slideshare.net/EdurekaIN/react-components-lifecycle-react-tutorial-for-beginners-reactjs-training-edureka</p>

<p> Hello World esimerkki React Native komponentista: </p>

    import React, { Component } from 'react';
    import { Text, View } from 'react-native';

    export default class HelloWorld extends Component {
      render() {
        return (
          <View>
            <Text>Hello world!</Text>
          </View>
        );
      }
    }

<p> Render metodi palauttaa komponentin kuvauksen ja React Native kasaa ja näyttää sen. </p>

<p>Omiin komponentteihin voi viitata toisesssa komponentissa yksinkertaisesti:</p>

      <HelloWorld />

<p>Tämä näyttäisi esimerkin "Hello World!" tekstin toisessa komponentissa</p>

<p>Tässä esimerkissä käytettiin View ja Text elementtejä, muita https://facebook.github.io/react-native/docs/components-and-apis </p>

<h4 id="propsstate">Reactin Props ja State </h4>

<p>Props (properties) lähetetään aina parent-komponentilta kun viitataan komponenttiin, ja sen ei tulisi muuttua enää komponentin sisällä.</p>

      <HelloWorld Message={'Hello'} />
      
Siihen viitataan komponentissa: {this.props.Message}

<img src="http://www.medianic.co.uk/wp-content/uploads/2017/11/Stateful-vs-Stateless-Component-Tutorial-Component-with-prop.jpg" width="500px" />

<p>State puolestaan on komponentin sisällä käytettävä, muuttuvaa dataa sisältävä ja se määritellään ennen render-metodia. </p>

        export default class HelloWorld extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                greeting: 'hello',
              };
            }

            render() {
              return (
                <Text>
                  {this.state.greeting}
                </Text>
              );
            }
          }


<img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Component-with-state.jpg" width="500px" />
<p style="font-size: 8px">http://www.medianic.co.uk/stateful-vs-stateless-functional-components-in-react/</p>

<h4 id="styles"> Tyylit CSS:llä </h4>

<p>React Native käyttää CSS:ää, joka määritellään Javasript objektina. Pienenä erona CSS:ään React Nativessa tyylien nimet on kirjoitettu camelCase:nä. Esim: </p>

    const styles = StyleSheet.create({
        container: { 
           backgroundColor: '#FFFFFF',
           paddingTop: 20
        } });
        
<h3 id="asennus"> Ohjeet uuden projektin tekemiseen: </h3>

<h4>1. Asenna <a href="https://expo.io/">Expo CLI</a></h4>

        npm install -g expo-cli

<h4>2. Tehdään uusi React Native projekti. Tässä vaiheessa voi valita joko tyhjän tai tabs -projektin (jos aloittaa oman projektin niin suosittelen tyhjää) </h4>

        expo init TestProject

        cd TestProject
        

<h4>3. Yhdistä puhelin USB:llä (developer mode ja salli usb) tai avaa emulaattori </h4>

        Puhelin ja usb: 
              expo start --localhost -a
        Emulaattori: 
              expo start -a 
            
  Expon pitäisi bundlata ja avata sovellus puhelimeen automaattisesti.  

<h3 id="teht">Tehtävä: </h3>

1. a) Tee oma sovellus Reactilla. Voi ottaa mallia testisovelluksesta, mutta sen pitäisi olla itse tehty tyhjältä pohjalta. Sovellukseen tulee: 
    - Vähintään 4 komponenttia 
    - Navigointi vähintään 2 sivulle (Pitää asentaa react-navigation: npm install --save react-navigation) 
    - State ja props käytössä 
    - Laita elementeille tyylejä
    
   Sovelluksen aihe on vapaa.
   
2. Tee sovelluksesta .apk tai .ipa
  - expo build:android tai expo build:ios (https://docs.expo.io/versions/latest/distribution/building-standalone-apps)

</body>

</html>
