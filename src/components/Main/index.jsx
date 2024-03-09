import React from "react";
import "./Main.css";
// import professionalphoto from "../images/professionalphoto.jpg";
import novapozadina from "../images/novapozadina.jpg"
import { useNavigate } from "react-router-dom";

const Main = ({ token }) => {
    const navigate = useNavigate();

    const redirectToCandidates = () => {
        navigate("/candidates");
    };

    const redirectToAdmin = () => {
        if (token) navigate("/admin");
        else navigate("/admin-login");
    };

    return (
        <div className="main">
            <div className="main-intro">
                <h1>MML</h1>
                <p>
                    <span>MML</span> je firma koja revolucionarno povezuje
                    talente sa perspektivnim poslodavcima. Svojom inovativnom
                    platformom za spajanje, MML koristi najnovije tehnologije
                    mašinskog ucenja kako bi stvorila idealne profesionalne
                    spojeve. Naš pristup se fokusira na precizno utvrđivanje
                    veština i ineresa kandidata, koristeći napredne algoritme
                    kako bi pronašli savršen sklad između individua i kompanija.
                </p>
                <p className="second-p">
                    <span>MML</span> se ističe personalizovanim pristupom,
                    osiguravajući da svaki kandidat ima priliku da se predstavi
                    na najbolji način, dok kompanijama pruža uvid u sveobuhvatne
                    informacije o kandidatima. Naša firma teži stvaranju
                    održivih i uspešnih radnih odnosa, gradeći most izmedju
                    ambicija pojedinaca i potreba kompanija. U svetu MML-a,
                    profesionalno spajanje postaje jednostavno, efikasno i
                    inspirativno iskustvo za sve uključene strane.
                </p>
                <div className="main-buttons">
                    <button
                        onClick={redirectToCandidates}
                        className="get-started-button"
                    >
                        Get Started
                    </button>
                    <button onClick={redirectToAdmin} className="admin-button">
                        Admin
                    </button>
                </div>
            </div>
            <div className="main-photo">
                <img src={novapozadina} alt="" />
            </div>
        </div>
    );
};

export default Main;
