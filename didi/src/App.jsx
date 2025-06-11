function App() {
  function getdate()
  {
    const date = new Date();    
    return date.toLocaleDateString('ko-KR') + ' ' +  date.toLocaleTimeString('ko-KR');
  }

  return (
    <>
      <button>출/퇴근</button>
      {getdate()}
    </>
  )
}

export default App
