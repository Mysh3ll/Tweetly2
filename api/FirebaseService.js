import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCZRDZ4eWrfO-Zjl1FiGYeCQNSONZgd5UA",
    authDomain: "mysh3ll-tweetly.firebaseapp.com",
    databaseURL: "https://mysh3ll-tweetly.firebaseio.com",
    projectId: "mysh3ll-tweetly",
    storageBucket: "mysh3ll-tweetly.appspot.com",
    messagingSenderId: "587180807408"
}
firebase.initializeApp(firebaseConfig)

export const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const auth = () => {
    return firebase.auth()
}

export const signout = () => {
    return firebase.auth().signOut()
}

export const getImagesFromFirebase = () => {

    return new Promise((resolve, reject) => {
        // Get a reference to the database service
        const database = firebase.database()
        let a = []

        database.ref('avatars').once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                a.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            resolve(a)
        })
    })
}

/**
 *
 * @memberof HomeScreen
 */
export const uploadAsByteArray = async (pickerResultAsByteArray, progressCallback) => {

    try {

        const metadata = {
            contentType: 'image/jpeg',
        }

        let name = new Date().getTime() + "-media.jpg"
        const storageRef = firebase.storage().ref()
        const ref = storageRef.child('avatars/' + name)
        let uploadTask = ref.put(pickerResultAsByteArray, metadata)

        uploadTask.on('state_changed', function (snapshot) {

            progressCallback && progressCallback(snapshot.bytesTransferred / snapshot.totalBytes)

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')

        }, function (error) {
            console.log("in _uploadAsByteArray ", error)
        }, function () {
            const downloadURL = uploadTask.snapshot.downloadURL
            console.log("_uploadAsByteArray ", uploadTask.snapshot.downloadURL)

            // save a reference to the image for listing purposes
            const ref = firebase.database().ref('avatars')
            ref.push({
                'URL': downloadURL,
                //'thumb': _imageData['thumb'],
                'name': name,
                //'coords': _imageData['coords'],
                // 'owner': firebase.auth().currentUser && firebase.auth().currentUser.uid,
                'when': new Date().getTime()
            })
        })


    } catch (ee) {
        console.log("when trying to load _uploadAsByteArray ", ee)
    }
}
