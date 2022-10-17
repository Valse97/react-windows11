import React from 'react'
import winIcon from '../../assets/windows/icons/system/win.png'
import { Icon } from '../../interfaces/models/Icon';
import { TaskbarIconProps } from '../../interfaces/viewModels/TaskbarIconProps';

var TaskbarIcon = (taskbarIconProps:TaskbarIconProps) => {
    
    const [muoseDown, setMouseDown] = React.useState(false);
    const [icon, setIcon] = React.useState<Icon>(taskbarIconProps.icon);

    var mouseDown  = () =>{
        setMouseDown(true);
    }
    var mouseUp  = () =>{
        setMouseDown(false);
    }

    return (
        <div className={"taskbar-icon-wrapper " + (muoseDown ? 'mouse-press': '')} onMouseDown={mouseDown} onMouseUp={mouseUp}>
            <div className="taskbar-icon-box">
                <div className="taskbar-icon">
                    <img src={icon.image} />
                </div>
            </div>
        </div>
    );
}

export default TaskbarIcon;