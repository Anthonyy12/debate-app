// DebateContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const DebateContext = createContext();

export const DebateProvider = ({ children }) => {
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [bloquearEnvio, setBloquearEnvio] = useState(false);
  const [preguntasAnteriores, setPreguntasAnteriores] = useState([]);

  const iniciarPregunta = (pregunta) => {
    if (!preguntaActual) {
      setPreguntaActual(pregunta);
      setTiempoRestante(10); // Puedes ajustar el tiempo aquí
      setBloquearEnvio(true);
    }
  };

  const responderPregunta = (respuesta) => {
    setRespuestas([...respuestas, respuesta]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante(tiempoRestante - 1);
      } else if (preguntaActual && respuestas.length < 2) {
        // Si no hay suficientes respuestas en el tiempo asignado, desbloquea el envío
        setBloquearEnvio(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [tiempoRestante, preguntaActual, respuestas]);

  return (
    <DebateContext.Provider
      value={{
        preguntaActual,
        tiempoRestante,
        iniciarPregunta,
        responderPregunta,
        preguntasAnteriores,
      }}
    >
      {children}
    </DebateContext.Provider>
  );
};

export const useDebate = () => {
  const context = useContext(DebateContext);
  if (!context) {
    throw new Error("useDebate debe ser utilizado dentro de un DebateProvides");
  }
  return context;
};
