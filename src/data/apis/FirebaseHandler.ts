import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { firebaseFirestorePath } from 'constants/apis';
import FireStoreUserResponse from 'models/FireStoreUserResponse';

class FirebaseHandler {
    addUserName = async (mail: string, name: string): Promise<any> => 
        await firestore().collection(firebaseFirestorePath).doc(mail).set({name: name})

    getUserName = async (mail: string): Promise<FireStoreUserResponse> => 
        (await firestore().collection(firebaseFirestorePath).doc(mail).get()).data();
    
    login = async (mail: string, password: string): Promise<any> => {
        await auth().signInWithEmailAndPassword(mail, password)
    }

    signup = async (mail: string, password: string): Promise<any> => {
        await auth().createUserWithEmailAndPassword(mail, password)
    }

    logout = () => auth().signOut().then(() => console.log('User signed out!'));
}

export default new FirebaseHandler();