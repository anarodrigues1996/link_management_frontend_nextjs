import { useState, useEffect} from 'react'

function CreateLink() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const [formErrors, setFormErrors,] = useState({});

  const [isSubmit, setIsSubmit,] = useState(false);   

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

  async function sendData() {
    const rawResponse = await fetch('http://127.0.0.1:3333/api/links', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
        setTile: title

      })
    });
    const content = await rawResponse.json();
    console.log(content);

    setTitle('')
    setUrl('')

  }
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
     
    }
  }, [formErrors]);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div>
      {formErrors.title && <p className='text-danger'>{formErrors.title}</p>}
        <input
          type="text"
          placeholder='Titulo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
      {formErrors.url && <p className='text-danger'>{formErrors.url}</p>}
        <input
          type="text"
          placeholder='URL'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        </div>
        <button type="submit" >Criar</button>
      </form>
    </div>
  )
  }
export default CreateLink