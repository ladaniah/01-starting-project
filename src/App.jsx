import Header from "./Header";
import CoreConcept from "./coreConcept";
import { CORE_CONCEPTS, componentsImg } from "./data";

function Me() {
  const me = {
    first: "Ladania",
    age: 20,
    major: "IT",
  };

  return (
    <div>
      <h2>Me</h2>
      <img src={componentsImg} alt="Components" width="100" />
      <ul>
        <li>First: {me.first}</li>
        <li>Age: {me.age}</li>
        <li>Major: {me.major}</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Me />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
