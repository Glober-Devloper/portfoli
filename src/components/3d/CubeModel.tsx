
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

type CubeModelProps = {
  size?: number;
  color?: string;
  speed?: number;
  position?: [number, number, number];
};

const CubeModel = ({ 
  size = 1, 
  color = "#8B5CF6", 
  speed = 0.01, 
  position = [0, 0, 0] 
}: CubeModelProps) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 1.5;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow position={position as Vector3}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

export default CubeModel;
