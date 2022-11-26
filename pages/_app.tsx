import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import store from '../common/store/store';
import { debounce } from 'debounce';
import { saveState } from '../common/utils/localStorage';
import { reduxState } from '../common/utils/redux';
import { Provider } from 'react-redux';

const theme = {
  global: {
    font: {
      size: '18px',
      height: '20px',
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  store.subscribe(
    debounce(() => {
      saveState(reduxState(), 'redux');
    }, 800)
  );

  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
