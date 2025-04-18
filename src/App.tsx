import { Typography } from './components/Typography/Typography';
import { TextInput } from './components/TextInput/TextInput';
import { Toast } from './components/Toast/Toast';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  return (
    <div className="p-4 space-y-4">
      <Typography variant="h1">Design System Demo</Typography>
      <TextInput
  label="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
/>

      <Toast message="Welcome to the design system!" type="info" />
    </div>
  );
}

export default App;