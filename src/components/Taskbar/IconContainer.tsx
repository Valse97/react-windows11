import { TaskbarIconContainerProps } from "../../interfaces/viewModels/TaskbarIconContainerProps";
import Icon from "./Icon";

var TaskbarIconContainer = (taskbarIconContainerProps:TaskbarIconContainerProps) => {
    return (
        <div className="taskbar-icon-container">
        {
            taskbarIconContainerProps.icons && taskbarIconContainerProps.icons.map((icon, i) => (
                <Icon key={i} icon={icon} />
            ))
        }
        </div>
    );
}

export default TaskbarIconContainer;