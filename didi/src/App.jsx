function App() {
  function getdate()
  {
    const date = new Date();    
    return date.toLocaleDateString('ko-KR') + ' ' +  date.toLocaleTimeString('ko-KR');
  }

  return (
    <>      
      {getdate()}
    </>
  )
}

export default App
