import React from 'react';

interface ThemeTransitionProps {
  isTransitioning: boolean;
  targetTheme: 'dark' | 'light';
}

export const ThemeTransition: React.FC<ThemeTransitionProps> = ({
  isTransitioning,
  targetTheme,
}) => {
  if (!isTransitioning) return null;

  // When switching Light -> Dark:
  // Curtain is Black Cherry (#5a1212) sweeping across, revealing dark mode
  // Border on the sweep edge is Soft Linen (#e8e3d9)
  // When switching Dark -> Light:
  // Curtain is Soft Linen (#e8e3d9) sweeping across, revealing light mode
  // Border on the sweep edge is Black Cherry (#5a1212)
  const isTargetDark = targetTheme === 'dark';
  const bgColor = isTargetDark ? '#5a1212' : '#e8e3d9';
  const borderColor = isTargetDark ? '#e8e3d9' : '#5a1212';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
    >
      <div
        className="absolute top-0 -left-[15vw] h-full w-[130vw] border-x animate-theme-sweep"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
        }}
      />
    </div>
  );
};
