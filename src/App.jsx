// import styles from "./App.module.css";
// import { About } from "./components/About/About";
// import { Contact } from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
// import { Hero } from "./components/Hero/Hero";
// import { Navbar } from "./components/Navbar/Navbar";
// import { Project } from "./components/Projects/Project";
// import { Projects } from "./components/Projects/Projects";

// import projects from "../src/data/projects.json";

// function App() {
//     return (
//         <div className={styles.App}>
//             <Navbar />
//             <Hero />
//             <About />
//             <Experience />
//             <Projects />
//             <Contact />
//             {/* <Project /> */}
//             <div className={styles.projects}>
//                 {projects.map((project, id) => {
//                     return <Project key={id} project={project} />;
//                 })}
//             </div>
//         </div>
//     );
// }

// export default App;

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./pages/Contact";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route index element={<Navbar />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navbar />} />
        </Route>
    )
);

export const App = () => {
    return (
        <div className="h-[100%] m-0 p-0">
            <RouterProvider router={router} />
        </div>
    );
};
