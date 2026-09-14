const personas = [
	{ value: 'analyst', label: 'The Analyst', description: 'Concise and evidence-led' },
	{ value: 'skeptic', label: 'The Skeptic', description: 'Caveats and assumptions' },
	{ value: 'teacher', label: 'The Teacher', description: 'Plain-language explanations' },
]

function PersonaSelector({ value, onChange }) {
	return (
		<label className="persona-selector">
			<span>Agent</span>
			<select value={value} onChange={(event) => onChange(event.target.value)}>
				{personas.map((persona) => (
					<option value={persona.value} key={persona.value}>
						{persona.label} - {persona.description}
					</option>
				))}
			</select>
		</label>
	)
}

export default PersonaSelector
