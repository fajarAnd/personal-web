interface InfoItem {
  label: string;
  value: string;
}

interface PersonalInfoGridProps {
  leftColumn?: InfoItem[];
  rightColumn?: InfoItem[];
}

const defaultLeftColumn: InfoItem[] = [
  { label: 'Birthday', value: '01.07.1990' },
  { label: 'Age', value: '32' },
  { label: 'Address', value: 'Ave 11, New York, USA' },
  { label: 'Email', value: 'tokyo@gmail.com' },
  { label: 'Phone', value: '+77 022 177 05 05' },
];

const defaultRightColumn: InfoItem[] = [
  { label: 'Nationality', value: 'USA' },
  { label: 'Study', value: 'University of Texas' },
  { label: 'Degree', value: 'Master' },
  { label: 'Interest', value: 'Playing Football' },
  { label: 'Freelance', value: 'Available' },
];

export default function PersonalInfoGrid({
  leftColumn = defaultLeftColumn,
  rightColumn = defaultRightColumn
}: PersonalInfoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {/* Left Column */}
      <div className="space-y-4">
        {leftColumn.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="font-semibold text-sm text-text-secondary min-w-[100px]">
              {item.label}:
            </span>
            <span className="text-white">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {rightColumn.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="font-semibold text-sm text-text-secondary min-w-[100px]">
              {item.label}:
            </span>
            <span className="text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
