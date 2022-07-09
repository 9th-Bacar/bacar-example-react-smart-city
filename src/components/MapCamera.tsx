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
  const objectSelected = useObjectSelected()

  const handleClick = () =>
    setObjectSelected({
      name: objectSelected.name === name ? "" : name
    })

  return (
    <>
      <Find
        name={name}
        id={name}
        outline={objectSelected.name === name}
        onClick={handleClick}
      >
        <HTML>
          <div
            className="p-2 backdrop-blur-xl absolute text-white pointer-events-auto cursor-pointer rounded-md overflow-hidden"
            onMouseDown={handleClick}
          >
            {title}
          </div>
        </HTML>
      </Find>
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
