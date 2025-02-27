import { useRef, useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import * as Icons from './icons';
import './index.css'; // Ensure this imports your global CSS
import * as React from 'react';

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Tree: React.FC<{
  defaultOpen?: boolean;
  name: string | JSX.Element;
}> = ({ children, name, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];
  return (
    <div className="tree-frame">
      <Icon
        className="tree-toggle"
        style={{ opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <span className="tree-title">{name}</span>
      <a.div
        className="tree-content"
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
          transform: y.to((value) => `translateY(${value}px)`),
        }}
      >
        <div ref={ref}>{children}</div>
      </a.div>
    </div>
  );
};

export default Tree;
