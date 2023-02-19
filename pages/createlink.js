import Head from 'next/head'
import CreateForm from '../components/createform'
import Layout from '../components/layout';

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <CreateForm/>
    </Layout>
  )

}
