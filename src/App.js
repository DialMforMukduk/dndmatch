import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The inital commit. Part 1. Testing CI/CD with github and amplify rn.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
