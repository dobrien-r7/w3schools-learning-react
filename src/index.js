import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutingTest from "./pages/testingRouting";
import NoPage from './pages/NoPage';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Routing" element={<RoutingTest />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<App />);

 ReactDOM.render(<App/>, document.getElementById('root'));


// const myFirstElement = <h1>Hello React!</h1>

// ReactDOM.render(myFirstElement, document.getElementById('root'))
// // why doesnt the below work?
//tsx v jsx
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

//https://www.pluralsight.com/guides/add-a-dependency-to-react-in-package.json-for-a-react-component