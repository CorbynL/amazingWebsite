import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import deku from './images/deku.png'
import { useState, useEffect } from 'react';


function Header(){
    return <div className="Header" ><p>Welcome to my humble domain</p></div>;
}

function SideBar() {
    return <div SideBar className="SideBar">
        <a href="#Home">Home</a>
        <a href="#Stuff">Stuff</a>
        <a href="#Cooler Stuff">Cooler Stuff</a>

    </div>;
}

function NavBar(){
    return <div className="NavBar">
        <ul>
            <li href="#"><a class="active" href="#home">Home</a></li> 
            <li href="#"><a class="active" href="#home">Home</a></li>
            <li href="#"><a class="active" href="#home">Home</a></li>
        </ul>
    </div>;
}

function Content(props){
    let imgClass = 'ContentImage';
    let textClass = 'ContentText';
    let contentPosition = '';

    const imgContent = <div className = {imgClass}><img src = {deku} alt="deku meme"></img></div>;
    const textContent = <div className = {textClass}>The waifu war is brutal.  You may think that calling out someones waifu
    is all fun and games, but look at this man.  The pain expressed on his face.  This is what all weebs are going through
    right now, every day.</div>;

    return <div className= {'Content' + contentPosition}>
       {props.i%2===0 ?
        [imgContent,
        textContent] :
        [textContent,
        imgContent]}
        </div>;
}

function Main() {
    let i = 0;

    const [data,setData] = useState("Loading...");

    useEffect(() => {
        async function fetchData() {
           const response = await fetch('http://localhost:3001/');
           const data = await response.json(); 
        setData(data.msg);
        }
        fetchData();
   });

    return (
        <div className="Main">
        <h1>{data}</h1>
        <Header />
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        <IWasHereForm setData={setData}></IWasHereForm>
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        </div>);
}

function IWasHereForm(props){

    const handleSubmit = () => {
        const name = document.getElementById('firstName');
        props.setData(name.value);
    }

    return <div className="IWasHereForm">
        <form method="post">
        <label>FirstName:</label>
        <input type="text" id="firstName"></input>
        <label>LastName:</label>
        <input type="text" name="firstName"></input>
        </form>  
        <button type="submit" onClick={handleSubmit}>owo</button>  
    </div>
}

class App extends React.Component{

     render() {

        return <div className = "App">
        <NavBar />
        <Main />      
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );