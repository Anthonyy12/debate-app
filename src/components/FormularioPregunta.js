import React, { useState } from "react";
import { useDebate } from "../DebateContext";

const FormularioPregunta = () => {
  const [nuevaPregunta, setNuevaPregunta] = useState("");
  const { iniciarPregunta } = useDebate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaPregunta.trim() !== "") {
      iniciarPregunta({ titulo: nuevaPregunta });
      setNuevaPregunta("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva Pregunta:
        <input
          type="text"
          id="pregunta"
          value={nuevaPregunta}
          onChange={(e) => setNuevaPregunta(e.target.value)}
        />
      </label>
      <button type="submit">Enviar Pregunta</button>
    </form>
  );
};

export default FormularioPregunta;
