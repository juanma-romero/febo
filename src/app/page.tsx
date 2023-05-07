import VideoFrame from '../app/VideoFrame';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      
      <h1 className='font-Pinot text-violeta text-4xl'>Febo</h1>
      <div className="bg-naranja h-8 w-15">
        <p className='text-amarillo font-ubuntu font-medium'>Comunicacion Facil</p>
      </div>
      <p className='font-ubuntu'>Conéctate con tus clientes</p>
      <p className='font-ubuntu'>Transmiti a tus clientes, el valor que ofreces. Juntos, podemos hacer que tu mensaje sea claro y efectivo</p>
        <VideoFrame />
        {/* video ask , con expliaccion de utilidad en cada caso*/}
        {/* chatbot dialog flow */}
        {/* chatbot gpt */}
      <h2 className='font-Pinot text-naranja'>Desarrollo web</h2>
        {/* texto */}
        {/* ejemplos */}
      <h2 className='font-Pinot text-naranja'>Marketing Digital</h2>
        {/* texto */}
        {/* ejemplos */}
        

    </main>
  )
}
