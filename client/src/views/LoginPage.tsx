import { useState } from 'react';
import '../assets/css/global.css';
import '../assets/css/pages/LoginPage.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [passWord, setPassword] = useState<string>("");
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const correctUserName = "emilieeast"
  const correctPassWord = "hemligt123"

  function onUserChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }

  function onPassWordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  // Not working atm
  function checkAuth() {
    if (userName === correctUserName && passWord === correctPassWord) {
      setAuthenticated(true);
      if (authenticated === true) {
        console.log("Authenticated!");
        return;
      } else {
        console.log("Not authenticated!");
      }
    }
  }

  return (
    <>
      <div className="page-container">
        <div className="credentials-container">
          <div>
            <p>username</p>
            <Input type="text" value={userName} onChange={onUserChange}/>
          </div>
          <div>
            <p>password</p>
            <Input type="password" name="password" value={passWord} onChange={onPassWordChange}/>
          </div>
          <Link to="/user">
            <button onClick={checkAuth}>Login</button>
          </Link>
        </div>
      </div>
    </>
  )
}

const Input = styled.input`
  border: solid 1px var(--color-light-theme);
  border-radius: 8px;
  height: 25px;
  padding: 0 7px;
`

export default LoginPage;