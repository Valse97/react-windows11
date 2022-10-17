import React from "react";
import "./Desktop.css";
import image from "../../assets/windows/backgrounds/img0.jpg";

import icon_system_folder from "../../assets/windows/icons/system/folder.png";
import icon_system_mypc from "../../assets/windows/icons/system/my-pc.png";
import icon_system_trash from "../../assets/windows/icons/system/trash-empty.png";

import icon_vscode from "../../assets/windows/icons/code.png";
import DesktopIcon from "./Icon";
import { Icons } from "../../interfaces/models/Icon";

var Desktop = () => {

    const [icons, setIcons] = React.useState<Icons>([]);

    React.useEffect(() => {
        setIcons([
            {
                title: "Nuova cartella",
                image: icon_system_folder,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            },
            {
                title: "Nuova cartella",
                image: icon_system_folder,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            },
            {
                title: "Questo PC",
                image: icon_system_mypc,
                selected: false,
                position: {
                    x: 0,
                    y: 1,
                }
            },
            {
                title: "Cestino",
                image: icon_system_trash,
                selected: false,
                position: {
                    x: 0,
                    y: 2,
                }
            },
            {
                title: "Visual studio code",
                image: icon_vscode,
                selected: false,
                position: {
                    x: 10,
                    y: 3,
                }
            },
            {
                title: "Nuova cartella (1)",
                image: icon_system_folder,
                selected: true,
                position: {
                    x: 0,
                    y: 4,
                }
            },
            {
                title: "Nuova cartella (2)",
                image: icon_system_folder,
                selected: false,
                position: {
                    x: 1,
                    y: 0,
                }
            },
            {
                title: "Nuova cartella (4)",
                image: icon_system_folder,
                selected: false,
                position: {
                    x: 9,
                    y: 2,
                }
            }
        ]);
    }, [])

    return (
        <div className="win-desktop" style={{ backgroundImage: `url(${image})` }}>
            <div className='desktop-icon-container'>
                {
                    icons && icons.map((icon, i) => (
                        <DesktopIcon key={i} icon={icon} />
                    ))
                }
            </div>
        </div>
    );
}

export default Desktop;