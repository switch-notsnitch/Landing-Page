# SWITCH Landing Page

A modern, responsive landing page for the SWITCH app - a campus-exclusive social platform.

## Features

- **Minimal Black & White Design**: Clean, professional aesthetic with SWITCH brand colors
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging transitions and scroll effects
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **SEO Optimized**: Semantic HTML structure and meta tags
- **Fast Loading**: Optimized assets and lazy loading

## Project Structure

```
Switch Landing page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── switch logo (2).png # SWITCH logo
└── README.md           # This file
```

## Sections

1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Logo, tagline, and main CTA buttons
3. **About Section**: App description and features
4. **Pre-registration Benefits**: User benefits and signup
5. **Creator Program**: Creator benefits and registration
6. **Anonymous Stories**: Story submission section
7. **Download Section**: App store links and QR code
8. **Footer**: Contact info and legal links

## Customization

### Colors
The design uses CSS custom properties for easy color customization:

```css
:root {
    --primary-black: #000000;
    --primary-white: #ffffff;
    --accent-color: #ff6b35;
    --secondary-accent: #4ecdc4;
}
```

### Form URLs
Update the following functions in `script.js` with your actual form URLs:

- `openPreRegistration()` - Pre-registration form
- `openCreatorRegistration()` - Creator registration form
- `openAnonymousStory()` - Anonymous story submission form

### App Store Links
Update the download section with your actual app store URLs:

- App Store URL
- Google Play Store URL
- QR code download link

## Hosting Options

### Static Hosting (Recommended)
This is a static website that can be hosted on:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting
- **Firebase Hosting**: Use Firebase CLI to deploy

### Quick Deploy to Netlify
1. Zip the project folder
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the zip file
4. Your site will be live instantly

### Custom Domain
1. Purchase a domain (e.g., switchapp.com)
2. Update DNS settings to point to your hosting provider
3. Configure SSL certificate (usually automatic)

## Performance Optimization

- **Lazy Loading**: Images load only when needed
- **Debounced Scroll Events**: Optimized scroll performance
- **Minified Assets**: Consider minifying CSS/JS for production
- **CDN**: Use a CDN for faster global delivery

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Analytics Integration

To add Google Analytics, add this script before the closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Future Enhancements

- [ ] Add more interactive animations
- [ ] Implement A/B testing for CTAs
- [ ] Add newsletter signup
- [ ] Create admin panel for content management
- [ ] Add multi-language support
- [ ] Implement progressive web app features

## Maintenance

### Regular Updates
- Update form URLs when needed
- Refresh content and statistics
- Monitor performance and user feedback
- Keep dependencies updated

### Content Updates
- Update university count (currently 1,078)
- Refresh social media follower counts
- Update contact information
- Add new features or benefits

## Support

For technical support or questions about the landing page, please contact the development team.

## License

© 2024 Switch. All rights reserved.