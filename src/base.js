import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQfXaamM6K5gn1O2gDywv8kk9TWYtNjmw",
  authDomain: "cookbook-f7a12.firebaseapp.com",
  databaseURL: "https://cookbook-f7a12-default-rtdb.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
