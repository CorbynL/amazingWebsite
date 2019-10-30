import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import deku from './images/deku.png'

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

function Content(props){
    let imgClass = 'ContentImage';
    let textClass;
    let contentPosition;
    if (props.i%2===0){
        imgClass += ' ContentImageLeft';
        textClass = 'ContentTextLeft';
        contentPosition = ' topContent ContentLeft';
    } else {
        imgClass += ' ContentImageRight';
        textClass = 'ContentTextRight';
        contentPosition = ' ContentRight';
    }

    const imgContent = <div className = {imgClass}><img src = {deku} alt="deku meme"></img></div>;
    const textContent = <div className = {textClass}><p>The waifu war is brutal.  You may think that calling out someones waifu
    is all fun and games, but look at this man.  The pain expressed on his face.  This is what all weebs are going through
    right now, every day.</p></div>;

    return <div className= {'Content' + contentPosition}>
        {imgContent}
        {textContent}
        </div>;
}

function Main() {
    let i = 0;

    return (
        <div className="Main">
        <Header />
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        <IWasHereForm></IWasHereForm>
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        </div>);
}

function IWasHereForm(){
    return <div className="IWasHereForm">
        <form id="names">
        <label>FirstName:</label>
        <input type="text" name="firstName"></input>
        <label>LastName:</label>
        <input type="text" name="firstName"></input>
        </form>  
        <button type="submit">owo</button>  
    </div>
}

class App extends React.Component{

     render() {

        return <div className = "App">
        <SideBar />
        <Main />      
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );