import React from "react";

const LadingPage = () => {
  return (
    <div>
      <h2>
        ¿Quiénes somos?
      </h2>
      <p>
        R-Wash es un sistema innovador y fresco a tu alcance en el que podrás encontrar los
        mejores carwash a tu alrededor con ofertas y disponibilidad en tiempo real. Nuestro
        equipo trabaja constantemente en el diseño y desarrollo del mejor sistema de reservas
        para ti.
      </p>
      <h2>
        Objetivo
      </h2>
      <p>
        Nuestro objetivo es brindar a nuestros usuarios una organización y planeamiento optimo 
        respecto a la gestión de reservas en un local de atención afiliado al sistema.
      </p>
      <h2>
        Misión
      </h2>
      <p>
        Nuestra misión es ser una plataforma digital en la que clientes puedan tener a su disposición
        los mejores servicios cercanos a su posición, impulsar y visibilizar el consumo de negocios 
        locales por medio de ofertas en tiempo real.
      </p>
      <h2>
        Visión
      </h2>
      <p>
        Nuestra visión es adaptar nuestro modelo de negocio para expandirlo a todo tipo de servicios a pequeña, mediana y gran escala. Brindar indistinguidamente al consumidor la mejor elección cercana en un área delimitada, promoviendo la igualdad de consumo en negocios.
      </p>
      <img className='HeaderIndexLogo' src={require('../imagenes/CodingInProgress.png')} alt={'CodingInProgress'} />
    </div>
  );
};

export default LadingPage;