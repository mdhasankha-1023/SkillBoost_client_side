import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function App() {


  return (
    <div>
      <h1 className="text-center font-bold text-4xl">This is SkillBoost learning based website</h1>

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    </div>
  )
}

export default App
