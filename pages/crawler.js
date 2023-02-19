import Layout from '../components/layout'
import Head from 'next/head'
import { useState } from 'react'

export default function Crawler() {

    const [links, setLinks] = useState([])

    return (
        <Layout>
            <Head>
                <title>Crawler</title>
            </Head>
            <div>
                <h1>Crawler</h1>
                <input type='url' className='form-control' />
                <button type="button" className="btn btn-primary my-1">Pesquisar</button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Titulo
                        </th>
                        <th>
                            Url
                        </th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link) => <MyRow key={link.id} data={link} />)}
                </tbody>
            </table>
        </Layout>
    )
}

function MyRow(props) {
    return (
        <tr>
            <td>{props.data.title}</td>
            <td>{props.data.url}</td>
            <td>
            </td>
        </tr>
    )
}