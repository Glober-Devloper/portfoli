
import { Text3D, Center } from '@react-three/drei';

interface TextModelProps {
  text: string;
  color?: string;
  size?: number;
  height?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const TextModel = ({ 
  text, 
  color = "#ffffff", 
  size = 1, 
  height = 0.2,
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}: TextModelProps) => {
  return (
    <Center position={position} rotation={rotation}>
      <Text3D 
        font="/fonts/Roboto_Regular.json" 
        size={size} 
        height={height}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.01}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </Text3D>
    </Center>
  );
};

export default TextModel;
