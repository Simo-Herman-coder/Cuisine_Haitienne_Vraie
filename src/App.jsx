import { useState } from "react"
import "./index.css"
import AccueilPage from "./pages/Accueil"
import RecettesPage from "./pages/Recettes"
import VideosPage from "./pages/Vidéos"
import BlogPage from "./pages/Blog"
import JeuxPage from "./pages/Jeux"
import ProfilPage from "./pages/Profil"

function App() {
    const [activeView, setActiveView] = useState("home")

    const renderPage = () => {
        switch (activeView) {
            case "recipes":
                return <RecettesPage onNavigate={setActiveView} />
            case "videos":
                return <VideosPage onNavigate={setActiveView} />
            case "blog":
                return <BlogPage onNavigate={setActiveView} />
            case "games":
                return <JeuxPage onNavigate={setActiveView} />
            case "profile":
                return <ProfilPage onNavigate={setActiveView} />
            case "home":
            default:
                return <AccueilPage onNavigate={setActiveView} />
        }
    }

    return <>{renderPage()}</>
}

export default App
