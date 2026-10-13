# Vision Estates Design Rules

## Global UI
- **Custom Cursor**: DO NOT use custom cursors. Use the standard browser cursor.
- **Hero Sections**: 
  - MUST have a background image (use `next/image` with `fill` and `object-cover`).
  - `h1` and `h2` titles MUST be limited to a single line (use `whitespace-nowrap` if necessary).
- **Symmetry & Alignment**:
  - Sections with text and images side-by-side MUST use `items-stretch` to ensure equal vertical height.
  - Images next to text MUST be flush with the outer edge of the page (full bleed on one side).
  - Use `grid-cols-12` and `lg:col-span-7` / `lg:col-span-5` for consistent proportions.

## Typography
- **Headings**: Use `Bebas Neue` for high impact.
- **Body**: Use `Inter` for readability.
- **Contrast**: Maintain high contrast between background and text.

## Components
- **Navbar**: Ensure visibility across all sections.
- **Buttons**: Use `MagneticButton` for interactive elements.
- **Images**: Always use `referrerPolicy="no-referrer"` for external images.
