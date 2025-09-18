# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **ButtonsHeader Component** - Created a reusable navigation button component for the dashboard header
  - Supports icon display with dynamic styling based on selection state
  - Includes smooth transitions and press feedback for better UX
  - Provides clean debug logging for development and troubleshooting
  - Used for switching between Links and Profile sections in the dashboard
  - Follows the established design system with proper color tokens and spacing

- **Platform Data & Dropdown System** - Comprehensive platform management system
  - **platforms.ts** - Complete dataset with 13 platforms (GitHub, Dev.to, Frontend Mentor, Codewars, Twitter, freeCodeCamp, LinkedIn, GitLab, YouTube, Hashnode, Facebook, Stack Overflow, Twitch)
  - Each platform includes: unique ID, name, brand color, and SVG icon path
  - Utility functions for platform retrieval and sorting
  - **PlatformDropdown Component** - Elegant dropdown menu for platform selection
    - Dynamic SVG icon loading with brand colors
    - Smooth modal animations and touch feedback
    - Responsive design with proper accessibility
    - Clean debug logging for development
    - Pressable effects with ripple animations

### Technical Details
- Components located at `/components/ButtonsHeader.tsx` and `/components/PlatformDropdown.tsx`
- Platform data at `/assets/platforms.ts`
- Uses TypeScript interfaces for type safety
- Implements proper accessibility patterns with Pressable components
- Leverages the theme system for consistent styling
- Includes comprehensive JSDoc documentation
- Dynamic require() for SVG icon imports
- Modal-based dropdown with overlay and scroll support
