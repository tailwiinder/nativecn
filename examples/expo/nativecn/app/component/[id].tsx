import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '../../lib/ThemeContext';
import Header from '../components/Header';
import componentsData from '../components/componentsData';

// Import all component showcase content
import AccordionShowcase from './showcases/AccordionShowcase';
import ButtonShowcase from './showcases/ButtonShowcase';
import AlertShowcase from './showcases/AlertShowcase';
import AlertDialogShowcase from './showcases/AlertDialogShowcase';
import AspectRatioShowcase from './showcases/AspectRatioShowcase';
import AvatarShowcase from './showcases/AvatarShowcase';
import BadgeShowcase from './showcases/BadgeShowcase';
import BreadcrumbShowcase from './showcases/BreadcrumbShowcase';
import CardShowcase from './showcases/CardShowcase';
import CarouselShowcase from './showcases/CarouselShowcase';
import OTPInputShowCase from './showcases/InputOtpShowCase';
import SkeletonShowcase from './showcases/SkeletonShowcase';

// Component mapping for dynamic rendering
const COMPONENT_SHOWCASES: Record<string, React.ComponentType> = {
  accordion: AccordionShowcase,
  button: ButtonShowcase,
  alert: AlertShowcase,
  alertdialog: AlertDialogShowcase,
  aspectratio: AspectRatioShowcase,
  avatar: AvatarShowcase,
  badge: BadgeShowcase,
  breadcrumb: BreadcrumbShowcase,
  card: CardShowcase,
  carousel: CarouselShowcase,
  OTPInput: OTPInputShowCase,
  Skeleton: SkeletonShowcase,
};

export default function ComponentDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Find component data
  const componentData = componentsData.find(c => c.id === id);

  // Get the showcase component
  const ShowcaseComponent = id ? COMPONENT_SHOWCASES[id] : null;

  if (!componentData || !ShowcaseComponent) {
    return (
      <SafeAreaView className={`flex-1 ${isDark ? 'bg-dark-background' : 'bg-background'}`}>
        <Header title="Component Not Found" showBack />
        <View className="flex-1 items-center justify-center p-4">
          <Text className={isDark ? 'text-dark-foreground' : 'text-foreground'}>
            Component not found or showcase not implemented yet.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-dark-background' : 'bg-background'}`}>
      <Header title={componentData.name} showBack />
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text
            className={`text-base mb-6 ${
              isDark ? 'text-dark-muted-foreground' : 'text-muted-foreground'
            }`}
          >
            {componentData.description}
          </Text>

          <ShowcaseComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
