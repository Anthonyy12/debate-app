import React from 'react';
import { useDebate } from '../DebateContext';
import PreguntasSection from './PreguntasSection';

const PaginaTablaPreguntas = () => {
	const { preguntaActual, tiempoRestante, preguntasAnteriores } = useDebate();

	return (
		<div>
			{/* Muestra las preguntas anteriores */}
			{preguntasAnteriores.length > 0 && (
				<div>
					<h2>Preguntas Anteriores:</h2>
					{preguntasAnteriores.map((pregunta, index) => (
						<div key={index} className="card">
							<h3>{pregunta.titulo}</h3>
							{/* Puedes agregar más detalles de la pregunta si es necesario */}
						</div>
					))}
				</div>
			)}

			{/* Muestra el formulario para la pregunta actual */}
			{preguntaActual && (
				<div>
					<h2>Pregunta Actual:</h2>
					<div className="card">
						<h3>{preguntaActual.titulo}</h3>
						<p>Tiempo Restante: {tiempoRestante}</p>
					</div>
				</div>
			)}

			{/* Nuevo componente para la creación de preguntas */}
			<PreguntasSection pregunta={preguntaActual} />
		</div>
	);
};

export default PaginaTablaPreguntas;
