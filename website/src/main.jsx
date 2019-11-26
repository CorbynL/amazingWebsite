import React from 'react';
import './index.css';
import deku from './images/deku.png'
import {Link} from 'react-router-dom'
function Header(){
    return <div className="Header" ><p>Welcome to my humble domain</p></div>;
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

function Content({i}){
    let imgClass = 'ContentImage';
    let textClass = 'ContentText';
    let contentPosition = '';

    const imgContent = <div className = {imgClass}><img src = {deku} alt="deku meme"></img></div>;
    const textContent = <div className = {textClass}>The waifu war is brutal.  You may think that calling out someones waifu
    is all fun and games, but look at this man.  The pain expressed on his face.  This is what all weebs are going through
    right now, every day.</div>;

    return <div className= {'Content' + contentPosition}>
       {i%2===0 ?
        [imgContent,
        textContent] :
        [textContent,
        imgContent]}
        </div>;
}

function SignUpButton ({setPage}) {


    return <div className='SignUpButton'>
        <Link to ='/SignUp'>
            <button >Sign Up</button>
        </Link>
    </div>
}

function Main({setPage, data, setData}) {
    let i = 0;

    return (
        <div className="Main">
        <h1>{data}</h1>
        <Header />
        <SignUpButton setPage = {setPage}/>
        <IWasHereForm setData={setData}></IWasHereForm>
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        <Content i = {i++}></Content>
        <Content>i = {i++}</Content>
        </div>);
}

function IWasHereForm({setData}){

    function handleClick(e){ 
        setData(document.getElementById('firstName').value);
    }

    return <div className="IWasHereForm">
        <form method="post">
        <label>FirstName:</label>
        <input type="text" id="firstName"></input>
        <label>LastName:</label>
        <input type="text" name="firstName"></input>
        </form>  
        {/* <Link to='/Login'> */}
            <button onClick={handleClick} >owo</button>
        {/* </Link>   */}
    </div>
}

function FrontPage ({data, setData, ...props}){
     return (
        <div className = "FrontPage">
        <h2>{data}</h2>
        <NavBar />
        <Main data={data} setData={setData}/>      
        </div>
     );
}

export default FrontPage;