import { FiArrowRight } from 'react-icons/fi';

interface KnowledgeListProps {
  title: string;
  items: string[];
}

export default function KnowledgeList({ title, items }: KnowledgeListProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <FiArrowRight className="text-accent-blue flex-shrink-0" size={18} />
            <span className="text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
