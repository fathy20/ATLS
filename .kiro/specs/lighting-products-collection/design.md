# Design Document: Lighting Products Collection

## Overview

This design outlines the implementation approach for adding 6 commercial LED lighting products (3 Downlights and 3 Spotlights) to the existing React e-commerce website. The implementation involves extending two existing product arrays with new product data objects that follow the established data structure and maintain consistency with the current UI/UX patterns.

The feature is purely data-driven and requires no changes to component logic, styling, or routing. All new products will be integrated into the existing Products.jsx and ProductDetail.jsx files by adding entries to the electricalProducts and allProducts arrays respectively.

## Architecture

### System Context

The React e-commerce application uses a simple client-side architecture with:
- React Router for navigation
- GSAP for animations
- Static product data stored in JavaScript arrays
- Component-based UI rendering

### Integration Points

The lighting products feature integrates at the data layer only:

1. **Products.jsx** - Contains the `electricalProducts` array that feeds the product catalog grid
2. **ProductDetail.jsx** - Contains the `allProducts` array that provides detailed product information

No changes are required to:
- Component rendering logic
- Routing configuration
- Animation setup
- Styling/CSS
- Asset management (using existing placeholder images)

### Data Flow

```
Product Arrays (electricalProducts, allProducts)
    ↓
React Component Props
    ↓
JSX Rendering (map functions)
    ↓
UI Display (Product Cards & Detail Pages)
```

## Components and Interfaces

### Product Data Structure

Each product object follows this interface:

```typescript
interface Product {
  id: number;                    // Unique identifier
  name: string;                  // English product name
  nameAr: string;                // Arabic product name
  price: string;                 // Technical specifications (displayed as "price")
  image: ImageImport;            // Imported image reference
  color: string;                 // Hex color code for theming
  category: 'electrical' | 'home'; // Product category
  tagline: string;               // Arabic tagline
  desc: string;                  // Short Arabic description
  fullDesc: string;              // Full Arabic description (ProductDetail only)
  features: string[];            // Array of 5 English feature strings
}
```

### New Product Specifications

#### Downlight Products (3 products)

**Product 1: LED Downlight 10W**
- Wattage: 10W
- Lumens: 1000
- Beam Angle: 24°
- CRI: 90+
- IP Rating: IP44
- Features: Energy efficient, compact design, suitable for residential use

**Product 2: LED Downlight 15W**
- Wattage: 15W
- Lumens: 1500
- Beam Angle: Adjustable (24°-55°)
- CRI: 90+
- IP Rating: IP44
- Features: Adjustable beam, higher output, versatile application

**Product 3: Recessed Downlight 20W**
- Wattage: 20W
- Lumens: 2000
- Beam Angle: 38°
- CRI: 90+
- IP Rating: IP65
- Dimming: 0-10V dimmable
- Features: High output, dimmable, weather-resistant

#### Spotlight Products (3 products)

**Product 4: LED Spotlight 8W**
- Wattage: 8W
- Technology: COB LED
- Beam Angle: 36°
- Lifespan: 50,000 hours
- CRI: 90+
- Features: Compact, high CRI, long lifespan

**Product 5: Track Spotlight 12W**
- Wattage: 12W
- Beam Angle: Adjustable (15°-60°)
- Mounting: Track-mounted
- Lifespan: 50,000+ hours
- CRI: 95+
- Features: Adjustable, track system, premium CRI

**Product 6: Emergency Spotlight 6W**
- Wattage: 6W
- Beam Angle: 45°
- Special Features: Manual test button, fire rated
- IP Rating: IP65
- Lifespan: 50,000 hours
- Features: Emergency backup, safety certified

## Data Models

### Product ID Assignment

Existing product IDs in use: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

New product IDs will be assigned sequentially: 13, 14, 15, 16, 17, 18

### Image Assignment Strategy

Available placeholder images:
- `lambImg` (lamb.png)
- `orangeImg` (organge.png)
- `purpleImg` (purple.png)
- `greenImg` (green.png)

Distribution:
- Product 13 (LED Downlight 10W): lambImg
- Product 14 (LED Downlight 15W): purpleImg
- Product 15 (Recessed Downlight 20W): orangeImg
- Product 16 (LED Spotlight 8W): greenImg
- Product 17 (Track Spotlight 12W): lambImg
- Product 18 (Emergency Spotlight 6W): purpleImg

### Color Theme Assignment

Following the existing blue color palette for electrical products:
- Product 13: #1E88E5 (Light Blue)
- Product 14: #1976D2 (Medium Blue)
- Product 15: #0277BD (Dark Blue)
- Product 16: #0288D1 (Cyan Blue)
- Product 17: #039BE5 (Sky Blue)
- Product 18: #01579B (Deep Blue)

### Arabic Content Guidelines

All Arabic content (nameAr, tagline, desc, fullDesc) should:
- Use proper Arabic grammar and terminology
- Be contextually appropriate for commercial lighting products
- Maintain consistency with existing product descriptions
- Emphasize key technical benefits and use cases

