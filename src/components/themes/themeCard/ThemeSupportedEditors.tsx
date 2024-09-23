const ThemeSupportedEditors = ({editors}: {editors: string[]}) => {
  return (
    <div>
      <p className="font-medium"><b>Supported Editors:</b></p>
      <ul className="list-disc list-inside">
        {editors.map((editor, editorIndex) => (
          <li key={editorIndex} className="list-none">{editor}</li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeSupportedEditors
