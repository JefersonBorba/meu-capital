import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Dashboard from './index';
import {Provider} from "react-redux"
import store from "../../store"

describe('Header', () => {
    test('It is pointing to the right url', () => {
      render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/dashboard"]}>
            <Dashboard />
            </MemoryRouter>
        </Provider>
      );
    });
  });