import './styles/global.css'

import { Presetation } from './components/Presetation'
import { History } from './components/History'
import { Experience } from './components/Experience'
import { MyProject } from './components/MyProjects'

function App() {

   return (
      <div>
         <Presetation />
         <History />
         <Experience />
         <MyProject />
      </div>
   )
}

export default App
