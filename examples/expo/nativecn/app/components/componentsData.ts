import { Feather } from '@expo/vector-icons';

export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentProps<typeof Feather>['name'];
  category: 'Basic' | 'Layout' | 'Input' | 'Display' | 'Navigation';
}

const componentsData: ComponentInfo[] = [
  {
    id: 'accordion',
    name: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    icon: 'layers',
    category: 'Display',
  },
  {
    id: 'button',
    name: 'Button',
    description: 'Allows users to take actions with a single tap, with various styles and sizes.',
    icon: 'square',
    category: 'Basic',
  },
  {
    id: 'alert',
    name: 'Alert',
    description:
      'Displays a callout for user attention, with support for different severities and content.',
    icon: 'alert-circle',
    category: 'Display',
  },
  {
    id: 'alertdialog',
    name: 'Alert Dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
    icon: 'alert-octagon',
    category: 'Display',
  },
  {
    id: 'aspectratio',
    name: 'Aspect Ratio',
    description:
      'Maintains a consistent width-to-height ratio for its content, ideal for responsive media.',
    icon: 'crop',
    category: 'Layout',
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'Represents a user with profile picture, initials, or fallback icon.',
    icon: 'user',
    category: 'Display',
  },
  {
    id: 'badge',
    name: 'Badge',
    description:
      'Small status descriptors for UI elements, available in different variants and can be interactive.',
    icon: 'tag',
    category: 'Display',
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    description:
      'Navigation component that helps users understand where they are in the application hierarchy.',
    icon: 'navigation',
    category: 'Navigation',
  },
  {
    id: 'card',
    name: 'Card',
    description:
      'Container for displaying content and actions about a single subject, with support for headers, footers, and various content types.',
    icon: 'credit-card',
    category: 'Layout',
  },
  {
    id: 'carousel',
    name: 'Carousel',
    description:
      'A slideshow component for cycling through elements, with support for previous/next navigation and both horizontal and vertical orientations.',
    icon: 'image',
    category: 'Display',
  },
  {
    id: 'OTPInput',
    name: 'OTP Input',
    description:
      'The OTPInputShowCase component demonstrates various OTP input styles, including basic, separated, secure, disabled, and custom-length inputs.',
    icon: 'bell',
    category: 'Input',
  },
  {
    id: 'Skeleton',
    name: 'Skeleton',
    description: 'Use to show a placeholder while content is loading.',
    icon: 'loader',
    category: 'Layout',
  },
  // Future components can be added here
];

export default componentsData;
