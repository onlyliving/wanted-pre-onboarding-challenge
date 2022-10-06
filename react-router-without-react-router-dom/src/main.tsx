import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "../src/page/Root";
import About from "../src/page/About";
import Route from "./components/Route";
import Router from "./components/Router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
    </Router>
)