Example Arabic naming patterns:
- "داون لايت LED" for LED Downlight
- "سبوت لايت LED" for LED Spotlight
- "إضاءة مخفية" for Recessed lighting
- "إضاءة طوارئ" for Emergency lighting

### Technical Features Format

Each product must have exactly 5 features in English, formatted as concise technical specifications:

Examples:
- "10W Power Consumption"
- "1000 Lumens Output"
- "CRI 90+ High Quality"
- "IP44 Rated"
- "50,000 Hours Lifespan"
- "Dimmable 0-10V"
- "Adjustable Beam 15°-60°"
- "COB LED Technology"
- "Track Mounted"
- "Emergency Backup"

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Product Structure Completeness

*For any* product object in the electricalProducts or allProducts arrays, the product must have all required fields with correct types: id (number), name (string), nameAr (string), price (string), image (defined), color (string matching hex format #RRGGBB), category (string), tagline (string), desc (string), and features (array). Additionally, products in allProducts must have fullDesc (string).

**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11**

### Property 2: Unique Product IDs

*For any* product array (electricalProducts or allProducts), all product IDs must be unique with no duplicates.

**Validates: Requirements 1.5**

## Error Handling

This feature involves static data addition with no runtime error conditions. However, the following validation checks should be performed during development:

### Data Validation

1. **ID Uniqueness**: Verify that new product IDs (13-18) do not conflict with existing IDs
2. **Required Fields**: Ensure all required fields are present for each product
3. **Type Correctness**: Verify field types match the expected interface
4. **Array Synchronization**: Confirm that products exist in both electricalProducts and allProducts arrays

### Common Issues

1. **Missing Fields**: If a required field is omitted, the UI may render incorrectly or throw errors
2. **ID Conflicts**: Duplicate IDs will cause routing issues in ProductDetail component
3. **Invalid Image References**: Incorrect image imports will cause broken images
4. **Invalid Color Format**: Non-hex color values may cause styling issues

### Validation Strategy

Since this is a data-only change, validation can be performed through:
- Unit tests that verify product structure
- Visual inspection of the rendered UI
- Console error monitoring during development
- Property-based tests for structural validation

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests** focus on:
- Verifying the 6 specific lighting products were added correctly
- Checking that existing products remain unchanged
- Validating specific product details (names, specs, features)
- Confirming array lengths increased by 6
- Testing edge cases like ID uniqueness for the new products

**Property-Based Tests** focus on:
- Universal structural validation across all products
- ID uniqueness across the entire product catalog
- Type correctness for all product fields
- Hex color format validation

### Property-Based Testing Configuration

**Library Selection**: For JavaScript/React projects, use **fast-check** as the property-based testing library.

**Test Configuration**:
- Minimum 100 iterations per property test
- Each test must reference its design document property
- Tag format: **Feature: lighting-products-collection, Property {number}: {property_text}**

**Example Test Structure**:
```javascript
// Feature: lighting-products-collection, Property 1: Product Structure Completeness
it('should have complete structure for all products', () => {
  fc.assert(
    fc.property(
      fc.constantFrom(...allProducts),
      (product) => {
        expect(product).toHaveProperty('id');
        expect(typeof product.id).toBe('number');
        expect(product).toHaveProperty('name');
        expect(typeof product.name).toBe('string');
        // ... additional validations
      }
    ),
    { numRuns: 100 }
  );
});
```

### Unit Testing Focus Areas

1. **Product Addition Verification**
   - Test that electricalProducts array contains 6 new products (IDs 13-18)
   - Test that allProducts array contains the same 6 new products
   - Verify 3 products are Downlights and 3 are Spotlights

2. **Data Integrity**
   - Test that existing products (IDs 1-12) remain unchanged
   - Verify all new products have category='electrical'
   - Check that features arrays have exactly 5 elements

3. **Technical Specifications**
   - Verify Downlight wattage ranges (10W-22W)
   - Verify Spotlight wattage ranges (6W-15W)
   - Check for presence of technical terms in features

4. **Content Validation**
   - Verify Arabic content is present (non-empty strings)
   - Check that English names contain product type keywords
   - Validate color values are in blue spectrum

5. **Integration Testing**
   - Test that Products component renders without errors
   - Verify ProductDetail component can display new products
   - Check that routing works for new product IDs

### Test Organization

```
tests/
  ├── unit/
  │   ├── productData.test.js          # Unit tests for product data
  │   └── integration.test.js          # Integration tests for rendering
  └── property/
      └── productStructure.test.js     # Property-based tests
```

### Testing Tools

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component rendering and interaction testing
- **fast-check**: Property-based testing library
- **@testing-library/jest-dom**: Additional DOM matchers

### Acceptance Criteria

All tests must pass before the feature is considered complete:
- ✅ All property-based tests pass (100+ iterations each)
- ✅ All unit tests pass
- ✅ No console errors when rendering Products page
- ✅ No console errors when viewing ProductDetail pages for new products
- ✅ Visual inspection confirms products display correctly
