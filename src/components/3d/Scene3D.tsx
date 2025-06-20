
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

type Scene3DProps = {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  controlsEnabled?: boolean;
  background?: string;
  style?: React.CSSProperties;
  className?: string;
};

const Scene3D = ({ 
  children, 
  cameraPosition = [0, 0, 5], 
  controlsEnabled = true,
  background = "transparent",
  style = {},
  className = ""
}: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <Canvas shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} style={{ background }}>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        {children}
        {controlsEnabled && (
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene3D;
