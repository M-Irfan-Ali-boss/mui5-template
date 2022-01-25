import React from 'react'
import VerifyAccount from './Components/verifyAccount/verifyAccount'
import CreateAccount from './Components/createAccount/createAcoount'
import SigninEmail from './Components/signIn/emailEnter'
import SigninPass from './Components/signIn/passEnter'
import ChangePass from './Components/signIn/changePass'

function App() {
    return (
        <div>
            <CreateAccount/>
            <VerifyAccount/>
            <SigninEmail/>
            <SigninPass/>
            <ChangePass/>
        </div>
    )
}

export default App
