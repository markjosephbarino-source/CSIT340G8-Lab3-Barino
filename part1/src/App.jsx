const App = () => {
  const course = 'CSIT340'
  const part1 = 'Introduction to React'
  const exercises1 = 3
  const part2 = 'DOM Tree'
  const exercises2 = 4
  const part3 = 'Output Tracing'
  const exercises3 = 10

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App