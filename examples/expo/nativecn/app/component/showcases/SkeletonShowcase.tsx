import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Skeleton } from '../../../components/ui';
import { useTheme } from '../../../lib/ThemeContext';

const SkeletonShowcase = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <ScrollView className="flex-1 p-4">
      {/* Card Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          1) Card Layout
        </Text>
        <View className="flex flex-col gap-4 ml-4">
          <Skeleton mode={theme} className="h-32 w-full rounded-xl" />
          <View className="flex flex-col gap-2">
            <Skeleton mode={theme} className="h-4 w-4/5 rounded-md" />
            <Skeleton mode={theme} className="h-4 w-3/4 rounded-md" />
            <Skeleton mode={theme} className="h-4 w-2/3 rounded-md" />
          </View>
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Perfect for content cards with an image header and multiple lines of text.
        </Text>
      </View>

      {/* Profile Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          2) Profile Layout
        </Text>
        <View className="flex flex-row ml-4">
          <Skeleton mode={theme} className="h-16 w-16 rounded-full" />
          <View className="ml-4 flex flex-col gap-2 justify-center">
            <Skeleton mode={theme} className="h-4 w-32 rounded-md" />
            <Skeleton mode={theme} className="h-3 w-24 rounded-md" />
          </View>
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Ideal for user profiles with avatar and name/description.
        </Text>
      </View>

      {/* List Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          3) List Layout
        </Text>
        <View className="flex flex-col gap-3 ml-4">
          {[1, 2, 3].map(item => (
            <View key={item} className="flex flex-row items-center">
              <Skeleton mode={theme} className="h-12 w-12 rounded-lg" />
              <View className="ml-3 flex-1">
                <Skeleton mode={theme} className="h-3 w-3/4 rounded-md" />
                <Skeleton mode={theme} className="h-2 w-1/2 rounded-md mt-2" />
              </View>
            </View>
          ))}
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Great for lists with thumbnails and multiple text lines per item.
        </Text>
      </View>

      {/* Grid Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          4) Grid Layout
        </Text>
        <View className="flex flex-row flex-wrap ml-4">
          {[1, 2, 3, 4].map(item => (
            <View key={item} className="w-1/2 p-1">
              <Skeleton mode={theme} className="h-28 w-full rounded-lg" />
              <Skeleton mode={theme} className="h-3 w-4/5 rounded-md mt-2" />
            </View>
          ))}
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Useful for image grids or product galleries with captions.
        </Text>
      </View>

      {/* Form Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          5) Form Layout
        </Text>
        <View className="flex flex-col gap-4 ml-4">
          <View>
            <Skeleton mode={theme} className="h-3 w-24 rounded-md mb-1" />
            <Skeleton mode={theme} className="h-10 w-full rounded-md" />
          </View>
          <View>
            <Skeleton mode={theme} className="h-3 w-32 rounded-md mb-1" />
            <Skeleton mode={theme} className="h-10 w-full rounded-md" />
          </View>
          <View>
            <Skeleton mode={theme} className="h-3 w-28 rounded-md mb-1" />
            <Skeleton mode={theme} className="h-24 w-full rounded-md" />
          </View>
          <Skeleton mode={theme} className="h-12 w-32 rounded-md mt-2" />
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Perfect for forms with labels and input fields while data is loading.
        </Text>
      </View>

      {/* Article Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          6) Article Layout
        </Text>
        <View className="flex flex-col gap-4 ml-4">
          <Skeleton mode={theme} className="h-5 w-4/5 rounded-md" />
          <Skeleton mode={theme} className="h-4 w-3/5 rounded-md" />
          <Skeleton mode={theme} className="h-40 w-full rounded-xl" />
          <View className="flex flex-col gap-2">
            <Skeleton mode={theme} className="h-3 w-full rounded-md" />
            <Skeleton mode={theme} className="h-3 w-full rounded-md" />
            <Skeleton mode={theme} className="h-3 w-4/5 rounded-md" />
            <Skeleton mode={theme} className="h-3 w-full rounded-md" />
            <Skeleton mode={theme} className="h-3 w-3/4 rounded-md" />
          </View>
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Designed for blog posts or articles with title, subtitle, feature image, and paragraphs.
        </Text>
      </View>

      {/* Statistics Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          7) Statistics Layout
        </Text>
        <View className="flex flex-row flex-wrap ml-4">
          {[1, 2, 3].map(item => (
            <View key={item} className="w-1/3 p-1">
              <Skeleton mode={theme} className="h-16 w-16 rounded-full mx-auto" />
              <Skeleton mode={theme} className="h-4 w-3/4 rounded-md mt-2 mx-auto" />
              <Skeleton mode={theme} className="h-3 w-1/2 rounded-md mt-1 mx-auto" />
            </View>
          ))}
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Ideal for dashboards with key metrics or statistics display.
        </Text>
      </View>

      {/* Timeline Layout */}
      <View className="mb-10">
        <Text
          className={`text-xl mb-4 font-bold ${isDark ? 'text-dark-foreground' : 'text-foreground'}`}
        >
          8) Timeline Layout
        </Text>
        <View className="flex flex-col ml-4">
          {[1, 2, 3].map(item => (
            <View key={item} className="flex flex-row mb-4">
              <View className="mr-4 items-center">
                <Skeleton mode={theme} className="h-6 w-6 rounded-full" />
                {item < 3 && (
                  <View className={`h-16 w-1 ${isDark ? 'bg-[#1E1E1E]' : 'bg-[#E5E5E5]'} mt-1`} />
                )}
              </View>
              <View className="flex-1">
                <Skeleton mode={theme} className="h-4 w-24 rounded-md" />
                <Skeleton mode={theme} className="h-3 w-32 rounded-md mt-1" />
                <Skeleton mode={theme} className="h-20 w-full rounded-lg mt-2" />
              </View>
            </View>
          ))}
        </View>
        <Text className="mt-2 text-sm text-muted-foreground">
          Great for activity feeds, history views, or step-by-step processes.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SkeletonShowcase;
