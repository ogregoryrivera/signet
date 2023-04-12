import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, bd } from '../code/init';
import Accueil from './Accueil';
import './Appli.scss';
import PageUtilisateur from './PageUtilisateur';

export default function Appli(){
    //État de connexion d'un utilisateur
    const [utilisateur, setUtilisateur] = useState(null);
    
    useEffect(
        () => onAuthStateChanged(auth, util => {
            if(util){
                //Créer le document correspondant à cet utilisateur dans Firestore
                setDoc(doc(bd, 'utilisateur-signet', util.uid), {
                    nom: util.displayName,
                    courriel:util.email,
                    avatar:util.photoURL
                }, {merge: true});
            }
            setUtilisateur(util);
            console.log("Utilisateur retourné par Auth", util)
        }),
        []
    );

    return(
        
            utilisateur ? <PageUtilisateur utilisateur={utilisateur}/> : <Accueil />
        
    );
}