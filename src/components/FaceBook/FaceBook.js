import React from 'react';
import { useAuthState, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const FaceBook = () => {
    const [user]=useAuthState(auth)
    const [signInWithFacebook, fbUser, loading, error] = useSignInWithFacebook(auth);

    const handleFb=()=>{
        signInWithFacebook()
        .then(res=>{
            console.log('success')
        }).catch(error=>{
            console.log(error)
        })
    }
    console.log(fbUser)
    console.log(user)
    return (
        <div>
            <button onClick={handleFb}>FaceBook</button>
        </div>
    );
};

export default FaceBook;