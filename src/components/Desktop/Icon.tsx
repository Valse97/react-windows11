import React, { useEffect } from 'react'
import { DesktopIconProps } from "../../interfaces/viewModels/DesktopIconProps";
import { Icon } from "../../interfaces/models/Icon";

export default function DesktopIcon(desktopIconProps: DesktopIconProps) {
  var width = 80;
  var height = 80;
  var marginTop = 10;
  var marginLeft = 10;
  var widthGap = 10;
  var heightGap = 20;

  const [icon, setIcon] = React.useState<Icon>(desktopIconProps.icon);
  const [selected, setSelected] = React.useState<boolean>(desktopIconProps.icon.selected);

  useEffect(() => {
    setIcon(desktopIconProps.icon)
  }, [desktopIconProps.icon])

  var selectIcon = () => {
    setSelected(!selected);
  };

  return (
    <div className={`desktop-icon clickable ${selected ? "selected" : ""}`} onClick={selectIcon} style={{ position: "absolute", minHeight: height, width: width, top: ((icon.position.y) * height) + (icon.position.y * heightGap) + marginTop, left: ((icon.position.x) * width) + (icon.position.x * widthGap) + marginLeft }}>
      <div className='desktop-icon-wrapper'>
        <div className='icon'>
          <img src={icon.image} alt={icon.title} />
        </div>
        <div className='text'>{icon.title}</div>
      </div>
    </div>
  )
}
