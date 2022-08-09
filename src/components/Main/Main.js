import React from 'react'
import { useHistory } from "react-router-dom";

const Main = () => {
    const history = useHistory();
    return <div>THIS IS THE MAIN AUTH COMPONENT

      <button onClick={() => history.push("/auth/sign-in")}>Sign in</button>

      <button onClick={() => history.push("/auth/sign-up")}>Sign up</button>
    </div>
}
export default Main;