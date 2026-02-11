function Home() {
  return (
      <>
          <div className='bg-indigo-900 flex justfy-center'>
              <div className='container grid grid-cols-2 text-white'>
                  <div className='flex flex-col gap-4 items-center justify-center py-4'>
                      <h2>
                          Seja Bem Vinde!
                      </h2>
                      <p className='text-xl'>
                          Expresse aqui seus pensamentos e opiniões
                      </p>

                      <div className='flex justify-around gap-4'>
                        <div className='rounded text-white
                                        border-white border-solid border-2 py-2 px-4'
                            >
                            Nova Postagem
                        </div>  
                    </div>    
              </div>

              <div className='flex justify-center'>
                  <img
                      src="https://media.licdn.com/dms/image/v2/D4E03AQFz24RHW8mI6g/profile-displayphoto-scale_400_400/B4EZszRx1aKoAg-/0/1766091857946?e=1772064000&v=beta&t=zW9wnG7vcTdEaXfXmmD5truFA3Uga3j8H-j7T_C0Kcs"
                      alt="Imagem Página Home"
                      className='w-2/3'
                  />
             </div>
        </div>
    </div>
    </>
  )
}

export default Home