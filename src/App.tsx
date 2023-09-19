import { Button, TextField } from '@mui/material';
// import TextField from '@mui/material/TextField';
export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <TextField label='Hello World!' variant='outlined' />
      <Button variant='contained'>Start!</Button>
    </div>
  );
}
