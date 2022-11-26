import Head from 'next/head';
import { FC } from 'react';
import styles from '../styles/Home.module.css';
import { xata } from '../common/utils/xata';
import AddPlantForm from '../components/AddPlantForm/AddPlantForm';

type Props = Awaited<ReturnType<typeof getServerSideProps>>['props'];

const Home: FC<Props> = ({ plants }) => {
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

export const getServerSideProps = async () => {
  let xataPlants = await xata.db.plants.getMany();
  let plantsString = JSON.stringify(xataPlants);
  let plants = JSON.parse(plantsString);

  return { props: { plants } };
};
export default Home;
