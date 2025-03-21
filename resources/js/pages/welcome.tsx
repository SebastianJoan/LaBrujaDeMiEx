import React from 'react'

//Componentes
import Navbar from '../components/Navbar'

//Images
import Image from '../../../public/img/ella y yo.png'

export default function welcome() {
  return (
    <main>
      <Navbar/>
      <section id='Home' className='w-full h-auto bg-[#8D4DFA] flex flex-col'>
          <div className='w-full h-auto flex flex-row justify-center items-center gap-2 px-32 py-16'>
            <div className='w-1/2'>
              <h3 className='text-5xl' style={{fontFamily: 'Neulis-Black'}}>
                Descubre el <b>misterio</b>, la
                <b>magia</b> y el <b>suspenso</b> de
                <span className='text-white'>‘la bruja de mi ex’</span>
              </h3>
            </div>
            <div className='w-1/2 h-[380px]'>
              <img src={Image} alt="Image" className='w-full h-full object-cover'/>
            </div>
          </div>
          <div className='w-full h-[570px] bg-white'>

          </div>
      </section>
      <section className='w-full h-[900px] bg-[#000] flex flex-col justify-start items-center px-32 py-8'>
        <div className='w-full h-auto px-4 py-2 border-b-2 border-white'>
          <h2 className='text-white'>El Cortometraje</h2> 
        </div>
        <br />
        <div className='w-full h-[400px] bg-red-500 flex '>
          <div className='w-1/2 h-full bg-yellow-500 flex flex-col justify-center items-center px-8'>
            <h2 className='text-4xl text-center'>
              La historiaque te
              atrapará desde la
              primera página
            </h2>
            <div className='bg-[#8D4DFA] rounded-md justify-start items-start w-[200px] p-8'>
              Compra tu ejemplar
              hoy mismo: <span className='text-white'>Adquirir
              en Amazon</span>
            </div>
          </div>
          <div className='w-1/2 h-full bg-blue-500 flex flex-col justify-start items-start p-8'>
            <p>
              "La Bruja de Mi Ex" es una novela que fusiona el romance
              con lo paranormal. Un protagonista atrapado en un
              triángulo amoroso donde la magia negra juega un papel
              crucial. Secretos ocultos, deseos inconfesables y un final
              que nadie espera.
              Autor: Yesid Ricardo Rengifo
              Género: Suspenso | Romance | Fantasía
              Disponible en: Formato físico y digital en Amazon
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
