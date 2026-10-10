'use client';

interface CapabilityCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function CapabilityCard({
  number,
  title,
  description,
  icon,
}: CapabilityCardProps) {
  return (
    <div className="capability-card">
      <div className="capability-card-bg">
        <img 
          src={icon}
          alt=""
          aria-hidden="true"
          className="capability-card-bg-icon"
        />
      </div>
      
      <div className="capability-card-content">
        <div className="capability-card-number">{number}</div>
        <h3 className="capability-card-title">{title}</h3>
        <p className="capability-card-description">{description}</p>
      </div>

      <div className="capability-card-border" />
    </div>
  );
}
