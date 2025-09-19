import { PulsingBorder } from "@paper-design/shaders-react";

export default function App() {
  return (
    <div style={{
      display:"grid", placeItems:"center", height:"100%", background:"#000"
    }}>
      <PulsingBorder
        colors={['#0dc1fd', '#d915ef', '#ff3f2ecc']}
        colorBack="#00000000"
        speed={1.38}
        roundness={0.25}
        thickness={0.05}
        softness={0}
        intensity={0.37}
        bloom={0.97}
        spots={2}
        spotSize={0.78}
        pulse={0.42}
        smoke={0.57}
        smokeSize={0}
        scale={1}
        rotation={0}
        style={{
          backgroundColor:'#000',
          borderRadius:'37px',
          height:'320px',
          width:'531px'
        }}
      />
    </div>
  );
}
