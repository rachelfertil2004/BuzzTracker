# 🎨 Trailer Tracker - Design System

## Design Philosophy

The Trailer Tracker UI is inspired by **cinematic film intros, movie theaters, and neon movie posters** — featuring a sleek, modern, and slightly futuristic aesthetic with dramatic color contrast.

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Red** | `#C53030` | Primary accent, borders, icons |
| **Midnight Blue** | `#0A0A23` | Backgrounds, cards |
| **Jet Black** | `#000000` | Pure black elements, backgrounds |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Steel Gray** | `#4A5568` | Text, secondary elements |
| **Electric Blue** | `#3B82F6` | Highlights, buttons, interactive elements |

### Additional Shades

| Color | Hex | Usage |
|-------|-----|-------|
| Film Red Dark | `#9B2C2C` | Darker red variations |
| Midnight Blue Light | `#1A1A3E` | Lighter blue backgrounds |
| Steel Gray Light | `#718096` | Lighter text |
| Electric Blue Light | `#60A5FA` | Hover states |

---

## Typography

### Font Families

**Bebas Neue** (Headers & Titles)
- Usage: H1-H6, buttons, labels, badges
- Characteristics: Bold, uppercase, cinematic
- Letter spacing: Wide (0.05em)

**Montserrat** (Body Text)
- Usage: Paragraphs, descriptions, metadata
- Weights: 300, 400, 500, 600, 700, 800, 900
- Characteristics: Modern sans-serif, highly readable

### Font Styles

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.05em;
}

body {
  font-family: 'Montserrat', sans-serif;
}
```

---

## Gradients

### Cinema Gradient (Header)
```css
background: linear-gradient(135deg, #C53030 0%, #000000 50%, #0A0A23 100%)
```
Blend of deep red → black → midnight blue

### Cinema Radial (Background)
```css
background: radial-gradient(circle at center, #0A0A23 0%, #000000 100%)
```
Radial gradient from midnight blue to black

### Card Glow
```css
background: linear-gradient(145deg, rgba(197, 48, 48, 0.1), rgba(59, 130, 246, 0.1))
```
Subtle red-to-blue glow effect

---

## Effects & Shadows

### Neon Shadows

**Neon Red**
```css
box-shadow: 0 0 10px rgba(197, 48, 48, 0.5), 0 0 20px rgba(197, 48, 48, 0.3)
```

**Neon Blue**
```css
box-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)
```

**Neon Subtle**
```css
box-shadow: 0 0 15px rgba(59, 130, 246, 0.2)
```

### Text Glows

**Red Glow**
```css
text-shadow: 0 0 15px rgba(197, 48, 48, 0.6), 0 0 30px rgba(197, 48, 48, 0.4)
```

**Blue Glow**
```css
text-shadow: 0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)
```

---

## Animations

### Fade In
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```
Duration: 0.5s ease-in-out

### Slide Up
```css
@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```
Duration: 0.6s ease-out

### Glow Pulse
```css
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
}
```
Duration: 2s ease-in-out infinite

---

## Component Styling

### Search Bar

- **Background**: Semi-transparent midnight blue (`bg-midnight-blue/60`)
- **Border**: 2px deep red (`border-film-red/50`)
- **Focus State**: Neon red shadow
- **Button**: Electric blue with neon glow

### Movie Cards

- **Background**: Semi-transparent midnight blue with backdrop blur
- **Border**: Electric blue neon border (`.card-neon`)
- **Hover Effect**: 
  - Lift animation (translateY -5px)
  - Enhanced neon glow
  - Shimmer effect overlay

### Buttons

- **Primary**: Gradient from deep red to electric blue
- **Font**: Bebas Neue uppercase
- **Hover**: Scale up (1.05) with enhanced shadow

### Hype Meter

- **Progress Bar**: Gradient based on score level
  - Blockbuster (80-100): Red-orange gradient
  - High Hype (60-79): Red-to-blue gradient
  - Moderate (40-59): Blue-to-red gradient
  - Growing (20-39): Blue gradient
  - Emerging (0-19): Gray-to-blue gradient

---

## Responsive Design

### Breakpoints

- **Mobile**: < 768px (1 column grid)
- **Tablet**: 768px - 1023px (2 column grid)
- **Desktop**: 1024px - 1279px (3 column grid)
- **Large**: ≥ 1280px (4 column grid)

### Mobile Optimizations

- Header font size scales down (text-5xl → text-7xl)
- Touch-friendly button sizes (min 44px)
- Stacked layouts for metadata
- Full-width search bar

---

## Accessibility

### Contrast Ratios

- Text on dark background: WCAG AAA compliant
- Interactive elements have clear visual feedback
- Focus states visible with neon outlines

### Interactive States

- **Hover**: Color change + glow enhancement
- **Focus**: Neon outline
- **Active**: Scale transform

---

## Best Practices

1. **Use backdrop blur** for overlay elements
2. **Apply neon effects sparingly** to avoid overwhelming users
3. **Maintain hierarchy** with font sizes and weights
4. **Ensure smooth transitions** (0.3s - 0.6s)
5. **Test on dark displays** to verify glow visibility

---

## Theme Inspiration

✨ **Cinematic film intros**  
🎬 **Movie theater ambiance**  
🌃 **Neon movie posters**  
🎞️ **Retro-futuristic aesthetics**  

---

*Last Updated: October 2025*
