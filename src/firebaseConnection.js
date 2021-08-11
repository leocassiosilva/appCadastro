import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyBThRDDY_7BlLfAIeHJAzZrtgB6qA2JmwA",
    authDomain: "meuapp-31377.firebaseapp.com",
    databaseURL: "https://meuapp-31377-default-rtdb.firebaseio.com",
    projectId: "meuapp-31377",
    storageBucket: "meuapp-31377.appspot.com",
    messagingSenderId: "1085799448237",
    appId: "1:1085799448237:web:459a1fbb52c2dede565024",
    measurementId: "G-L82G88NNV5"
  };
  
  if(!firebase.apps.length){
    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;