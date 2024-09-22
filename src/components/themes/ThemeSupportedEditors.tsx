const ThemeSupportedEditors = ({editors}: {editors: string[]}) => {
  return (
    <div>
      <p className="font-medium">Supported Editors:</p>
      <ul className="list-disc list-inside">
        {editors.map((editor, editorIndex) => (
          <li key={editorIndex}>{editor}</li>
        ))}
      </ul>
    </div>
  )
}

export default ThemeSupportedEditors
