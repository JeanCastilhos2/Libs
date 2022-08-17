import { useState, useEffect } from 'react';

const Paginacao = () =>{

  const [paginas,setPaginas] = useState()
  
  useEffect(() => {
          
    const fetchData = async () => {
   
    const data = await fetch('http://localhost:4567/livros/paginas');
     
    const json = await data.json();
    
    setPaginas(json);

  }
  fetchData()

  },[])

 
 

  return(
   <div>

   </div>
  )

}

export default Paginacao; 

