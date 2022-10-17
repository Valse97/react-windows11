import "./Taskbar.css";
import IconContainer from "./IconContainer";

import icon_system_folder from "../../assets/windows/icons/system/folder.png";
import icon_vscode from "../../assets/windows/icons/code.png";
import winIcon from '../../assets/windows/icons/system/win.png'
import React from "react";
import { Icons } from "../../interfaces/models/Icon";

var height = 45;
var Taskbar = () => {
    
    const [leftIcons, setLeftIcons] = React.useState<Icons>([]);
    const [centerIcons, setCenterIcons] = React.useState<Icons>([]);
    const [rightIcons, setRightIcons] = React.useState<Icons>([]);

    React.useEffect(() => {
        setLeftIcons([
            {
                title: "Visual studio code",
                image: icon_vscode,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            }
        ]);
        setCenterIcons([
            {
                title: "Start",
                image: winIcon,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            },
            {
                title: "Visual studio code",
                image: icon_vscode,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            },
            {
                title: "Esplora file",
                image: icon_system_folder,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            },
        ]);
        setRightIcons([
            {
                title: "Visual studio code",
                image: icon_vscode,
                selected: false,
                position: {
                    x: 0,
                    y: 0,
                }
            }
        ]);
    }, [])

    return (
        <div style={{bottom:height, height:height}} className="win-taskbar">
            <IconContainer icons={leftIcons}></IconContainer>
            <IconContainer icons={centerIcons}></IconContainer>
            <IconContainer icons={rightIcons}></IconContainer>
        </div>
    );
}

export default Taskbar;