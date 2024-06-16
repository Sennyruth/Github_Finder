import "./Header.css";
import {useState} from 'react'
import useuserstore from "../../Store/userStore";
function Header() {
  const captureUsername = useuserstore((state) => state.captureUsername)
    const username = useuserstore(state => state.username)
    const [usename, setUsername] = useState()


  const handleUsername = e =>{
    setUsername(e.target.value);
  }

const handleChange =e =>{
  e.preventDefault();
  console.log(username)
  captureUsername(usename)
}



  return (
    <header>
      <div className="header-section">
        <h1>GITHUB FINDER</h1>
        <p>
          By <a href="https://github.com/Sennyruth">Ruth Mutisya</a>
        </p>
        <form action="">
          <input type="text" placeholder="enter a username" onChange={handleUsername}/>
          <button type="button" onClick={handleChange}>Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
