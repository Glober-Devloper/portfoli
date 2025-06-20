
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

type TorusModelProps = {
  size?: number;
  color?: string;
  speed?: number;
  position?: [number, number, number];
};

const TorusModel = ({ 
  size = 1, 
  color = "#0EA5E9", 
  speed = 0.01,
  position = [0, 0, 0]
}: TorusModelProps) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed;
      meshRef.current.rotation.y += speed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow position={position as Vector3}>
      <torusGeometry args={[size, size/3, 16, 100]} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
    </mesh>
  );
};

export default TorusModel;
