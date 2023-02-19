import Head from 'next/head'
import Listlink from '../components/listlink'
import Layout from '../components/layout';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Listar Links</title>
      </Head>
      <Listlink/>
    </Layout>
  )

}
