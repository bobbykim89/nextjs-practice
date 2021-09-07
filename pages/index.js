import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
          voluptatum inventore sunt aut doloremque aliquam porro fuga in,
          pariatur hic rerum, architecto fugiat eaque esse sequi sit debitis
          molestias!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa
          voluptatum inventore sunt aut doloremque aliquam porro fuga in,
          pariatur hic rerum, architecto fugiat eaque esse sequi sit debitis
          molestias!
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
