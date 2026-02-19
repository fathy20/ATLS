# Requirements Document

## Introduction

This feature adds 6 new commercial LED lighting products (Downlights and Spotlights) to the existing React e-commerce website. The products will be integrated into the existing electricalProducts array in the Products.jsx component, maintaining the current structure and styling while providing realistic technical specifications for commercial LED lighting products.

## Glossary

- **System**: The React e-commerce website application
- **Product_Array**: The electricalProducts array in src/pages/Products.jsx
- **Product_Detail_Array**: The allProducts array in src/pages/ProductDetail.jsx
- **Product_Object**: A JavaScript object containing product data (id, name, nameAr, price, image, color, category, tagline, desc, fullDesc, features)
- **Downlight**: Recessed or surface-mounted LED light fixture that directs light downward
- **Spotlight**: Directional LED light fixture with adjustable beam angle for accent lighting
- **Lumens**: Unit of measurement for light output
- **CRI**: Color Rendering Index - measure of light quality (90+ is high quality)
- **IP_Rating**: Ingress Protection rating for dust and water resistance (e.g., IP44, IP65)
- **Beam_Angle**: The angle of light spread from the fixture (measured in degrees)

## Requirements

### Requirement 1: Add Six Lighting Products

**User Story:** As a website administrator, I want to add 6 new lighting products to the electrical products catalog, so that customers can browse and view commercial LED lighting options.

#### Acceptance Criteria

1. THE System SHALL add 6 new Product_Objects to the Product_Array
2. THE System SHALL add the same 6 Product_Objects to the Product_Detail_Array
3. WHEN the products are added, THE System SHALL maintain the existing array structure and not break current functionality
4. THE System SHALL include 3 Downlight products and 3 Spotlight products in the new additions
5. WHEN products are added, THE System SHALL assign unique sequential id values that do not conflict with existing product ids

### Requirement 2: Product Data Structure Compliance

**User Story:** As a developer, I want each lighting product to follow the existing data structure, so that the products render correctly in the UI.

#### Acceptance Criteria

1. THE System SHALL include an id field (number) for each Product_Object
2. THE System SHALL include a name field (English string) for each Product_Object
3. THE System SHALL include a nameAr field (Arabic string) for each Product_Object
4. THE System SHALL include a price field (string) for each Product_Object
5. THE System SHALL include an image field (imported image reference) for each Product_Object
6. THE System SHALL include a color field (hex color string) for each Product_Object
7. THE System SHALL include a category field with value 'electrical' for each Product_Object
8. THE System SHALL include a tagline field (Arabic string) for each Product_Object
9. THE System SHALL include a desc field (Arabic string) for each Product_Object
10. THE System SHALL include a fullDesc field (Arabic string) for each Product_Object
11. THE System SHALL include a features array with 5 English strings for each Product_Object

### Requirement 3: Realistic Technical Specifications for Downlights

**User Story:** As a customer, I want to see realistic technical specifications for Downlight products, so that I can make informed purchasing decisions.

#### Acceptance Criteria

1. WHEN a Downlight product is created, THE System SHALL include wattage between 10W and 22W in the specifications
2. WHEN a Downlight product is created, THE System SHALL include lumen output between 1000 and 2500 lumens
3. WHEN a Downlight product is created, THE System SHALL include beam angle specifications between 24° and 55°
4. WHEN a Downlight product is created, THE System SHALL include CRI rating of 90 or higher
5. WHEN a Downlight product is created, THE System SHALL include IP rating (IP44 or IP65)
6. THE System SHALL format technical specifications in the price field (e.g., "10W - 1000 Lumens")

### Requirement 4: Realistic Technical Specifications for Spotlights

**User Story:** As a customer, I want to see realistic technical specifications for Spotlight products, so that I can make informed purchasing decisions.

#### Acceptance Criteria

1. WHEN a Spotlight product is created, THE System SHALL include wattage between 6W and 15W in the specifications
2. WHEN a Spotlight product is created, THE System SHALL include adjustable beam angle specifications between 15° and 60°
3. WHEN a Spotlight product is created, THE System SHALL include lifespan of 50,000 hours or more
4. WHEN a Spotlight product is created, THE System SHALL include mounting type (surface-mounted or track-mounted)
5. THE System SHALL format technical specifications in the price field (e.g., "8W - Adjustable Beam")

### Requirement 5: Arabic Content Requirements

**User Story:** As an Arabic-speaking customer, I want product information in Arabic, so that I can understand the product details in my native language.

#### Acceptance Criteria

1. THE System SHALL provide Arabic product names in the nameAr field for all lighting products
2. THE System SHALL provide Arabic taglines in the tagline field for all lighting products
3. THE System SHALL provide Arabic short descriptions in the desc field for all lighting products
4. THE System SHALL provide Arabic full descriptions in the fullDesc field for all lighting products
5. WHEN Arabic text is provided, THE System SHALL ensure it is grammatically correct and contextually appropriate

### Requirement 6: Technical Features Documentation

**User Story:** As a customer, I want to see key technical features for each lighting product, so that I can compare products and understand their capabilities.

#### Acceptance Criteria

1. THE System SHALL provide exactly 5 technical features in the features array for each lighting product
2. WHEN features are provided, THE System SHALL include specifications relevant to the product type (Downlight or Spotlight)
3. THE System SHALL include features such as wattage, lumen output, beam angle, CRI rating, IP rating, lifespan, mounting type, or dimming capability
4. THE System SHALL format features as concise English strings (e.g., "CRI 90+", "IP65 Rated", "Dimmable 0-10V")

### Requirement 7: Placeholder Image Assignment

**User Story:** As a developer, I want to use existing placeholder images temporarily, so that the products can be displayed immediately without waiting for actual product photography.

#### Acceptance Criteria

1. THE System SHALL assign placeholder images from existing assets (lambImg, purpleImg, orangeImg, greenImg)
2. WHEN assigning images, THE System SHALL distribute the available placeholder images across the 6 products
3. THE System SHALL use the existing image import statements from src/assets/

### Requirement 8: Color Theme Assignment

**User Story:** As a designer, I want each product to have a distinct color theme, so that the product cards are visually differentiated in the catalog.

#### Acceptance Criteria

1. THE System SHALL assign a unique hex color value to each lighting product
2. WHEN assigning colors, THE System SHALL use blue color variations to maintain consistency with existing electrical products
3. THE System SHALL use hex color values in the range of blues (e.g., #1E88E5, #1976D2, #0277BD, #0288D1, #039BE5, #01579B)

### Requirement 9: Product Naming Convention

**User Story:** As a product manager, I want clear and descriptive product names, so that customers can easily identify different lighting products.

#### Acceptance Criteria

1. THE System SHALL include the product type (LED Downlight, LED Spotlight, Recessed Downlight, Track Spotlight, Emergency Spotlight) in the English name
2. THE System SHALL include key specifications (wattage or special features) in the English name when appropriate
3. THE System SHALL provide descriptive Arabic names that accurately translate the product type and key features

### Requirement 10: Non-Breaking Integration

**User Story:** As a developer, I want the new products to integrate seamlessly, so that existing functionality remains intact.

#### Acceptance Criteria

1. WHEN new products are added to Product_Array, THE System SHALL preserve all existing products in the array
2. WHEN new products are added to Product_Detail_Array, THE System SHALL preserve all existing products in the array
3. THE System SHALL maintain the existing import statements for images
4. THE System SHALL maintain the existing component structure and JSX rendering logic
5. WHEN the Products page is rendered, THE System SHALL display both existing and new products without errors
