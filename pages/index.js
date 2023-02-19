import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import CreateLink from './createlink'
import Listlink from './listlink'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Link manegement</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <div className="container">
        <Listlink/>
      </div>
    </div>
  )
}
