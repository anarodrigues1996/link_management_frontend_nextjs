import Head from 'next/head'
import Listlink from '../components/listlink'
import Layout from '../components/layout';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Listlink/>
    </Layout>
  )

}
