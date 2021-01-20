import logo from './logo.svg';
import React from "react";
import "./App.css";

function Header() {
    
    return (<header className = "App" > Welcome To Odometar </header>);
}
// function FoodChoice1(props) {
//   console.log(props);
//   const food = "Shawerma";
//   return (
//     <div className="food">
//       <h2>Food Choice 1 for today is</h2>
//       <h3>{props.favFood}</h3>
//     </div>
//   );
// }
class Odoclass extends React.Component {
    constructor() {
        super();
        this.state = {
            odo: "0000",
        };
    }
    changeodo(n) {
        let num = Number(this.state.odo) + n;
        if (num > 9999) {
            this.setState({ odo: "0000" });
            return;
        }
        if (num < 10) {
            this.setState({ odo: "000" + num });
            return;
        }
        if (num < 100) {
            this.setState({ odo: "00" + num });
            return;
        }
        if (num < 1000) {
            this.setState({ odo: "0" + num });
            return;
        }
        this.setState({ odo: num });
    }
    render() {
        return ( <>
            < button onClick = {() => this.changeodo(1) } > add 1</button> 
            < button onClick = {() => this.changeodo(10) } > add 10 </button> 
            <button onClick = { () => this.changeodo(100) } > add 100 </button> 
            <button onClick = { () => this.changeodo(1000) } > add 1000 </button> 
            < div className = "odo" >
            < h3 > { this.state.odo } </h3> 
            </div> 
            </>
        );
    }
}

// function Main() {
//   return (
//     <main>
//       <div className="App">
//         {/* <h1>Hello {courseName}</h1> */}
//         <h1></h1>
//         <p></p>
//       </div>
//     </main>
//   );
// }

function Footer() {
    return ( <footer className = "App" >
        <p> Copy Right
        for </p> 
        <span > < a href = "#" > uniodo.com </a> </span >
        </footer>
    );
}

function App() {
    return ( <>
        <Header /> { /* <Main /> */ } 
        <Odoclass />
        <Footer />
        </>
    );
}
export default App