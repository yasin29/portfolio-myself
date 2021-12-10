import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Navbar/Header';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './components/context/ChangingProgressProvider/ChangingProgressProvider';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {
        loading ? <div style={{ width: 200, height: 200, margin: 'auto', marginTop: '150px' }}>
          <ChangingProgressProvider values={[0, 100]}>
            {percentage => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransition:
                    percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
                })}
              />
            )}
          </ChangingProgressProvider>
        </div> : <div>
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
      }
    </div>
  );
}

export default App;
