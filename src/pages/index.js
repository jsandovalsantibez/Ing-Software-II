import * as React from "react"
import Layout from "../components/layout"
import * as style from "../components/style.css"

const IndexPage = () => (
  <Layout>
    <div className={style}></div>
    <header class="content header">
      <h2 class="title1">Escuela Unión Española</h2>
      <p>“Jugar para aprender y aprender a jugar”</p>
      <div class="btn-home">
        <a href="#" class="btn">Saber mas</a>
      </div>
    </header>
    <section class="content sau">
      <h2 class="title">Contextualización</h2>
      <p>La empresa “Escuela de Fútbol Unión Española Maipú”, ubicada en Teniente Merino 3495,
        Maipú, el club deportivo cañón alonso, se puede contactar por número de contacto 
        +56974521026, por el correo escuelafuemaipu@gmail.com, y también por las redes sociales 
        como Facebook (https://www.facebook.com/escuelafuemaipu) e Instagram (https://www.instagram.com/escuelafuemaipu/?hl=es).
      </p>
      <div class="box-container">
        <div class="box">
          <i class="fab fa-angular"></i>
          <h3>Lorem</h3>
          <p>labore molestias consectetur veniam</p>
        </div>
        <div class="box">
          <i class="fab fa-apple"></i>
          <h3>Lorem</h3>
          <p>labore molestias consectetur veniam</p>
        </div>
        <div class="box">
          <i class="fab fa-android"></i>
          <h3>Lorem</h3>
          <p>labore molestias consectetur veniam</p>
        </div>
      </div>
    </section>
    <section class="content about">
        <h2 class="title">Nosotros</h2>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Ut soluta similique 
            quia reprehenderit eligendi aliquam. Sit 
            odio impedit quibusdam. Velit corporis, 
            optio debitis quidem ex ipsam rerum dolorem autem sequi.
        </p>
        <a href="#" class="btn">Saber mas</a>
    </section>
    <section class="content price">
      <article class="contain">
        <h2 class="title">Precio</h2>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Ut soluta similique 
            quia reprehenderit eligendi aliquam. Sit 
            odio impedit quibusdam. Velit corporis, 
            optio debitis quidem ex ipsam rerum dolorem autem sequi.
          </p>
          <a href="#" class="btn">Saber precio</a>
      </article>
    </section>
    <section class="content contact">
      <h2 class="title">Contacto y Ubicación</h2>
      <p>La empresa “Escuela de Fútbol Unión Española Maipú”, ubicada en Teniente Merino 3495,
        Maipú, el club deportivo cañón alonso, se puede contactar por número de contacto 
        +56974521026, por el correo escuelafuemaipu@gmail.com, y también por las redes sociales 
        como Facebook (https://www.facebook.com/escuelafuemaipu) e Instagram (https://www.instagram.com/escuelafuemaipu/?hl=es).
      </p>
    </section>
    
    </Layout>
)
export default IndexPage

export const Head = () => <title>Home Page</title>