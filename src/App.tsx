import {
  Cube,
  HTML,
  Model,
  OrbitCamera,
  Setup,
  usePreload,
  useWindowSize,
  World,
} from "lingo3d-react";
import { useSnapshot } from "valtio";
import "./App.css";
import Information from "./components/Information";
import MapCamera from "./components/MapCamera";
import objectSelectedState from "./states/objectSelectedState";

const Game = () => {
  useSnapshot(objectSelectedState);
  const { width } = useWindowSize();
  return (
    <>
      <World>
        <OrbitCamera
          fov={width < 640 ? 110 : 75}
          active={objectSelectedState.name === "" ? "transition" : false}
          x={31.81}
          y={97.33}
          z={223.68}
          enableZoom
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={75}
        />
        <Model
          metalnessFactor={0.5}
          roughnessFactor={0.5}
          pbr
          y={46.67}
          width={552.32}
          depth={572.75}
          src="shanghai.glb"
        >
          <MapCamera
            name="01-shanghaizhongxindasha"
            title="Shanghai Tower"
            info="Shanghai Tower is a 128-story, 632-meter-tall (2,073 ft) megatall skyscraper in Lujiazui, Pudong, Shanghai.[10] It is the tallest building in China and the world's third-tallest building by height to architectural top. "
          />
          <MapCamera
            name="02-huanqiujinrongzhongxin_huanqiujinrongzhongxin_0"
            title="Shanghai World Financial Center"
            info="The Shanghai World Financial Center is a supertall skyscraper located in the Pudong district of Shanghai."
          />
          <MapCamera
            name="03-jinmaodasha_jjinmaodasha_0"
            title="Jin Mao Tower"
            info="The Jin Mao Tower (simplified Chinese: 金茂大厦; traditional Chinese: 金茂大廈; pinyin: Jīnmào Dàshà; Shanghainese: Cinmo Dusa; lit. 'Golden Prosperity Building'), also known as the Jinmao Building or Jinmao Tower, is a 420.5-meter-tall (1,380 ft), 88-story (93 if counting the floors in the spire) landmark skyscraper in Lujiazui, Pudong, Shanghai, China"
          />
          <MapCamera
            name="04-dongfangmingzhu_dongfangmingzhu_0"
            title="Oriental Pearl Tower"
            info="The Oriental Pearl Radio Television Tower. pinyin: Dōngfāng Míngzhūtǎ; Shanghainese: Tonfån Mintsythah."
          />
        </Model>
        <Setup
          defaultLight="studio"
          skybox="bg0.jpg"
          logarithmicDepth
          bloomStrength={0.3}
          bloomThreshold={0.9}
        />
      </World>
      <Information />
    </>
  );
};

const App = () => {
  const progress = usePreload(["shanghai.glb"], "3.1mb");
  if (progress < 100)
    return (
      <div className="w-screen h-screen absolute left-0 top-0 text-white bg-black flex items-center justify-center">
        loaded: {Math.round(progress)}%
      </div>
    );
  return <Game />;
};

export default App;
