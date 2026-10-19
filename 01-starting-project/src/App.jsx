import Header from "./Header";
import Coreconcept from "./coreConcept";
import componentsImg from '.assets/componentsImg'
import { CORE_CONCEPTS } from "./data";
function App() {
  return (
    <div>
       <Header />
       <Header/>
       <Header/>
       <Me/>
       

      <main>


        <section id = "core-concepts">
        <h2>Time to get started!</h2>
        <ul><Coreconcept{...CORE_CONCEPTS[0]}/>
         <ul><Coreconcept{...CORE_CONCEPTS[1]}/>
          <ul><Coreconcept{...CORE_CONCEPTS[2]}/>
           <ul><Coreconcept{...CORE_CONCEPTS[3]}/>

        </ul>
        </section>
      </main>
    </div>
  );
}

        
function Me(){
  Me = {
    first: "Ladania",
    Age: 20,
    Major: IT,
  };

  return(
    <div>
      <ul>
        Me
        <li>First: {Me.first} </li>
        <li>Age: {Me.Age} </li>
        <li>Major: {Me.Major}</li>
      </ul>
    </div>
    

  );
  }


export default App;
