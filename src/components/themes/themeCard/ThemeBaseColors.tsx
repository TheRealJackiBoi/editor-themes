const ThemeBaseColors = ({ colors }: { colors: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {colors.map((color, colorIndex) => (
        <div
          key={colorIndex}
          style={{ backgroundColor: color }}
          className="w-6 h-6 rounded-full"
        />
      ))}
    </div>
  )
}

export default ThemeBaseColors;
