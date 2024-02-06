import { UserProvider, useUser } from "./UserContext";
import "./App.css";

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Lorem Ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit
        aliquam consectetur asperiores ducimus eaque tempora fugiat, quos
        voluptate quas illum! Laborum natus corporis sequi non est repudiandae
        totam distinctio!
      </p>
      <p>Written by: {user.name}</p>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Header />
      <Page />
    </UserProvider>
  );
};
export default App;
