function AllData() {
  const ctx = React.useContext(UserContext);
  const data = ctx.users;
  const tableCells = data.map((item) =>
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.balance}</td>
    </tr>
  );
  return (
    <>
      <h1>All Data</h1>
      <table className="table text-white">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {tableCells}
        </tbody>
      </table>
    </>
  );
}