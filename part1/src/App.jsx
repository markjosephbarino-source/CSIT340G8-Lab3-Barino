
function App ()  {
  const course = 'CSIT340'
  const Part1 = {
    name: 'Introduction to React',
    units: 3
  }
  const Part2 = {
    name: 'DOM Tree',
    units: 3
  }
  const Part3 = {
    name: 'Output Tracing',
    units: 3
  }
 
  const total = Part1.units + Part2.units + Part3.units
 
 
  return (
    <div>
      <h1><b>Course:</b> {course}</h1>
      <p>{Part1.name} - {Part1.units} Units </p>
      <p>{Part2.name} - {Part2.units} Units </p>
      <p>{Part3.name} - {Part3.units} Units </p>
      <p>Total Amount of Units: {total}</p>
      <hr/>
    </div>
  )
 
}
 
export default App