import React, {useState} from "react";
import { useDebate } from "../DebateContext";

const FormularioRespuesta = () => {
  const [nuevaRespuesta, setNuevaRespuesta] = useState("");
  const {responderPregunta} = useDebate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nuevaRespuesta.trim() !== "") {
      const nuevaRespuestaObj = {
        texto: nuevaRespuesta,
        fecha:new Date().toISOString()
      }
      responderPregunta(nuevaRespuestaObj);
      setNuevaRespuesta('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Respuesta:
        <input type="text" value={nuevaRespuesta} id="respuesta" onChange={(e) => setNuevaRespuesta(e.target.value)}/>
      </label>
      <button type="submit">Enviar Respuesta</button>
    </form>
  )
}

export default FormularioRespuesta