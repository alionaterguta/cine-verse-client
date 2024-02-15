import { createRoot } from 'react-dom/client';
//Import statement to indicate to bundle './index.scss'
import "./index.scss";

// Main component (will eventually use all the others)

const CineVerseApplication = () => {
  return (
    <div className="cine-verse">
      <div> Good evening </div>
      </div>
        );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<CineVerseApplication/>);