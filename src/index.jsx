import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Container from "react-bootstrap/Container"; 

import { createRoot } from 'react-dom/client';
import { MainView } from '../components/main-view/main-view';
//Import statement to indicate to bundle './index.scss'
import './index.scss';

// Main component (will eventually use all the others)

const CineVerseApplication = () => {
  return <Container> <MainView /> </Container>
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<CineVerseApplication />);