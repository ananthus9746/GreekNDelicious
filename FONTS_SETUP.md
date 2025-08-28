# Font Setup Guide for Greek N Delicious

This project uses four main fonts: **Aalto**, **Minion Pro**, **BOUNTIES**, and **Poppins**.

## Font Sources and Setup

### 1. Poppins (Google Fonts) ✅
- **Status**: Automatically loaded via Google Fonts
- **No action required** - already configured in `index.html`

### 2. Minion Pro (Adobe Fonts) ⚠️
- **Status**: Requires Adobe Fonts subscription
- **Setup Required**:
  1. Get an Adobe Fonts subscription
  2. Add Minion Pro to your Adobe Fonts library
  3. Replace `[YOUR_KIT_CODE]` in `index.html` with your actual Adobe Fonts kit code
  4. Or download Minion Pro files and place them in `/public/fonts/` directory

### 3. Aalto (Custom Font) 📁
- **Status**: Requires font files
- **Setup Required**:
  1. Download Aalto font files (.woff2, .woff, .ttf)
  2. Place them in `/public/fonts/` directory with these names:
     - `Aalto-Regular.woff2`
     - `Aalto-Regular.woff`
     - `Aalto-Regular.ttf`
     - `Aalto-Bold.woff2`
     - `Aalto-Bold.woff`
     - `Aalto-Bold.ttf`
     - `Aalto-Italic.woff2`
     - `Aalto-Italic.woff`
     - `Aalto-Italic.ttf`

### 4. BOUNTIES (Custom Font) 📁
- **Status**: Requires font files
- **Setup Required**:
  1. Download BOUNTIES font files (.woff2, .woff, .ttf)
  2. Place them in `/public/fonts/` directory with these names:
     - `BOUNTIES-Regular.woff2`
     - `BOUNTIES-Regular.woff`
     - `BOUNTIES-Regular.ttf`
     - `BOUNTIES-Bold.woff2`
     - `BOUNTIES-Bold.woff`
     - `BOUNTIES-Bold.ttf`

## How to Use Fonts in Your Components

### CSS Classes
```css
/* Apply fonts using utility classes */
.font-aalto { font-family: var(--font-aalto); }
.font-minion-pro { font-family: var(--font-minion-pro); }
.font-bounties { font-family: var(--font-bounties); }
.font-poppins { font-family: var(--font-poppins); }
```

### CSS Variables
```css
/* Use CSS variables for consistent font usage */
.my-heading {
  font-family: var(--font-aalto);
  font-weight: var(--font-bold);
}

.my-body-text {
  font-family: var(--font-poppins);
  font-weight: var(--font-regular);
}

.my-brand-text {
  font-family: var(--font-bounties);
  font-weight: var(--font-bold);
}

.my-elegant-text {
  font-family: var(--font-minion-pro);
  font-weight: var(--font-regular);
}
```

### React Components
```jsx
// In your React components
const MyComponent = () => {
  return (
    <div>
      <h1 className="font-aalto">Greek N Delicious</h1>
      <p className="font-poppins">Welcome to our restaurant</p>
      <div className="brand-text">Special Menu</div>
    </div>
  );
};
```

## Font Weights Available

- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Recommended Usage

- **Aalto**: Headings, titles, elegant text
- **Minion Pro**: Body text, descriptions, elegant content
- **BOUNTIES**: Brand name, logo text, special announcements
- **Poppins**: UI elements, buttons, navigation, general body text

## Troubleshooting

1. **Fonts not loading**: Check that font files are in the correct directory
2. **Minion Pro not working**: Verify Adobe Fonts subscription and kit code
3. **Fallback fonts**: The system will use fallback fonts if custom fonts fail to load

## File Structure After Setup

```
public/
├── fonts/
│   ├── fonts.css
│   ├── Aalto-Regular.woff2
│   ├── Aalto-Regular.woff
│   ├── Aalto-Regular.ttf
│   ├── Aalto-Bold.woff2
│   ├── Aalto-Bold.woff
│   ├── Aalto-Bold.ttf
│   ├── Aalto-Italic.woff2
│   ├── Aalto-Italic.woff
│   ├── Aalto-Italic.ttf
│   ├── BOUNTIES-Regular.woff2
│   ├── BOUNTIES-Regular.woff
│   ├── BOUNTIES-Regular.ttf
│   ├── BOUNTIES-Bold.woff2
│   ├── BOUNTIES-Bold.woff
│   └── BOUNTIES-Bold.ttf
```

## Next Steps

1. Download the required font files
2. Place them in the `/public/fonts/` directory
3. Update the Adobe Fonts kit code in `index.html` (if using Minion Pro)
4. Test the fonts in your application
5. Customize font usage in your components as needed

