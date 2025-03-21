import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';

export const Skeleton = ({
  className,
  mode,
  animated = true,
}: {
  className: string;
  mode?: 'light' | 'dark';
  animated?: boolean;
}) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    animatedValue.setValue(0);

    const animationLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 800, // Smooth transition
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }),
      ])
    );

    animationLoop.start();
    return () => {
      animationLoop.stop();
    };
  }, [mode]);

  const animatedBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      mode === 'dark' ? '#1E1E1E' : '#E5E5E5', // Softer base color
      mode === 'dark' ? '#18181A' : '#F2F2F2', // Less intense highlight
    ],
  });

  return animated ? (
    <Animated.View
      className={`overflow-hidden ${className}`}
      style={[{ backgroundColor: animatedBackgroundColor }]}
    />
  ) : (
    <View
      className={`overflow-hidden ${className}`}
      style={{ backgroundColor: `${mode === 'dark' ? '#1E1E1E' : '#E5E5E5'}` }}
    />
  );
};
