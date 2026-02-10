import React from 'react'

function Home() {
  return (
      <>
          <div
              style={{
                  backgroundColor: "#312e81",
                  display: "flex",
                  justifyContent: "center"
              }}
          >
              <div
                  style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      color: "white",
                      width: "100%",
                      maxWidth: "1280px",
                  }}
              >
                  <div
                      style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          alignItems: "center",
                          paddingTop: "1rem",
                          paddingBottom: "1rem"
                      }}
                  >
                      <h2
                          style={{
                            fontSize: "3rem",
                            fontWeight: "bold"
                          }}
                      >
                          Seja Bem Vinde!
                      </h2>

                      <p
                          style={{
                            fontSize: "1.25rem"
                          }}
                      >
                          Expresse aqui seus pensamentos e opiniões
                      </p>

                      <div
                          style={{
                              display: "flex",
                              justifyContent:"space-around",
                              gap:"1rem"
                          }}
                      >
                        <div
                            style={{
                                borderRadius: "0.5rem",
                                color:"white",
                                border:"2px solid white",
                                padding: "0.5rem 1rem"
                            }}
                        >
                            Nova Postagem

                        </div>  
                    </div>    
              </div>

              <div
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
              >
                  <img
                      src="https://media.licdn.com/dms/image/v2/D4E03AQFz24RHW8mI6g/profile-displayphoto-scale_400_400/B4EZszRx1aKoAg-/0/1766091857946?e=1772064000&v=beta&t=zW9wnG7vcTdEaXfXmmD5truFA3Uga3j8H-j7T_C0Kcs"
                      alt="Imagem Página Home"
                      style={{
                          width: "66%"
                      }}
                  />
             </div>
        </div>
    </div>
    </>
  )
}

export default Home