import React from 'react';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(username, email, password);

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        ></input>

        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        ></input>

        <button>Enviar</button>
      </form>

      <p style={{ wordBreak: 'break-all' }}>{token}</p>
    </div>
  );
};

export default TokenPost;
