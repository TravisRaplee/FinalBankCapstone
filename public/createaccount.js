import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase-config';

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');  
  const ctx                     = React.useContext(UserContext); 
  const [user, setUser]         = React.useState('');


  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(data);
    })();
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" 
              className="form-control" 
              id="name" 
              placeholder="Enter name" 
              value={name} 
              onChange={e => setName(e.currentTarget.value)} />
              <br/>
              Email address<br/>
              <input type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={e => setEmail(e.currentTarget.value)}/>
              <br/>
              Password<br/>
              <input type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={e => setPassword(e.currentTarget.value)}/>
              <br/>
              <button type="submit" 
              className="btn btn-light" 
              onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" 
              className="btn btn-light" 
              onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}