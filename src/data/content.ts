import {
  Brain,
  Compass,
  HeartHandshake,
  Church,
  Users,
  Mic,
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Linkedin,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'My Story', href: '#story' },
  { label: 'The Masterclass', href: '#masterclass' },
  { label: 'Work With Me', href: '#work-with-me' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Resources', href: '#resources' },
];

export const heroRoles = [
  'Chemical Engineer.',
  'Pastor.',
  'Speaker.',
  'Mentor.',
];

export type NumberItem = {
  number: string;
  text: string;
};

export const numbers: NumberItem[] = [
  { number: '11', text: 'I lost my mother.' },
  { number: '13', text: 'I became the breadwinner.' },
  { number: '15', text: 'I became an orphan.' },
  { number: 'R100', text: 'I started again.' },
];

export type StoryPoint = {
  year: string;
  title: string;
  text: string;
  image?: string;
};

export const storyPoints: StoryPoint[] = [
  {
    year: 'The Beginning',
    title: 'Humble Beginnings',
    text: 'Brighton Rimba was born into humble beginnings in Zimbabwe. From the start, life offered no guarantees — only the quiet strength of a family that would be tested beyond measure.',
  },
  {
    year: 'Age 11',
    title: 'The Loss of a Mother',
    text: 'At eleven years old, Brighton lost his mother. The world that should have been safe and familiar collapsed. A boy was left to understand grief long before he could understand life.',
  },
  {
    year: 'Age 13',
    title: 'The Breadwinner',
    text: 'Two years later, his father fell sick. At thirteen, Brighton became the breadwinner for his family. Childhood ended not with a celebration, but with a responsibility no child should carry.',
  },
  {
    year: 'Age 15',
    title: 'An Orphan',
    text: 'At fifteen, his father passed away. Brighton and his brother had to survive without parents. He was an orphan — but he was not finished.',
  },
  {
    year: 'The Detour',
    title: 'University & the Drop-Out',
    text: 'Brighton paid his first university fees himself. But the weight of survival was heavy. He failed his second year and dropped out. The dream of education seemed over.',
  },
  {
    year: '2016',
    title: 'A New Country',
    text: 'In 2016, Brighton left Zimbabwe and came to South Africa. He arrived with little more than the conviction that his story was not yet finished.',
  },
  {
    year: '1 Jan 2017',
    title: 'The R100 Gift',
    text: 'On the 1st of January 2017, ladies at his church gave him a R100 birthday gift. It was a small act of kindness. But for Brighton, it was the seed of a new beginning.',
  },
  {
    year: 'The Rebuild',
    title: 'Selling Magwinya',
    text: 'He used that R100 to start selling magwinya on the streets. Day by day, he rebuilt his life from the ground up — one sale, one prayer, one step at a time.',
  },
  {
    year: 'The Return',
    title: 'Back to Study',
    text: 'Brighton returned to studying. The dropout became a student again. The boy who had failed refused to let failure have the final word.',
  },
  {
    year: 'Today',
    title: 'Chemical Engineer. Pastor. Father.',
    text: 'He became a chemical engineer. He became a pastor. He became a husband and a father. And he created The Orphan\'s Masterclass — a platform for everyone who has ever been counted out.',
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: '01',
    title: 'Grief Support & Bereavement Counseling',
    description:
      'Compassionate support for those navigating loss. Having lost both parents by fifteen, Brighton walks with you through the darkest valleys of grief toward healing and hope.',
    icon: HeartHandshake,
  },
  {
    number: '02',
    title: 'Life Coaching & Mentorship',
    description:
      'Practical, personal guidance to help you move from where you are to where you were created to be. One-on-one mentorship rooted in lived experience, not theory.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Resilience Coaching',
    description:
      'Build the inner strength to face adversity without breaking. Brighton helps you develop the mindset and habits that turn hardship into a foundation for growth.',
    icon: Brain,
  },
  {
    number: '04',
    title: 'Faith-Based Counseling',
    description:
      'Spiritually grounded counseling that addresses the whole person — mind, soul and spirit. For those seeking guidance at the intersection of faith and real life.',
    icon: Church,
  },
  {
    number: '05',
    title: 'Youth & Young Adult Mentorship',
    description:
      ' guidance for young people facing their own humble beginnings. Brighton helps the next generation see that where they start does not determine where they finish.',
    icon: Users,
  },
  {
    number: '06',
    title: 'Speaking & Workshops',
    description:
      'Keynote talks and interactive workshops for churches, schools, universities, companies and organisations. Brighton brings his story to your stage and leaves audiences changed.',
    icon: Mic,
  },
];

export type Episode = {
  number: string;
  title: string;
  description: string;
  duration: string;
  date: string;
  featured?: boolean;
};

export const episodes: Episode[] = [
  {
    number: 'EP 01',
    title: 'The Orphan\'s Masterclass: An Introduction',
    description:
      'Brighton shares the story behind the podcast — from losing both parents to becoming a chemical engineer, pastor and speaker. This is where the masterclass begins.',
    duration: '48 min',
    date: '2025',
    featured: true,
  },
  {
    number: 'EP 02',
    title: 'The R100 That Changed Everything',
    description:
      'How a R100 birthday gift became the foundation of a new life. A conversation about small beginnings, faith, and the courage to start again.',
    duration: '42 min',
    date: '2025',
  },
  {
    number: 'EP 03',
    title: 'Grief Doesn\'t Have a Timetable',
    description:
      'Losing his mother at eleven and his father at fifteen taught Brighton that grief is not a problem to solve. It is a road to walk. This episode is for anyone on that road.',
    duration: '55 min',
    date: '2025',
  },
  {
    number: 'EP 04',
    title: 'The Dropout Who Became an Engineer',
    description:
      'Failing university felt like the end. It was actually the beginning. Brighton talks about failure, return, and the discipline it takes to rebuild.',
    duration: '39 min',
    date: '2025',
  },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'TikTok', href: '#', icon: Music2 },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export type AudienceType = {
  label: string;
};

export const speakingAudiences: AudienceType[] = [
  { label: 'Churches' },
  { label: 'Schools' },
  { label: 'Universities' },
  { label: 'Companies' },
  { label: 'Organisations' },
  { label: 'Youth Events' },
];

export type Identity = {
  title: string;
  words: string[];
  description: string;
};

export const identities: Identity[] = [
  {
    title: 'The Engineer',
    words: ['Systems', 'Transformation', 'Sustainability', 'Refinement'],
    description: 'The mind that understands how things work — and how to change them.',
  },
  {
    title: 'The Pastor',
    words: ['Faith', 'Hope', 'Purpose', 'People'],
    description: 'The heart that understands the soul — and how to heal it.',
  },
  {
    title: 'The Orphan',
    words: ['Resilience', 'Adversity', 'Survival', 'Rise'],
    description: 'The story that understands the bottom — and how to climb from it.',
  },
];

export type RiseLine = {
  text: string;
};

export const riseLines: RiseLine[] = [
  { text: 'I was the boy who lost his mother.' },
  { text: 'I was the breadwinner at 13.' },
  { text: 'I was the orphan at 15.' },
  { text: 'I was the dropout.' },
  { text: 'I was the magwinya seller.' },
  { text: 'I was the boy with R100.' },
  { text: 'And I rose.' },
];

export type Role = {
  label: string;
};

export const aboutRoles: Role[] = [
  { label: 'Chemical Engineer' },
  { label: 'Pastor' },
  { label: 'Husband' },
  { label: 'Father' },
  { label: 'Speaker' },
  { label: 'Mentor' },
  { label: 'Podcast Host' },
];
