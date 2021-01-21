import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Wallet from './index';
import {Provider} from "react-redux"
import store from "../../store"

describe('Page', () => {
    test('It is pointing to the right url', () => {
      render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/carteira"]}>
                <Wallet />
            </MemoryRouter>
        </Provider>
      );
    });
  });