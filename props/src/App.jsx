import React from 'react'
import Card from './components/card'


const App = () => {
  return (
    <div className="parent">
      <Card user='suraj' age={18} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ahvDQT-l10o_88OQc9unRCedKes3nKftVWoFooLy6-KQiyET33F-Swtm&s=10" />
      <Card user='Alok' age={19} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk6frdxvPvtGAWyL-LLTURPu-CM92ypngthGUdirTQg&s=10" />
      <Card user='Ravi' age={20} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9FqD8rqyNtMGlC8YS3LwI5_fUxRKIAfi9zcQZPAVUA&s=10" />
    </div>


  )
}

export default App