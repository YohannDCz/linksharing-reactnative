import { colors } from '@/theme/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

/**
 * Props interface for the ButtonsHeader component
 * Used for navigation tabs in the dashboard header
 */
interface ButtonsHeaderProps {
  /** SVG icon component to display in the button */
  icon: React.ComponentType<any>;
  /** Whether this button is currently selected/active */
  isSelected: boolean;
  /** Callback function triggered when button is pressed */
  onPress: () => void;
}

/**
 * ButtonsHeader Component
 * 
 * A reusable navigation button component for the dashboard header.
 * Displays an icon and changes appearance based on selection state.
 * Used for switching between Links and Profile sections.
 */
const ButtonsHeader: React.FC<ButtonsHeaderProps> = ({
  icon: IconComponent,
  isSelected,
  onPress
}) => {
  // Debug print for component state - helps with debugging navigation state
  console.log('🔘 ButtonsHeader rendered:', { isSelected });

  return (
    <Pressable
      style={[
        styles.button,
        isSelected ? styles.buttonSelected : styles.buttonUnselected
      ]}
      onPress={() => {
        // Debug print for user interaction - helps track navigation events
        console.log('🔘 ButtonsHeader pressed, isSelected:', isSelected);
        onPress();
      }}
      // Add subtle press feedback for better UX
      android_ripple={{ color: colors.colorLightPurple, borderless: false }}
    >
      <View style={styles.iconContainer}>
        <IconComponent
          style={[
            styles.icon,
            {
              // Dynamic icon color based on selection state
              tintColor: isSelected ? colors.colorPurple : colors.colorGrey
            }
          ]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 42,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // Smooth transition for better UX
    transition: 'background-color 0.2s ease',
  },
  buttonSelected: {
    backgroundColor: colors.colorLightPurple,
  },
  buttonUnselected: {
    backgroundColor: 'transparent',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default ButtonsHeader;
