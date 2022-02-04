import { BrowserRouter as Router, Route, Switch,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import {  review   } from "./reviews/review-1";
import { Link } from "react-router-dom";



function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Giburi Images ang showreview</h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (

          <img src={props.src} alt="gibiri" />
           
    
    );
  }
  function Loading() {
    return <p>Loading...</p>;
  }
  function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
      return <Loading />;
    }
    return (
      <div className="columns is-vcentered is-multiline">
        {urls.map((url,i) => {
          
        return (
          <div className="column is-3">
          <Link to={'/'+i}>
          
          <div key={url}>
            <Image src={url} />
          </div>
        </Link>
        </div>
        );
      })}
      </div>
    );
  }
  
  function Main() {
    const [urls, setUrls] = useState(null);
 useEffect(() => {
     fetchImages("").then((urls) => {
     setUrls(urls);
  });
   }, []);
    return (
      <main className="has-background-success">
        
        <div className="has-text-centered">
          <p className="is-size-1">画像をクリックするとジブリ作品の詳細が見れる！！</p>
        </div>
        <section className="section">
          <div className="container">
          <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  function Showreview(){
    const {id}=useParams();
    console.log(id);
    const rev=review[id].rev;
    const title=review[id].title;
      return (
      
        <div className="has-text-centered has-background-warning">

         <h1 className="is-size-1 "> {title}</h1>

        <p> {rev} </p>

        </div>
      );
}
     

  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Giburi images are retrieved from Giburi API</p>
          <p>
            <a href="https://ghibliapi.herokuapp.com/">Studio Ghibli API</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Router>
        <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/:id" >
              <Showreview/>
            </Route>
          </Switch>
          </Router>
        <Footer />
        5420048　浅井良太 日本大学文理学部情報科学科 Webプログラミングの演習課題
      </div>
    );
  }
  
  export default App;