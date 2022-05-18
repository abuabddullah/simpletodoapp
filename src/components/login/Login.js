import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { MdSpeakerNotes } from "react-icons/md";

const Login = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        signOut(auth);
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate("/");
    }
    return (
        <div><h1 className="text-warning p-5">Simple Todo App <span className='text-danger'> <MdSpeakerNotes /></span></h1>
        <code>Login in first</code>
            <div className="d-grid gap-2 w-25 mx-auto my-5 py-5">
                <Button
                    onClick={() => signInWithGoogle()}
                    variant="primary" size="lg">
                    Google Login
                </Button>
            </div>
        </div>
    );
};

export default Login;