import './Entete.scss';
import Avatar from '@mui/material/Avatar';
import { auth } from '../code/init';

export default function Entete({utilisateur}) {

  function deconnexion(){
    auth.signOut();
  }

  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="utilisateur">
        {utilisateur.displayName}
        <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} />
        <button onClick={deconnexion}>Déconnexion</button>
      </div>
    </header>
  );
}