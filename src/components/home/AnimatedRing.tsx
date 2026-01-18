interface AnimatedRingProps {
  size?: number;
  strokeWidth?: number;
  duration?: number;
  color?: string;
}

export default function AnimatedRing({
  size = 350,
  strokeWidth = 2,
  duration = 3,
  color = '#3b82f6'
}: AnimatedRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * 0.75; // Show 25% of the circle

  return (
    <svg
      width={size}
      height={size}
      className="absolute inset-0 -rotate-90"
      style={{
        animation: `spin ${duration}s linear infinite`
      }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        opacity={0.6}
      />
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </svg>
  );
}
