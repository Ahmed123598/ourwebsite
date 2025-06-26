
// src/constants.js
import { 
  Zap, 
  Smartphone, 
  ShoppingCart, 
  BarChart, 
  Rocket, 
  LifeBuoy 
} from 'lucide-react';

// Create icon components
const LightningBoltIcon = () => <Zap className="w-6 h-6" />;
const DeviceMobileIcon = () => <Smartphone className="w-6 h-6" />;
const ShoppingCartIcon = () => <ShoppingCart className="w-6 h-6" />;
const ChartBarIcon = () => <BarChart className="w-6 h-6" />;
const RocketIcon = () => <Rocket className="w-6 h-6" />;
const SupportIcon = () => <LifeBuoy className="w-6 h-6" />;

export const navItems = [
  { label: 'Home', href: '/' },
   { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const features = [
  {
    icon: <LightningBoltIcon />,
    text: "Custom Web Development",
    description: "Tailored solutions built from scratch to meet your specific business requirements."
  },
  {
    icon: <DeviceMobileIcon />,
    text: "Responsive Design",
    description: "Flawless experience across all devices - mobile, tablet, and desktop."
  },
  {
    icon: <ShoppingCartIcon />,
    text: "E-commerce Solutions",
    description: "Secure online stores with payment processing and inventory management."
  },
  {
    icon: <ChartBarIcon />,
    text: "SEO Optimization",
    description: "Built-in search engine optimization to improve your visibility."
  },
  {
    icon: <RocketIcon />,
    text: "Performance Optimization",
    description: "Lightning-fast websites that load in under 2 seconds."
  },
  {
    icon: <SupportIcon />,
    text: "Ongoing Maintenance",
    description: "Regular updates and technical support to keep your site running smoothly."
  }
];
export const testimonials = [
  {
    text: 'Working with this developer transformed our online presence! Our conversion rate increased by 40% after the website redesign.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    user: 'Michael Johnson',
    company: 'Tech Innovations Inc.',
  },
  {
    text: 'Exceptional attention to detail and communication. Delivered our e-commerce site ahead of schedule with perfect mobile responsiveness.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    user: 'Sarah Williams',
    company: 'Boutique Fashion',
  },
  {
    text: 'The developer understood our complex requirements and implemented solutions that exceeded our expectations. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    user: 'Robert Chen',
    company: 'SaaS Startup',
  },
];

// Add to src/constants.js
export const portfolioItems = [
  {
    title: "Portfolio",
    description: "Full-featured online store with cart, checkout, and payment processing",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=500&auto=format&fit=crop",
    category: "Web Application",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    
    liveLink: "https://myprojectsa.netlify.app/"
  },
  {
    title: "Health Care",
    description: "Analytics dashboard for tracking business metrics and KPIs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    category: "Dashboard",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/yourusername/dashboard-project",
    liveLink: "https://pharbetter.com/"
  },
  {
    title: "Madarsa",
    description: "Mobile-first travel booking platform with search and filtering",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=500&auto=format&fit=crop",
    category: "Travel",
    technologies: ["Next.js", "Firebase", "Mapbox", "Tailwind CSS"],
    github: "https://github.com/yourusername/travel-app",
    liveLink: "https://jimq.in/"
  },
  {
    title: "Login page",
    description: "Workout tracking app with progress visualization and routines",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500&auto=format&fit=crop",
    category: "Health & Fitness",
    technologies: ["React Native", "Express", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/fitness-app",
    liveLink: "https://tiny-dragon-5890f7.netlify.app/"
  },
  {
    title: "Restaurant Website",
    description: "Modern restaurant website with online reservation system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop",
    category: "Food & Beverage",
    technologies: ["JavaScript", "CSS3", "HTML5", "Google Maps API"],
    github: "https://github.com/yourusername/restaurant-site",
    liveLink: "https://your-restaurant-demo.com"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with search and virtual tours",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500&auto=format&fit=crop",
    category: "Real Estate",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloudinary"],
    github: "https://github.com/yourusername/real-estate-app",
    liveLink: "https://your-realestate-demo.com"
  }
];
export const checklistItems = [
  {
    title: 'Web Development',
    description: 'Full-stack custom website development using modern technologies like React, Node.js, and more.',
  },
  {
    title: 'Web Designing',
    description: 'Creative and responsive UI/UX design using Tailwind CSS, Figma, and best design practices.',
  },
  {
    title: 'Web Applications',
    description: 'Dynamic and data-driven applications like dashboards, CRMs, or booking systems.',
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress themes and plugins with SEO optimization and Elementor-based design.',
  },
  {
    title: 'React.js Development',
    description: 'Fast and scalable frontend solutions using React.js, React Router, and component-driven design.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support, backups, security updates, and performance monitoring for your websites.',
  },
];


export const resourcesLinks = [
  { text: 'Documentation', href: '#' },
  { text: 'Blog', href: '#' },
  { text: 'Tutorials', href: '#' },
  { text: 'Support', href: '#' },
];

export const platformLinks = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Contact', href: '/contact' },
];

export const communityLinks = [
  { text: 'LinkedIn', href: '#' },
  { text: 'GitHub', href: '#' },
  { text: 'Twitter', href: '#' },
  { text: 'Instagram', href: '#' },
];