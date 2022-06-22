import { Find, HTML, OrbitCamera, useWindowSize } from "lingo3d-react";
import { useSnapshot } from "valtio";
import informationState from "../states/informationState";
import objectSelectedState from "../states/objectSelectedState";

type MapCameraProps = {
  name: string;
  title: string;
  info: string;
};

const MapCamera = ({ name, title, info }: MapCameraProps) => {
  useSnapshot(objectSelectedState);
  const { width } = useWindowSize();
  
  const handleClick = () => {
    if (objectSelectedState.name === name) {
      objectSelectedState.name = ""
      informationState.title = ""
      informationState.info = ""
    }
    else {
      objectSelectedState.name = name;
      informationState.title = title;
      informationState.info = info;
    }
  };

  return (
    <>
      <Find name={name} id={name} outline={objectSelectedState.name === name} onClick={handleClick}>
        <HTML>
          <div
            className="p-2 backdrop-blur-xl absolute text-white pointer-events-auto cursor-pointer rounded-md overflow-hidden"
            onClick={handleClick}
          >
            {title}
          </div>
        </HTML>
      </Find>
      <OrbitCamera
        fov={width < 640 ? 110 : 90}
        targetId={name}
        active={objectSelectedState.name === name}
        transition={0.02}
        distance={50}
        enableDamping
        minPolarAngle={75}
        maxPolarAngle={75}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

export default MapCamera;
