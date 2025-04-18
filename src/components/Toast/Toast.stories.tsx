import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
};

export default meta;

export const Variants: StoryObj<typeof Toast> = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toast message="Success message!" type="success" />
      <Toast message="Error message!" type="error" />
      <Toast message="Info message!" type="info" />
    </div>
  ),
};