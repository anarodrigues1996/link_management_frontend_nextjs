import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import Router from 'next/router'

export default function deleteLink() {

    const router = useRouter()
    console.log(router.query)

    const id = router.query.id

    async function deleteOnApi(){
        const rawResponse = await fetch('http://127.0.0.1:3333/api/links/'+id, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        
          });
          const content = await rawResponse.json();
          console.log(content); 
          
          Router.push('/')

    }

  return (
    <Layout>
      <Head>
        <title>Eliminar Link</title>
      </Head>
      <div>
        <h1>Eliminar Link</h1>
        <p>Realmente pretende eliminar o link {id}?</p>
        <button className='btn btn-danger mx-1' onClick={deleteOnApi}>Sim</button>
        <Link href='/' className='btn btn-primary mx-1'>Nao</Link>
      </div>
    </Layout>
  )

}
