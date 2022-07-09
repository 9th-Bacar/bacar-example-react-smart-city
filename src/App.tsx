import { Model, OrbitCamera, Setup, World } from "lingo3d-react"
import "./App.css"
import MapCamera from "./components/MapCamera"
import { useObjectSelected } from "./states/objectSelectedState"

const App = () => {
  const objectSelected = useObjectSelected()

  return (
    <World>
      <OrbitCamera
        fov={90}
        active={objectSelected.name === ""}
        transition={0.02}
        innerZ={223.68}
        enableZoom
        enableDamping
        autoRotate
        minPolarAngle={100}
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
        <MapCamera name="01-shanghaizhongxindasha" title="Shanghai Tower" />
        <MapCamera
          name="02-huanqiujinrongzhongxin_huanqiujinrongzhongxin_0"
          title="Shanghai World Financial Center"
        />
        <MapCamera name="03-jinmaodasha_jjinmaodasha_0" title="Jin Mao Tower" />
        <MapCamera
          name="04-dongfangmingzhu_dongfangmingzhu_0"
          title="Oriental Pearl Tower"
        />
      </Model>
      <Setup
        defaultLight="studio"
        logarithmicDepth
        bloomStrength={0.3}
        bloomThreshold={0.9}
      />
    </World>
  )
}

export default App
