import { Fragment } from 'react/jsx-runtime'
import './App.css'
import { Job, Profile } from './components/Profile'

function App() {
  return (
    <Fragment>
      <Profile />
      <Job />
    </Fragment>
  )
}

export default App
