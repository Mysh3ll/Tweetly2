import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
}
firebase.initializeApp(firebaseConfig)

// A method to passs the username and password to firebase and log to the user account
export const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

// A method to passs the username and password to firebase and make a new user account
export const signup = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const auth = () => {
    return firebase.auth()
}

// A method of firebase to logout an user
export const signout = () => {
    return firebase.auth().signOut()
}

// A method of firebase to get all images from database
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
// A method of firebase to upload the user avatar (image)
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
