function Home(){
    return (
        <Card
        bgcolor="info"
        txtcolor="white"
        header={<h3>Your Bank</h3>}
        title="Welcome."
        text="Your bank at your fingertips."
        body={(<img src="/img/bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );  
  }