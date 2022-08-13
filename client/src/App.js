import { Header, Footer, Content } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
