import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import nock from 'nock';
import axios from "axios";
axios.defaults.adapter = require('axios/lib/adapters/http')

test('should shows text', async () => {
  nock(`http://localhost:3333`)
  .post('/')
  .reply(200, { message: 'test', status: 200 })
  
  render(<App />);
  
  fireEvent.change(screen.getByTestId('uploadButton'), {
    target: { files: [{ name: 'test.nii' }] },
  })

  await waitFor(() => expect(screen.getByText('test')).toBeDefined()) 
});
