
import SideNav from "./components/SideNav"
import './App.css'
import Body from "./components/Body"


export default function Home() {
  return (
    <main>
    <div className="App">
        <SideNav/>
        <Body/>
      </div>
    </main>
  );
}
