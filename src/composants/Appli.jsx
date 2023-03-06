import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import FrmDossier from './FrmDossier';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

export default function Appli() {
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  // État des dossiers de l'utilisateur
  /*
  [
    {
      id:'34030', 
      titre: 'Politique et économie', 
      couverture: 'http://jviejwifjemwefkm.com/', 
      couleur: '#600', 
      dateModif: '2023-03-01t12:43:67.234z'
    },
    {
      id:'6546', 
      titre: 'Poire à lavement', 
      couverture: 'http://jviejwifjemwefkm.com/', 
      couleur: '#600', 
      dateModif: '2023-03-01t12:43:67.234z'
    }
  ] 
  
  */
  const [dossiers, setDossiers] = useState(
    () => JSON.parse(localStorage.getItem('4pa-dossiers')) || []
  );

  useEffect(
    () => localStorage.setItem('4pa-dossiers', JSON.stringify(dossiers))
    , [dossiers]
  );

  function ajouterDossier(id, titre, couverture, couleur, timestamp){ 
    setDossiers([...dossiers,
      {
        id:id,
        titre:titre,
        couverture:couverture,
        couleur:couleur,
        dateModif:timestamp
      }
    ])
  }

  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers dossiers={dossiers} setDossiers={setDossiers} />
          <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert} actionDossier={ajouterDossier}/>
          <Fab onClick={()=>setFrmDossierOuvert(true)} size="large" className="ajoutDossier" color="secondary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
  );
}
