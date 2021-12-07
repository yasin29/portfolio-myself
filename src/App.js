import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Navbar/Header';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function App() {
  console.log(process.env.REACT_APP_FB_APP_ID);
  return (
    <div className="App">
      <Router>
        <Header style={{ overflowX: 'hidden' }}></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      <MessengerCustomerChat
        pageId={process.env.REACT_APP_FB_PAGE_ID}
        appId={process.env.REACT_APP_FB_APP_ID}
      />
    </div>
  );
}

export default App;
