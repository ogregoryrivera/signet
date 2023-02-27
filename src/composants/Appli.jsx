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
  const [dossiers, setDossiers] = useState(
    () => JSON.parse(localStorage.getItem('4pa-dossiers')) || []
  );

  useEffect(
    () => localStorage.setItem('4pa-dossiers', JSON.stringify(dossiers))
    , [dossiers]
  );

  function ouvrirFrmDossier() {
    setFrmDossierOuvert(true);
  }
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
          <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert}/>
          <Fab onClick={ouvrirFrmDossier} size="large" className="ajoutDossier" color="secondary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
  );
}
