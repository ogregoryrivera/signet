import './FrmDossier.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FrmDossier({ouvert, setOuvert}) {

  function gererFermer() {
    setOuvert(false);
  };

  return (
    <div className='FrmDossier'>
      <Dialog open={ouvert} onClose={gererFermer}>
        <DialogTitle>Ajouter/Modifier Dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="titre"
            label="Titre du dossier"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="couverture"
            label="Image couverture du dossier"
            type="url"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={gererFermer}>Annuler</Button>
          <Button onClick={gererFermer}>Soumettre</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}