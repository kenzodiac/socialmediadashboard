// Kenneth Fujimura
// Last Revised: 3/17/2023
// "Social Media Dashboard in React"
// This is an assignment where we built out the front end of a social media dashboard website in React. We used components to reduce the amount of code significantly, and passed in variables through props. 
// Peer Reviewed By: Isaiah Ferguson -- "The site is spot on to the figma and the code is very well detailed I didn't think of making it fully responsive using Bootstraps  <Col lg={3} md={4} sm={6} xs={12} >. I used the bootstrap className="col-lg-3 col-sm-12" your way makes it much easier to read. I also never thought of targeting the body like you did in the switchTheme function(I am for sure going to try this in an upcoming project).  Overall your attention to detail was excellent, Variable ,Props and Class names were consistent and descriptive Great Work!"
// Github Repo: https://github.com/kenzodiac/socialmediadashboard
// Azure Deployment: https://nothingofvaluedashboard.azurewebsites.net/

import './App.css';
import MainStageComponent from './Components/MainStageComponent';

function App() {
  return (
    <MainStageComponent/>
  );
}

export default App;