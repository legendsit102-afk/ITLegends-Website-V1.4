import { useEffect, useRef, useState } from 'react';

interface MicroDividerProps {
  fromColor: string;
  toColor: string;
  blurEdges?: boolean;
}

function MicroDivider({ fromColor, toColor, blurEdges = false }: MicroDividerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
      }}
    >
      {blurEdges && (
        <>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-current to-transparent pointer-events-none" style={{ filter: 'blur(4px)' }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-current to-transparent pointer-events-none" style={{ filter: 'blur(4px)' }}></div>
        </>
      )}
      <div className="h-5 md:h-7 flex items-center justify-center">
        <div
          className={`w-[120px] h-[2px] rounded-full transition-opacity duration-600 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(to right, #007BFF, #C70039)',
            opacity: 0.6,
            boxShadow: '0 0 8px rgba(0, 123, 255, 0.3), 0 0 12px rgba(199, 0, 57, 0.3)',
            transform: 'translateZ(0)',
            willChange: 'opacity',
          }}
        />
      </div>
    </div>
  );
}

export default MicroDivider;
