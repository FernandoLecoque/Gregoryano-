import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>

        <img src="logo.png" alt="Logo" />
      </div>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>👤</span>
          <input
            type="text"
            placeholder="Usuário"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>🔒</span>
          <input
            type="password"
            placeholder="Senha"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Conecte se</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#b2f5a6',
    fontFamily: 'Arial, sans-serif',
  },
 
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '5px',
  },
  icon: {
    fontSize: '16px',
    margin: '0 10px',
    color: '#888',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2b2b7e',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;