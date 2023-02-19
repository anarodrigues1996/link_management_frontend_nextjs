import { useState, useEffect } from 'react'

function Listlink () {
  const [isLoading, setLoading] = useState(false)
  const [links, setLinks] = useState([])

  async function getLinks()
  {
    setLoading(true)
    const response = await fetch('http://localhost:3333/api/links')
    const data = await response.json()

    console.log(data)

    setLoading(false)
    setLinks(data)
  }

  useEffect(()  => {
    getLinks()
  }, [])

  return (
    <div>
      <br/>
      <h3 className='text-center'>Meus Links</h3>
      <br/>
      {
        isLoading && <p className="text-center">Carregando...</p>
      }
      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Titulo
            </th>
            <th>
              Url
            </th>
            <th>
              Criado em
            </th>
            <th>
              Atualizado em
            </th>
            <th>
              Acçoes
            </th>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => <MyRow key={link.id} data={link} />)}
        </tbody>
      </table>
    </div>
  )
}

function MyRow(props)
{
  return (
    <tr>
      <td>{ props.data.id }</td>
      <td>{ props.data.title }</td>
      <td>{ props.data.url }</td>
      <td>{ props.data.created_at }</td>
      <td>{ props.data.updated_at }</td>
      <td>

      </td>
    </tr>
  )
}

export default Listlink