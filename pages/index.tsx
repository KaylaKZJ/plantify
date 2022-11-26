import Head from 'next/head';
import { FC } from 'react';
import styles from '../styles/Home.module.css';
import { xata } from '../common/utils/xata';
import AddPlantForm from '../components/AddPlantForm/AddPlantForm';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plantify</title>

        <meta name='description' content='A plant care app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <main className={styles.main}>
        <div className='text-center'>
          <h3 className='capitalize'>
            Add some plants below &amp; watch them thrive
          </h3>
        </div>
        <AddPlantForm />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
