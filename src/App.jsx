import { useState, useEffect } from "react"

function CardUser({ name, email, username, phone }) {
  return (
    <div style={{
      width: '300px',
      padding: '5px',
      border: '2px solid #c6c6c6',
      borderRadius: '6px',
      marginBottom: "10px"
    }}>
      <span><i style={{  fontWeight: 'bold' }}>{name}: </i>{email}</span>
      <br />
      <span>{username} - {phone}</span>
    </div>
  )
}

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(users)

  async function loadUsers() {
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      mehod: 'GET',
    })
    const data = await response.json();
    setIsLoading(false);
    setUsers(data);
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#222'
    }}>
      <header style={{
        display: 'flex'
      }}>
        <h2>Usuários</h2>
        <button
          style={{
            border: '2px solid black',
            borderRadius: '6px',
            marginLeft: '5px',
            padding: '5px',
            cursor: 'pointer'
          }}
          onClick={loadUsers}
        >
          Regarregar
        </button>
      </header>
      <hr style={{
        margin: '15px 0',
        width: '300px',
      }} />
      {isLoading ? <h2>Carreando...</h2> : users.map((user) => <CardUser name={user.name} email={user.email} phone={user.phone} username={user.username} />)}
    </div>
  )
}

export default App
