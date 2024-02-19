import { createRoot } from 'react-dom/client';
import { MainView } from '../components/main-view/main-view';
//Import statement to indicate to bundle './index.scss'
import './index.scss';

// Main component (will eventually use all the others)

const CineVerseApplication = () => {
  return <MainView />
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<CineVerseApplication />);