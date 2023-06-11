import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />            
        </div>
    );
}

function Header() {

    const titleStyle = {
        //color: "red", 
        //fontSize: "1.8rem"
    }

    return (
        <section>
            <header className="header">
                <h1 style={titleStyle}>React Pizza Co.</h1>
            </header>
        </section>
    );
}

function Menu() {
    return (
        <section>
            <main id="menu" className="menu">
                <h2>Il nostro menù</h2>
                <Pizza />
                <Pizza />
                <Pizza />
            </main>
        </section>
    );
}

function Footer() {

    const [clock, setClock] = useState(new Date().toLocaleTimeString());
    const [open, setOpen] = useState(false); 
    const [openStyle, setOpenStyle] = useState(null);

    const ora = new Date().getHours();
    const apertura = 19;
    const chiusura = 23;

    useEffect(() => {
        setOpen(ora >= apertura && ora <= chiusura);
        setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);
        if(open) {
            setOpenStyle({border: "1px solid green"});
        }else{
            setOpenStyle({border: "1px solid red"});
        }
    });
    /*
    if(ora >= apertura && ora <= chiusura) 
        alert('Siamo ancora aperti!');
    else 
        alert('Siamo chiusi.');
    */
    return (
        <section>
            <footer className="footer">
                {clock}
                <a href="#menu">
                    <div style={openStyle} className="banner">
                        {open ? 'Siamo aperti!!' : 'Siamo chiusi :('}
                    </div> 
                </a>
            </footer>
        </section>
    );
}

function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="pizza spinaci"/>
            <h3>Pizza Spinaci</h3>
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
            <h4>18$</h4>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//React.render(<App />);