import UserContext from './components/UserContext'
import UserProfile from './components/UserProfile'

function App() {

  return (
    //2-Providing the context
    <UserContext.Provider value={{name: "Jane Doe", email: "jane.doe@example.com"}}>
      <div>
          <UserProfile />
      </div>
    </UserContext.Provider>
    
  )
}

export default App
