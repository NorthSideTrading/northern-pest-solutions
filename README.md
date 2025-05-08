# Northern Pest Solutions Website

## Color Palette

The website uses the following color palette:

- `--nps-forest: #1B3C2F` - Dark green from logo (primary color for navigation, headings)
- `--nps-amber: #F6B04D` - Amber accent from logo abdomen (CTA buttons, highlights)
- `--nps-ivory: #F5F7F4` - Light background from logo (backgrounds, text on dark)
- `--nps-sage: #8BAE89` - Optional muted green tint (secondary backgrounds)

## Logo Usage

The logo is stored at `assets/logo.png` and is used in the navigation bar and as a favicon. The logo should always maintain its proportions with a maximum height of 40px in the header.

## Button Styles

Two button utility classes are available:

```css
.btn-primary {
  @apply bg-[var(--nps-amber)] text-[var(--nps-forest)] rounded-full font-semibold px-5 py-2 hover:bg-[var(--nps-amber)]/90 transition;
}

.btn-outline {
  @apply border border-[var(--nps-amber)] text-[var(--nps-amber)] rounded-full font-semibold px-5 py-2 hover:bg-[var(--nps-amber)]/10 transition;
}
```

## Sections

All sections use consistent spacing:
- Padding: `py-16 px-6 md:px-10`
- Alternating sections can use `.section-tint` for a subtle background variation

## Navigation

The navigation is sticky with a height of 64px (`h-16`) and uses a slightly translucent background for depth.