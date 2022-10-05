import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

const FirstBook={
    img:"https://m.media-amazon.com/images/I/71LaJylkUvL._AC_UL320_.jpg",
    title:"Wise and Otherwise",
    author:"Sutha Murthy"
}
const SecondBook={
    img:"https://m.media-amazon.com/images/I/71GbGol4p+L._AC_UL320_.jpg",
    title:"The Room Roof",
    author:"Ruskin Bond"
}
const ThirdBook={
    img:"https://m.media-amazon.com/images/I/81i2034Lj0S._AC_UL320_.jpg",
    title:"Train to Pakistan",
    author:"Khushant"
}
const FourthBook={
    img:"https://m.media-amazon.com/images/I/41IMpHaZpmL._AC_UL320_.jpg",
    title:"Shantaram",
    author:"Gregory"
}
const FifthBook={
    img:"https://m.media-amazon.com/images/I/81-7rvh85jL._AC_UL320_.jpg",
    title:"Long SIlence",
    author:"Deshpande Shashi"
}
const SixthBook={
    img:"https://m.media-amazon.com/images/I/71m4x4wunyL._AC_UL320_.jpg",
    title:"The Guide",
    author:"R.K Narayanan"
}
const Booklibrary=()=>{
    return(
        <section>
        <h1>BOOK LIBRARY</h1>
        <div className="firstlist">
       
          <Book
           img={FirstBook.img}
           title={FirstBook.title}
           author={FirstBook.author}/>
            <Book
           img={SecondBook.img}
           title={SecondBook.title}
           author={SecondBook.author}/>
            <Book
           img={ThirdBook.img}
           title={ThirdBook.title}
           author={ThirdBook.author}/>
           </div>
           <div className="secondlist">
          <Book
           img={FourthBook.img}
           title={FourthBook.title}
           author={FourthBook.author}/>
            <Book
           img={FifthBook.img}
           title={FifthBook.title}
           author={FifthBook.author}/>
            <Book
           img={SixthBook.img}
           title={SixthBook.title}
           author={SixthBook.author}/>
           </div>


        </section>
    )
}

const Book=(props)=>{
    const{img,title,author}=props;
    function handleAlert(){
        alert("Title:"+title)
    }
    return(
      <div className="Booklist">
        <img src={img} alt=""/>
        <h3>TITLE:{title}</h3>
        <h3>AUTHOR:{author}</h3>
        <button onClick={handleAlert}>Event</button>
      </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Booklibrary/>)