//CRUD

import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { bd, collDossiers, collUtil } from "./init";

//Ajouter un dossier 
export async function creer(idUtil, infoDossier){
    const idDossier = doc(collection(bd, collUtil, idUtil, collDossiers));
    await setDoc(idDossier, infoDossier);
    return idDossier;
}

//Lire les dossiers 
export async function lireTout(idUtil){
    const dossierFS = await getDocs(collection(bd, collUtil, idUtil, collDossiers));
    return dossierFS.docs;
}


//modifier un dossier
export async function modifier(idUtil, idDossier, infoDossier){

}

//supprimer un dossier
export async function supprimer(idUtil, idDossier){

}
