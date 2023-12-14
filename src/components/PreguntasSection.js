import React, { useState } from "react";
import { useDebate } from "../DebateContext";
import FormularioRespuesta from "./FormularioRespuesta";
import FormularioPregunta from "./FormularioPregunta";

const PreguntasSection = ({ pregunta }) => {
  const { responderPregunta } = useDebate();
  const [nuevaRespuesta, setNuevaRespuesta] = useState("");

  const handleResponderPregunta = () => {
    if (nuevaRespuesta.trim() !== "") {
      responderPregunta({ respuesta: nuevaRespuesta });
      setNuevaRespuesta("");
    }
  };

  return (
    <div>
      {pregunta && (
        <div>
          <h2>Pregunta:</h2>
          <div className="card">
            <h3>{pregunta.titulo}</h3>
            <FormularioRespuesta
              onResponderPregunta={handleResponderPregunta}
            />
          </div>
        </div>
      )}

      {/* Verificar si pregunta y pregunta.preguntasAnteriores están definidos */}
      {pregunta && pregunta.preguntasAnteriores && pregunta.preguntasAnteriores.length > 0 && (
        <div>
          <h2>Preguntas Anteriores:</h2>
          {pregunta.preguntasAnteriores.map((preguntaAnterior, index) => (
            <PreguntasSection
              key={index}
              pregunta={preguntaAnterior}
            />
          ))}
        </div>
      )}

      {/* Formulario para la nueva pregunta */}
      {!pregunta && (
        <div>
          <h2>Nueva Pregunta:</h2>
          <FormularioPregunta />
        </div>
      )}
    </div>
  );
};

export default PreguntasSection;
