import { Find, HTML, OrbitCamera } from "lingo3d-react"
import React from "react"
import {
  useObjectSelected,
  setObjectSelected
} from "../states/objectSelectedState"

interface MapCameraProps {
  name: string
  title: string
}

const MapCamera: React.FC<MapCameraProps> = ({ name, title }) => {
  //global state that determines the selected object
  //定义选中物体的全局状态
  const objectSelected = useObjectSelected()

  //callback that gets called when the user clicks on an object
  //当用户点击物体时的回调函数
  const handleClick = () =>
    setObjectSelected({
      name: objectSelected.name === name ? "" : name
    })

  return (
    <>
      {/* find object by name, highlight outline if selected */}
      {/* 通过名称来查询物体，选中时轮廓高亮 */}
      <Find
        name={name}
        id={name}
        outline={objectSelected.name === name}
        onClick={handleClick}
      >
        {/* HTML tag that follows object */}
        {/* 跟随物体的HTML标签 */}
        <HTML>
          <div
            className="p-2 backdrop-blur-xl absolute text-white pointer-events-auto cursor-pointer rounded-md overflow-hidden"
            onMouseDown={handleClick}
          >
            {title}
          </div>
        </HTML>
      </Find>
      {/* Camera that activates when object is selected */}
      {/* 当物体被选中时启动的相机 */}
      <OrbitCamera
        fov={90}
        targetId={name}
        active={objectSelected.name === name}
        transition={0.02}
        innerZ={50}
        innerY={-30}
        minPolarAngle={120}
        maxPolarAngle={120}
        autoRotate
        enableDamping
      />
    </>
  )
}

export default MapCamera
