import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import deku from './images/deku.png'

function Header(){
    return <div className="Header" ><p>Welcome to my humble domain</p></div>;
}

function Content(props){
    let imgClass = 'ContentImage';
    let textClass;
    let borderSide;
    if (props.i%2===0){
        imgClass += ' ContentImageLeft';
        textClass = 'ContentTextLeft';
        borderSide = ' topContent';
    } else {
        imgClass += ' ContentImageRight';
        textClass = 'ContentTextRight';
        borderSide = '';
    }

    const imgContent = <div className = {imgClass}><img src = {deku} alt="deku meme"></img></div>;
    const textContent = <div className = {textClass}><p>The waifu war is brutal.  You may think that calling out someones waifu
    is all fun and games, but look at this man.  The pain expressed on his face.  This is what all weebs are going through
    right now, every day.</p></div>;

    return <div className= {'Content' + borderSide}>
        {imgContent}
        {textContent}
        </div>;
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
        let i = 0;

        return <div className = "App">
        <Header></Header>
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        <IWasHereForm></IWasHereForm>
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    );