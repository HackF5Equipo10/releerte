import { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'test@test.com' && password === '123') {
      const user = {
        id: 1,
        email: email
      };
      handleLogin(user);
      setLoggedIn(true);
    }
  };
  if (loggedIn) {
    return <Link to="/order" />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Login Form
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
