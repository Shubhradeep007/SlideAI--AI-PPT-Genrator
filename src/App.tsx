
import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './routing/Router'
import { Toaster } from 'sonner'
import { UserDetailContext } from './hooks/context/UserDetailContext'
import { useState } from 'react'

function App() {

  const [userDetail, setUserDetail] = useState()

  return (
    <>
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}> 
      {/* <Toaster position='top-right' /> */}
      <RouterProvider router={Router} />
      </UserDetailContext.Provider>
    </>
  )
}

export default App
