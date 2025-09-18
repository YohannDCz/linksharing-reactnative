import DragAndDrop from '@/assets/images/icon-drag-and-drop.svg';
import { Platform } from '@/assets/platforms';
import { colors, typography } from '@/theme/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PlatformDropdown from './PlatformDropdown';

/**
 * Props interface pour le composant LinkForm
 */
interface LinkFormProps {
  /** Numéro du lien (pour l'affichage) */
  linkNumber: number;
  /** Callback appelé quand la plateforme change */
  onPlatformChange?: (platform: Platform) => void;
  /** Callback appelé quand l'URL change */
  onUrlChange?: (url: string) => void;
  /** Callback appelé pour supprimer le lien */
  onRemove?: () => void;
}

/**
 * LinkForm Component
 * 
 * Formulaire pour créer/éditer un lien avec sélection de plateforme.
 * Inclut le dropdown des plateformes et un champ URL.
 * Utilisé dans l'interface de gestion des liens du dashboard.
 */
const LinkForm: React.FC<LinkFormProps> = ({
  linkNumber,
  onPlatformChange,
  onUrlChange,
  onRemove
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | undefined>();
  const [url, setUrl] = useState('');

  // Debug print pour le développement
  console.log('🔗 LinkForm rendered:', { linkNumber, selectedPlatform: selectedPlatform?.name });

  /**
   * Gère la sélection d'une plateforme
   */
  const handlePlatformSelect = (platform: Platform) => {
    console.log('🔗 Platform selected in LinkForm:', platform.name);
    setSelectedPlatform(platform);
    onPlatformChange?.(platform);
  };

  /**
   * Gère le changement d'URL
   */
  const handleUrlChange = (newUrl: string) => {
    console.log('🔗 URL changed in LinkForm:', newUrl);
    setUrl(newUrl);
    onUrlChange?.(newUrl);
  };

  return (
    <View style={styles.container}>
      {/* En-tête avec numéro et bouton supprimer */}
      <View style={styles.header}>
        <View style={styles.linkInfo}>
          <DragAndDrop style={styles.dragIcon} />
          <Text style={styles.linkNumber}>Lien #{linkNumber}</Text>
        </View>
        <Text style={styles.removeButton} onPress={onRemove}>
          Supprimer
        </Text>
      </View>

      {/* Sélection de plateforme */}
      <View style={styles.field}>
        <Text style={styles.label}>Plateforme</Text>
        <PlatformDropdown
          selectedPlatform={selectedPlatform}
          onSelect={handlePlatformSelect}
          placeholder="Choisir une plateforme"
        />
      </View>

      {/* Champ URL */}
      <View style={styles.field}>
        <Text style={styles.label}>Lien</Text>
        <TextInput
          style={styles.input}
          value={url}
          onChangeText={handleUrlChange}
          placeholder="ex: https://www.github.com/johnappleseed"
          placeholderTextColor={colors.colorGrey}
          keyboardType="url"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorLightGrey,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  linkInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dragIcon: {
    width: 12,
    height: 8,
    marginRight: 8,
    tintColor: colors.colorGrey,
  },
  linkNumber: {
    ...typography.headingS,
    color: colors.colorGrey,
  },
  removeButton: {
    ...typography.bodyM,
    color: colors.colorGrey,
  },
  field: {
    marginBottom: 12,
  },
  label: {
    ...typography.bodyS,
    color: colors.colorDarkGrey,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.colorBorders,
    borderRadius: 8,
    backgroundColor: colors.colorWhite,
    padding: 16,
    ...typography.bodyM,
    color: colors.colorDarkGrey,
    minHeight: 48,
  },
});

export default LinkForm;
