import './ListeDossiers.scss';
import Dossier from './Dossier';
import { initializeApp } from 'firebase/app';
import { collection,doc,getDocs, getFirestore, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import firebaseConfig from '../code/fb-config';


export default function ListeDossiers({dossiers,setDossiers}) {

  function observerDossier(){
    const app = initializeApp(firebaseConfig);
    const bd = getFirestore(app);
    onSnapshot(collection(bd, 'dossiers'), 
      resultat => setDossiers(resultat.docs.map(
        doc => ({id: doc.id, ...doc.data()})
      ))
    );
  }

  function chercherDossier(){
    const app = initializeApp(firebaseConfig);
    const bd = getFirestore(app);
    const dossierFS = getDocs(collection(bd, 'dossiers')).then(
      resultat => setDossiers(resultat.docs.map(
        doc => ({id: doc.id, ...doc.data()})
      ))
    )
    
  }

  useEffect(observerDossier, []);

  /**
   * Supprime un dossier de la collection
   * 
   * @param String idd : identifiant du dossier
   * @returns void
   */
  function supprimerDossier(idd){
    setDossiers(dossiers.filter(dossier => dossier.id !== idd));
  }

  function modifierDossier(idd, titre, couverture,couleur, timestamp){
    setDossiers(dossiers.map(
      dossier=>{
        if(dossier.id === idd){
          return({
            id: dossier.id, 
            titre: titre, 
            couverture: couverture,
            couleur: couleur,
            dateModif: timestamp
          });
        }
        return dossier;
      }
    ));
  }

  return (
    dossiers.length>0 ?

    <section className="ListeDossiers">
      {
        dossiers.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          // On en parle en classe ;-)
          dossier =>  <Dossier key={dossier.id} {...dossier} supprimerDossier={supprimerDossier} modifierDossier={modifierDossier} />
          
        )
      }
    </section>
    :
      <div className='aucun-dossier'>Aucun dossier</div>
  );
}