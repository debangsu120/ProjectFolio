interface StatusCardProps {
  title: string;
  subtitle: string;
  type: 'ongoing' | 'pending';
}

export default function StatusCard({ title, subtitle, type }: StatusCardProps) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-white/90 mb-1">{title}</h3>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${
          type === 'ongoing' 
            ? 'bg-green-400 shadow-lg shadow-green-400/30' 
            : 'bg-amber-400 shadow-lg shadow-amber-400/30'
        }`} />
      </div>
    </div>
  );
}