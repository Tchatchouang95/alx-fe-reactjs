import UserContext from './components/UserContext'
import ProfilePage from './components/ProfilePage'

function App() {

  return (
    //2-Providing the context
    <UserContext.Provider value={{name: "Jane Doe", email: "jane.doe@example.com"}}>
      <div>
          <ProfilePage />
      </div>
    </UserContext.Provider>
    
  )
}

export default App
