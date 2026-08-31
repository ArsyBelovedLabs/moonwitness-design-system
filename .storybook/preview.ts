import type { Preview } from '@storybook/react-vite'
import '../src/styles/tokens.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    a11y: { test: 'todo' },
    backgrounds: {
      default: 'obsidian',
      values: [
        { name: 'obsidian', value: '#07090c' },
        { name: 'ivory', value: '#f3efe7' }
      ]
    }
  }
}

export default preview
