import { useState, useEffect} from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'

function UpdateForm() {

  const [isLoading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const [formErrors, setFormErrors,] = useState({});

  const [isSubmit, setIsSubmit,] = useState(false);   

  const router = useRouter()
  console.log(router.query)

  const id = router.query.id

  const handleSubmit =(e)=>{
    e.preventDefault()
    //setIsSubmit(true);

    const errors ={};
    const regex ='^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&\(\)\*\+,;=.]+$'

    if(!title){
      errors.title='Campo titulo Obrigatorio';
      setFormErrors(errors);
      return;
    }

    if(!url){
      errors.url='Campo url Obrigatorio'
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    sendData();
  }

  async function getLink()
  {
    setLoading(true)
    const response = await fetch('http://localhost:3333/api/links/'+id)
    const data = await response.json()

    console.log(data)

    setLoading(false)

    setTitle(data.title)
    setUrl(data.url)
  }

  useEffect(()  => {
    getLink()
  }, [])

  async function sendData() {
    const rawResponse = await fetch('http://127.0.0.1:3333/api/links/' +id,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
        title: title

      })
    });
    const content = await rawResponse.json();
    console.log(content);

    setTitle('')
    setUrl('')

    Router.push('/')

  }
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
     
    }
  }, [formErrors]);

  return (
    <div className='container'>
        <br/>
        <h3 className='text-center'>Actualizar Link</h3>
        <br/>

      <form onSubmit={handleSubmit}>
      <div>
      {formErrors.title && <p className='text-danger'>{formErrors.title}</p>}
        <input
          className="form-control"
          type="text"
          placeholder='Titulo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
      {formErrors.url && <p className='text-danger'>{formErrors.url}</p>}
        <input
            className="form-control my-2"
          type="text"
          placeholder='URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        </div>
        <a href='../components/listLink'>
        <button type="submit" className="btn btn-primary">Actualizar</button>
        </a>
        
      </form>
    </div>
  )

}

export default UpdateForm