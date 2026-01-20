interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

export default function Timeline({ title, items }: TimelineProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-accent-blue/30 pb-6 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent-blue rounded-full" />

            {/* Content */}
            <div className="space-y-2">
              <p className="text-text-secondary text-sm">{item.year}</p>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-text-secondary">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
