function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState('0');
  const [newBalance, setNewBalance]= React.useState('0');
  const [depositAmount, setDepositAmount] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function validate(depositAmount) {
    if(!depositAmount) {
      setStatus('Enter dollar amount');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if(isNaN(depositAmount)) {
      setStatus('Dollar amount only');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if(depositAmount < 0) {
      setStatus("Invalid amount");
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

function handleCreate(){
  console.log(depositAmount);

  fetch(`/account/update/${depositAmount}`)
            .then(response => response.json())

  if (!validate(depositAmount)) return;
  ctx.users.push({balance});
  setBalance(newBalance * 1 + depositAmount * 1)
  setNewBalance(balance * 1 + depositAmount * 1)
  setShow(false);
}

  function clearForm(){
    setDepositAmount('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              <h5>Balance: ${balance}</h5>
              <br/>
              Enter Deposit Amount<br/>
              <input type="deposit" className="form-control" id="deposit" placeholder="$0.00" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
              </>
            ):(
              <>
              <h5>${depositAmount}Deposited</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
              </>
            )}
    />
  )
}