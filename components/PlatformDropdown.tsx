import ChevronDown from '@/assets/images/icon-chevron-down.svg';
import { Platform, platforms } from '@/assets/platforms';
import { colors, typography } from '@/theme/native';
import React, { useState } from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * Props interface pour le composant PlatformDropdown
 */
interface PlatformDropdownProps {
  /** Plateforme actuellement sélectionnée */
  selectedPlatform?: Platform;
  /** Callback appelé quand une plateforme est sélectionnée */
  onSelect: (platform: Platform) => void;
  /** Placeholder affiché quand aucune plateforme n'est sélectionnée */
  placeholder?: string;
}

/**
 * PlatformDropdown Component
 * 
 * Un menu dropdown élégant pour sélectionner une plateforme.
 * Affiche le logo SVG, le nom de la plateforme et inclut des effets tactiles.
 * Utilisé pour choisir la plateforme d'un lien dans l'interface de gestion des liens.
 */
const PlatformDropdown: React.FC<PlatformDropdownProps> = ({
  selectedPlatform,
  onSelect,
  placeholder = "Choisir une plateforme"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Debug print pour le développement - aide au suivi des interactions
  console.log('🎯 PlatformDropdown rendered:', {
    selectedPlatform: selectedPlatform?.name,
    isVisible
  });

  /**
   * Gère la sélection d'une plateforme
   */
  const handleSelect = (platform: Platform) => {
    console.log('🎯 Platform selected:', platform.name);
    onSelect(platform);
    setIsVisible(false);
  };

  /**
   * Rendu d'un item de plateforme dans le dropdown
   */
  const renderPlatformItem = (platform: Platform) => {
    // Import dynamique du logo SVG
    const IconComponent = require(platform.iconPath.replace('@/', '../')).default;

    return (
      <Pressable
        key={platform.id}
        style={({ pressed }) => [
          styles.dropdownItem,
          pressed && styles.dropdownItemPressed
        ]}
        onPress={() => handleSelect(platform)}
        android_ripple={{ color: colors.colorLightPurple }}
      >
        <View style={styles.platformInfo}>
          <View style={[styles.iconContainer, { backgroundColor: platform.color }]}>
            <IconComponent style={styles.platformIcon} />
          </View>
          <Text style={styles.platformName}>{platform.name}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      {/* Bouton principal du dropdown */}
      <Pressable
        style={({ pressed }) => [
          styles.dropdownButton,
          pressed && styles.dropdownButtonPressed
        ]}
        onPress={() => {
          console.log('🎯 Dropdown button pressed');
          setIsVisible(true);
        }}
        android_ripple={{ color: colors.colorLightPurple }}
      >
        <View style={styles.buttonContent}>
          {selectedPlatform ? (
            <>
              {/* Affichage de la plateforme sélectionnée */}
              <View style={styles.selectedPlatform}>
                <View style={[styles.iconContainer, { backgroundColor: selectedPlatform.color }]}>
                  {(() => {
                    const IconComponent = require(selectedPlatform.iconPath.replace('@/', '../')).default;
                    return <IconComponent style={styles.platformIcon} />;
                  })()}
                </View>
                <Text style={styles.selectedText}>{selectedPlatform.name}</Text>
              </View>
            </>
          ) : (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}
          <ChevronDown style={[styles.chevron, isVisible && styles.chevronRotated]} />
        </View>
      </Pressable>

      {/* Modal du dropdown */}
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            <ScrollView
              style={styles.dropdownList}
              showsVerticalScrollIndicator={false}
            >
              {platforms.map(renderPlatformItem)}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  dropdownButton: {
    borderWidth: 1,
    borderColor: colors.colorBorders,
    borderRadius: 8,
    backgroundColor: colors.colorWhite,
    padding: 16,
    minHeight: 48,
  },
  dropdownButtonPressed: {
    backgroundColor: colors.colorLightGrey,
    borderColor: colors.colorPurple,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedPlatform: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 16,
    height: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  platformIcon: {
    width: 12,
    height: 12,
    tintColor: colors.colorWhite,
  },
  selectedText: {
    ...typography.bodyM,
    color: colors.colorDarkGrey,
    flex: 1,
  },
  placeholderText: {
    ...typography.bodyM,
    color: colors.colorGrey,
    flex: 1,
  },
  chevron: {
    width: 12,
    height: 12,
    tintColor: colors.colorPurple,
  },
  chevronRotated: {
    transform: [{ rotate: '180deg' }],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    backgroundColor: colors.colorWhite,
    borderRadius: 12,
    maxHeight: 300,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownList: {
    maxHeight: 300,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.colorLightGrey,
  },
  dropdownItemPressed: {
    backgroundColor: colors.colorLightPurple,
  },
  platformInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformName: {
    ...typography.bodyM,
    color: colors.colorDarkGrey,
    marginLeft: 12,
  },
});

export default PlatformDropdown;
