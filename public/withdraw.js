function Withdraw(){
    const [show, setShow] =React.useState(true);
    const [status, setStatus] =React.useState('');
    const [balance, setBalance] =React.useState('1100');
    const [newBalance, setNewBalance] =React.useState('1100');
    const [withdrawalAmount, setWithdrawalAmount] =React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(withdrawalAmount){
        if(isNaN(withdrawalAmount)) {
            setStatus('Dollar amount only');
            setTimeout(()=> setStatus(''), 3000);
            return false;
        }
        if(!withdrawalAmount) {
            setStatus('Enter dollar amount')
            setTimeout(()=> setStatus(''),3000);
            return false;
        }
        if(withdrawalAmount > balance) {
            setStatus('Insufficient funds');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if(withdrawalAmount > newBalance) {
            setStatus('Insufficient funds');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        
        return true;
    }

    function handleCreate(){
        console.log(withdrawalAmount);

        fetch(`/account/update/-${withdrawalAmount}`)
            .then(response => response.json())

        if(!validate(withdrawalAmount)) return;
        ctx.users.push({balance});
        setBalance(newBalance * 1 - withdrawalAmount * 1)
        setNewBalance(balance * 1 - withdrawalAmount * 1)
        setShow(false);
    }
    function clearForm(){
        setWithdrawalAmount('');
        setShow(true);
    }

    return (
        <Card
        bgcolor="danger"
        header="Withdraw"
        status={status}
        body={show?(
            <>
            <h5>Balance: ${balance}</h5>
            <br/>
            Enter Withdrawl Amount<br/>
            <input type="number-input" className="form-control" id="amount" placeholder='$0.00' value={withdrawalAmount} onChange={e => setWithdrawalAmount(e.currentTarget.value)} /> <br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
            </>
        ):(
            <>
            <h5>${withdrawalAmount}Withdrawn</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Back</button>
            </>
        )}
        />
    )
}