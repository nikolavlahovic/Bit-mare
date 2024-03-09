import React from "react";
import "./MainAdmin.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MusicPlayerSlider from "../MusicPlayer/music";

function MainAdmin() {
    return (
        <div className="main-admin">
            <div className="features">
                <Calendar />
                <MusicPlayerSlider />
            </div>
            <div className="notes">
                    Notes:
                    <hr />
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
        </div>
    );
}

export default MainAdmin;
