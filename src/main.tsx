import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AppRouter from './router.tsx'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <StrictMode>
      <AppRouter/>
    </StrictMode>
  </MantineProvider>
)
