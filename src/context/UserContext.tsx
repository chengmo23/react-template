import React, { useState, createContext, ReactNode, useContext, useEffect } from 'react'
import { Obj } from '../../shared/types/General'

export const UserContext = createContext<Obj>({})

type Props = {
  children: ReactNode
}

// an example of context hook
const UserProvider = ({ children }: Props): ReactNode => {
  const [state, setState] = useState({})

  const updateState = (newState: Obj): void => {
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  useEffect(() => {
    fetch('/user')
      .then((res) => res.json())
      .then((res) => setState(res))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // const initState = async () => {
  //   updateState({})
  // }

  return (
    <UserContext.Provider
      value={{
        ...state,
        updateState,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// Pull information from the data layer
export const useUserState = (): Obj => useContext(UserContext)

export default UserProvider
