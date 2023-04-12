import './PageUtilisateur.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import FrmDossier from './FrmDossier';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { creer } from '../code/dossier-modele';

export default function PageUtilisateur({utilisateur}) {
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  const [dossiers, setDossiers] = useState([]);

  /*const [dossiers, setDossiers] = useState(
    () => JSON.parse(localStorage.getItem('4pa-dossiers')) || []
  );*/

  useEffect(
    () => localStorage.setItem('4pa-dossiers', JSON.stringify(dossiers))
    , [dossiers]
  );

  async function ajouterDossier(titre, couverture, couleur, dateModif){ 
    //À complété  
    const dossierData = {titre, couverture, couleur, dateModif};
    const idDossier = await creer(utilisateur.uid, dossierData);
    setDossiers([...dossiers, {id:idDossier, ...dossierData}]);
    //creer(utilisateur.uid, dossierData).then(
    //  (idDossier) => setDossiers([...dossiers, {id:idDossier, ...dossierData}])
    //);
    }
    

    /*setDossiers([...dossiers,
      {
        id:id,
        titre:titre,
        couverture:couverture,
        couleur:couleur,
        dateModif:timestamp
      }
    ])*/
  

  return (
    <div className="PageUtilisateur">
        <Entete utilisateur={utilisateur}/>
        <section className="contenu-principal">
          <ListeDossiers utilisateur={utilisateur} dossiers={dossiers} setDossiers={setDossiers} />
          <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert} actionDossier={ajouterDossier}/>
          <Fab onClick={()=>setFrmDossierOuvert(true)} size="large" className="ajoutDossier" color="secondary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
  );
 }

