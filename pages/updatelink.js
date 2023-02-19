import Head from 'next/head'
import UpdateForm from '../components/updateform'
import Layout from '../components/layout';


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Atualizar Link</title>
      </Head>
      <UpdateForm/>
    </Layout>
  )

}
