import { Find, HTML, OrbitCamera } from "lingo3d-react";
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
        fov={90}
        targetId={name}
        active={objectSelectedState.name === name}
        transition={0.02}
        innerZ={50}
        innerY={-30}
        enableDamping
        minPolarAngle={120}
        maxPolarAngle={120}
        autoRotate
      />
    </>
  );
};

export default MapCamera;
