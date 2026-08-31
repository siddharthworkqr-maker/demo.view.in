export interface MembershipTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  tagline: string;
  highlighted?: boolean;
  badge?: string;
  description: string;
  features: string[];
  exclusivePerks: string[];
  ctaText: string;
}

export interface ApexPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  stats: { label: string; value: string }[];
  bulletPoints: string[];
  imageUrl: string;
  specs: string[];
}

export interface ClassSession {
  id: string;
  title: string;
  category: 'Metabolic' | 'Hypertrophy' | 'Mobility' | 'Combat' | 'Recovery';
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  duration: string;
  coach: {
    name: string;
    role: string;
    avatar: string;
  };
  intensity: 'Medium' | 'High' | 'Extreme';
  caloriesBurn: string;
  spotsLeft: number;
  totalCapacity: number;
  description: string;
  room: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  occupation: string;
  tier: string;
  timeframe: string;
  headline: string;
  quote: string;
  metrics: {
    metricName: string;
    before: string;
    after: string;
    change: string;
  }[];
  beforeAfterImage: string;
  verifiedMember: boolean;
  avatar: string;
  rating: number;
}

export interface FacilityZone {
  id: string;
  name: string;
  description: string;
  highlight: string;
  capacity: number;
  currentOccupancy: number;
  image: string;
  features: string[];
}
