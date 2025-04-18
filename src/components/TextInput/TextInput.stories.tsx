// src/components/TextInput/TextInput.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

// Define your story metadata
const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput', // Title path in Storybook's sidebar
  component: TextInput,          // Component to be rendered
};

export default meta; // Default export

// Now define individual stories
export const Default: StoryObj<typeof TextInput> = {
  args: {
    label: 'Enter text',
    placeholder: 'Type something...',
  },
};
