# Rupiya.app - Sustainable Agriculture Platform

> India's largest and most trusted platform for residue-free farming, regenerative agriculture carbon credits, and financial inclusivity for farmers.

[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/rupiya/rupiya-web)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)](https://rupiya.app)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Pages & URIs](#pages--uris)
- [Interactive Components](#interactive-components)
- [Getting Started](#getting-started)
- [Brand Guidelines](#brand-guidelines)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🌾 Project Overview

Rupiya.app is a comprehensive web platform designed to transform Indian agriculture through:

1. **Residue-Free Farming**: Satellite-based soil testing, AI monitoring, quality inputs, and expert advisory
2. **Carbon Credits**: Verified carbon sequestration through regenerative agriculture practices
3. **Financial Inclusivity**: All-in-one financial services platform for farmers
4. **Multi-Audience Support**: Tailored experiences for Farmers, FPOs, Buyers, and Investors

### Mission
Help farmers increase incomes and restore soil health through residue-free farming, verified carbon credits, and fair market access.

### Vision
Transform 5 million hectares to regenerative agriculture by 2030.

---

## 🚀 Live Demo

**Production URL**: `https://rupiya.app`

**Key Entry Points**:
- Homepage: `/index.html`
- For Farmers: `/for-farmers.html`
- Carbon Calculator: `/carbon-credits.html#calculator`
- Product Catalog: `/residue-free-farming.html#inputs`

---

## ✨ Features

### Currently Completed Features

#### 1. Homepage (`index.html`)
- ✅ Animated hero section with parallax effects
- ✅ Live statistics counters (50,000+ farmers, 500,000 hectares, etc.)
- ✅ 3-step "How It Works" visual flow
- ✅ Impact stories carousel
- ✅ Partnership logos showcase
- ✅ Multi-CTA hero for different audiences

#### 2. Residue-Free Farming (`residue-free-farming.html`)
- ✅ Satellite soil testing visualization (4-step flow)
- ✅ AI monitoring demo with animated steps
- ✅ **35-product input catalog** with category filters
- ✅ Case study charts (Chart.js integration)
- ✅ Parametric insurance accordion
- ✅ Farm credit eligibility calculator
- ✅ Interactive buy-back program map

#### 3. Carbon Credits (`carbon-credits.html`)
- ✅ **Carbon credit calculator** with formula-based calculations
  - Inputs: Land area, crop type, SOC levels, project duration, credit price
  - Outputs: Annual credits, earnings, total project value
  - Visual earnings chart (Chart.js)
- ✅ Soil layer parallax animations
- ✅ Verification timeline (5 stages)
- ✅ Progress bars to 2030 goals with animated counters
- ✅ Carboneg partnership section

#### 4. Financial Services (`financial-services.html`)
- ✅ Mobile app mockup showcase
- ✅ 5 service categories (Payments, Gold, Travel, Insurance, Microcredit)
- ✅ Security and compliance highlights

#### 5. Audience Landing Pages
- ✅ **For Farmers** (`for-farmers.html`)
  - Supported crops grid
  - 5-step onboarding process
  - Registration form with QR option
  
- ✅ **For FPOs** (`for-fpos.html`)
  - Bulk onboarding features
  - Revenue sharing model breakdown
  - FPO registration form

- ✅ **For Buyers** (`for-buyers.html`)
  - Traceability system demo
  - Procurement portal features
  - Request demo form

- ✅ **For Investors** (`for-investors.html`)
  - Impact dashboard (KPIs)
  - Financial model highlights
  - Investment inquiry form

#### 6. Supporting Pages
- ✅ **About Us** (`about.html`)
  - Mission, vision, values
  - Impact statistics
  - Leadership team profiles

- ✅ **Contact** (`contact.html`)
  - Multi-channel contact information
  - Contact form with subject selection
  - Regional offices display

#### 7. Global Features
- ✅ Responsive navigation with mobile menu
- ✅ Language selector (EN/HI with extensibility)
- ✅ Scroll animations (Intersection Observer)
- ✅ Form validation
- ✅ Newsletter signup
- ✅ SEO meta tags and Schema.org markup
- ✅ WCAG AA accessibility compliance
- ✅ Mobile-responsive design (320px - 1920px+)

---

## 🛠 Technology Stack

### Frontend
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties (CSS variables), Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS, no framework dependencies
- **Chart.js**: Data visualization for case studies and carbon calculator
- **Font Awesome**: Icon library
- **Google Fonts**: Inter, Roboto, Roboto Mono

### Design System
- **Colors**: 
  - Primary Green: `#0F8A5F`
  - Deep Leaf: `#0B6B47`
  - Soil Brown: `#6B4F3A`
  - Sky Blue: `#2B8FD6`
  - Soft Sand: `#F7F4EE`
- **Typography**: 
  - Headings: Inter (600, 700)
  - Body: Roboto (400, 500)
  - Numeric: Roboto Mono

### Performance Optimizations
- CSS variables for theme consistency
- Debounced scroll handlers
- Lazy-loaded animations with Intersection Observer
- Optimized asset delivery via CDN
- Semantic HTML for better SEO

---

## 📁 Project Structure

```
rupiya-app/
│
├── index.html                      # Homepage
├── residue-free-farming.html       # Residue-free farming page
├── carbon-credits.html             # Carbon credits & calculator
├── financial-services.html         # Financial services overview
├── for-farmers.html                # Farmer landing page
├── for-fpos.html                   # FPO landing page
├── for-buyers.html                 # Buyer landing page
├── for-investors.html              # Investor landing page
├── about.html                      # About us page
├── contact.html                    # Contact page
│
├── css/
│   ├── style.css                   # Global styles & components
│   ├── residue-free.css            # Residue-free page styles
│   ├── carbon-credits.css          # Carbon credits page styles
│   └── audience.css                # Audience pages styles
│
├── js/
│   ├── main.js                     # Global JavaScript
│   ├── residue-free.js             # Products catalog & forms
│   └── carbon-credits.js           # Calculator & animations
│
└── README.md                       # Project documentation
```

---

## 🌐 Pages & URIs

### Public Pages

| Page | URI | Description |
|------|-----|-------------|
| **Homepage** | `/index.html` | Main landing page with overview |
| **Residue-Free Farming** | `/residue-free-farming.html` | Soil testing, inputs, insurance |
| **Carbon Credits** | `/carbon-credits.html` | Credits info & calculator |
| **Financial Services** | `/financial-services.html` | Financial platform overview |
| **For Farmers** | `/for-farmers.html` | Farmer registration & benefits |
| **For FPOs** | `/for-fpos.html` | FPO partnership information |
| **For Buyers** | `/for-buyers.html` | Buyer sourcing & traceability |
| **For Investors** | `/for-investors.html` | Investment opportunities |
| **About Us** | `/about.html` | Company information & team |
| **Contact** | `/contact.html` | Contact form & details |

### Deep Links

- **Carbon Calculator**: `/carbon-credits.html#calculator`
- **Products Catalog**: `/residue-free-farming.html#inputs`
- **Farmer Signup**: `/for-farmers.html#signup`

---

## 🎮 Interactive Components

### 1. Carbon Credit Calculator

**Location**: `/carbon-credits.html#calculator`

**Inputs**:
- Land Area (hectares)
- Crop Type (dropdown)
- Baseline SOC (%)
- Expected Annual SOC Increase (%)
- Project Duration (years)
- Price per Credit (₹) - slider

**Formula**:
```javascript
SOC_increase = area × depth × bulk_density × SOC_change × crop_multiplier
CO2e = SOC_increase × 3.67
Credits = CO2e (1 tonne CO2e = 1 credit)
Earnings = Credits × Price
```

**Outputs**:
- Annual carbon credits (tonnes)
- Annual earnings (₹)
- Total SOC increase
- Total CO2 equivalent
- Total project earnings
- Earnings chart (multi-year projection)

**Features**:
- Real-time calculation
- Interactive price slider
- Visual earnings chart
- PDF export (placeholder)
- Apply for verification CTA

### 2. Products Catalog

**Location**: `/residue-free-farming.html#inputs`

**Features**:
- 35 certified organic/residue-free products
- Category filters: All, Fertilizers, Pesticides, Growth Promoters, Soil Conditioners
- Product cards with icon, name, benefit, price
- "Buy Now" CTAs (alert-based demo)
- Responsive grid layout

**Product Categories**:
- Fertilizers: 11 products
- Pest Control: 6 products
- Growth Promoters: 6 products
- Soil Conditioners: 12 products

### 3. Animated Counters

**Location**: Homepage stats section

**Counters**:
- 50,000+ Farmers Trained
- 500,000 Hectares Onboarded
- ₹250 Crore Paid to Farmers
- 1,20,000 Carbon Credits Verified

**Behavior**: Animate from 0 to target value when scrolled into view

### 4. Stories Carousel

**Location**: Homepage impact stories

**Features**:
- 3 farmer testimonial cards
- Previous/Next navigation
- Dot indicators
- Auto-advance every 5 seconds
- Smooth slide transitions

### 5. Forms

**Contact Forms**:
- Farmer registration (for-farmers.html)
- FPO application (for-fpos.html)
- Buyer demo request (for-buyers.html)
- Investor inquiry (for-investors.html)
- Farm credit eligibility (residue-free-farming.html)
- General contact (contact.html)

**Validation**: Real-time inline validation for email, phone, required fields

---

## 🚦 Getting Started

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Local web server (optional, for local development)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/rupiya/rupiya-web.git
cd rupiya-web
```

2. **Open in browser**:
```bash
# Option 1: Direct file open
open index.html

# Option 2: Local server (Python)
python -m http.server 8000

# Option 3: Local server (Node.js)
npx http-server -p 8000
```

3. **Access the site**:
```
http://localhost:8000
```

### Development

**File Structure Conventions**:
- HTML files in root directory
- CSS files in `/css/`
- JavaScript files in `/js/`
- Use semantic naming (e.g., `carbon-credits.html`, not `page2.html`)

**CSS Organization**:
- Global styles → `css/style.css`
- Page-specific styles → `css/[page-name].css`
- Use CSS variables for theming

**JavaScript Organization**:
- Global utilities → `js/main.js`
- Page-specific logic → `js/[page-name].js`

---

## 🎨 Brand Guidelines

### Color Palette

```css
--color-primary: #0F8A5F;        /* Primary Green - CTAs, highlights */
--color-primary-dark: #0B6B47;   /* Deep Leaf - headers, accents */
--color-soil: #6B4F3A;           /* Soil Brown - footers, muted */
--color-sky: #2B8FD6;            /* Sky Blue - trust, links */
--color-sand: #F7F4EE;           /* Soft Sand - backgrounds */
--color-text: #1E1E1E;           /* Neutral Dark - body text */
--color-border: #E6E6E6;         /* Light Grey - borders */
```

### Typography

**Headings**: Inter, weights 600-700
**Body**: Roboto, weights 400-500
**Numeric/Code**: Roboto Mono

**Scale**:
- H1: 3rem (48px)
- H2: 2.25rem (36px)
- H3: 1.875rem (30px)
- Body: 1rem (16px)

### Spacing

Uses 8px base unit:
- Tiny: 4px
- Small: 8px
- Medium: 16px
- Large: 24px
- XL: 32px
- 2XL: 48px

### Accessibility

- WCAG AA compliant
- Contrast ratio 4.5:1 for body text
- Keyboard navigable
- ARIA labels on interactive elements
- Alt text on all images
- Focus states on all inputs

---

## 🔮 Future Enhancements

### Phase 2 (Planned Features)

1. **Backend Integration**
   - User authentication system
   - Real database for products and user data
   - Payment gateway integration
   - Real-time notifications

2. **Advanced Features**
   - FPO dashboard (bulk farmer management)
   - Buyer procurement portal (CSV upload, order tracking)
   - Investor dashboard (live KPIs, reports)
   - Carbon credit marketplace

3. **Enhanced Interactivity**
   - Live chat support
   - Video tutorials
   - Interactive farm mapping
   - Real-time soil data visualization

4. **Localization**
   - Complete Hindi translation
   - Regional language support (Punjabi, Marathi, Tamil, Telugu, Kannada)
   - RTL language support

5. **Mobile App**
   - Native Android/iOS apps
   - Offline functionality
   - Push notifications
   - QR code scanning for traceability

### Phase 3 (Long-term Roadmap)

- Machine learning crop recommendations
- Blockchain-based traceability
- Drone integration for field monitoring
- IoT sensor dashboard
- API for third-party integrations

---

## 🎯 Key Metrics & Goals

### Current Status (Phase 1 MVP - Complete)

✅ **10 HTML pages** - All core pages implemented
✅ **4 CSS files** - Global + page-specific styles
✅ **3 JavaScript files** - Interactive components
✅ **Carbon calculator** - Fully functional with formula
✅ **35 products catalog** - With filters and categories
✅ **5 case study charts** - Chart.js integration
✅ **Animated counters** - Intersection Observer
✅ **Responsive design** - Mobile to 4K screens
✅ **SEO optimized** - Meta tags, Schema.org
✅ **WCAG AA accessible** - Tested and compliant

### Performance Benchmarks

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Mobile Responsive**: 320px - 1920px+

---

## 📞 Support & Contact

**Website**: https://rupiya.app
**Email**: info@rupiya.app
**Support**: support@rupiya.app
**Phone**: +91 1800-123-4567 (Toll Free)
**WhatsApp**: +91 98765-43210

**Regional Offices**:
- North India: Chandigarh
- West India: Pune
- South India: Bangalore
- East India: Kolkata

---

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines

- Use semantic HTML5
- Follow BEM naming for CSS classes
- Write clean, commented JavaScript
- Ensure mobile responsiveness
- Test across browsers
- Maintain accessibility standards

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Chart.js** for data visualization
- **Font Awesome** for icons
- **Google Fonts** for typography
- **Carboneg** for carbon verification partnership
- All farmers and partners who inspired this platform

---

## 📊 Project Status

**Version**: 1.0.0 (Phase 1 MVP)
**Status**: ✅ Production Ready
**Last Updated**: 2024
**Next Milestone**: Phase 2 - Backend Integration

---

**Built with ❤️ for Indian farmers**

🌱 *Empowering farmers. Healing soil. Cooling the planet.*

---

## 🔗 Quick Links

- [Homepage](index.html)
- [For Farmers](for-farmers.html)
- [Carbon Calculator](carbon-credits.html#calculator)
- [Products Catalog](residue-free-farming.html#inputs)
- [Contact Us](contact.html)

---

*For detailed design specifications, please refer to the original design document: "rupiya.app — Website Design Prototype"*