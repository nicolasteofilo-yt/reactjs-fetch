import { useState } from "react"

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
  const [users, setUsers] = useState();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      background: '#222'
    }}>
      <header>
        <h2>Usuários</h2>
      </header>
      <hr style={{
        margin: '15px 0',
        width: '300px',
      }} />
      <CardUser name="Nicolas" email="nicolasteofilo@gmail.com" username="nicolasteofilo" phone="(11) 1 1111-1111" />
      <CardUser name="Fulano" email="fulano@gmail.com" username="fulanociclano" phone="(11) 1 1111-1111" />
    </div>
  )
}

export default App
