# Implementation Plan: Lighting Products Collection

## Overview

This implementation adds 6 commercial LED lighting products (3 Downlights and 3 Spotlights) to the existing React e-commerce website by extending the electricalProducts array in Products.jsx and the allProducts array in ProductDetail.jsx. The implementation is purely data-driven with no changes to component logic or styling.

## Tasks

- [x] 1. Add 6 lighting products to electricalProducts array in Products.jsx
  - Add 3 Downlight products with IDs 13, 14, 15
  - Add 3 Spotlight products with IDs 16, 17, 18
  - Each product includes: id, name, nameAr, price (technical specs), image, color, tagline, desc, features
  - Use existing placeholder images (lambImg, purpleImg, orangeImg, greenImg)
  - Assign blue color variations (#1E88E5, #1976D2, #0277BD, #0288D1, #039BE5, #01579B)
  - Include realistic technical specifications in price field
  - Provide 5 technical features per product
  - _Requirements: 1.1, 1.4, 1.5, 2.1-2.11, 3.1-3.6, 4.1-4.5, 5.1-5.4, 6.1-6.4, 7.1-7.3, 8.1-8.3, 9.1-9.2_

- [x] 2. Add the same 6 lighting products to allProducts array in ProductDetail.jsx
  - Add the same products with IDs 13-18
  - Include all fields from Products.jsx plus fullDesc field
  - Ensure category='electrical' for all products
  - Maintain consistency with Products.jsx data
  - _Requirements: 1.2, 2.7, 2.10, 5.4, 10.1-10.5_

- [ ]* 3. Write property-based tests for product structure validation
  - [ ]* 3.1 Write property test for product structure completeness
    - **Property 1: Product Structure Completeness**
    - Test that all products have required fields with correct types
    - Validate id (number), name (string), nameAr (string), price (string), image (defined), color (hex format), category (string), tagline (string), desc (string), features (array)
    - For allProducts, validate fullDesc (string) is present
    - Use fast-check library with 100+ iterations
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11**
  
  - [ ]* 3.2 Write property test for unique product IDs
    - **Property 2: Unique Product IDs**
    - Test that all product IDs in electricalProducts are unique
    - Test that all product IDs in allProducts are unique
    - Use fast-check library with 100+ iterations
    - **Validates: Requirements 1.5**

- [ ]* 4. Write unit tests for lighting products integration
  - [ ]* 4.1 Test that 6 new products were added to electricalProducts
    - Verify array length increased by 6
    - Verify products with IDs 13-18 exist
    - _Requirements: 1.1_
  
  - [ ]* 4.2 Test that 6 new products were added to allProducts
    - Verify array length increased by 6
    - Verify products with IDs 13-18 exist
    - _Requirements: 1.2_
  
  - [ ]* 4.3 Test product type distribution
    - Verify 3 products are Downlights (names contain "Downlight")
    - Verify 3 products are Spotlights (names contain "Spotlight")
    - _Requirements: 1.4_
  
  - [ ]* 4.4 Test that existing products remain unchanged
    - Verify all original product IDs (1-12) still exist
    - Verify original product data is unchanged
    - _Requirements: 1.3, 10.1, 10.2_
  
  - [ ]* 4.5 Test technical specifications for Downlights
    - Verify wattage is between 10W-22W
    - Verify lumen output is between 1000-2500
    - Verify CRI 90+ is mentioned in features
    - Verify IP rating is mentioned
    - _Requirements: 3.1, 3.2, 3.4, 3.5_
  
  - [ ]* 4.6 Test technical specifications for Spotlights
    - Verify wattage is between 6W-15W
    - Verify 50,000+ hours lifespan is mentioned
    - Verify mounting type is mentioned
    - _Requirements: 4.1, 4.3, 4.4_
  
  - [ ]* 4.7 Test Arabic content presence
    - Verify all new products have non-empty nameAr
    - Verify all new products have non-empty tagline
    - Verify all new products have non-empty desc
    - Verify all new products in allProducts have non-empty fullDesc
    - _Requirements: 5.1, 5.2, 5.3, 5.4_
  
  - [ ]* 4.8 Test features array structure
    - Verify all new products have exactly 5 features
    - Verify features contain technical terms (wattage, lumens, CRI, IP, etc.)
    - _Requirements: 6.1, 6.3_
  
  - [ ]* 4.9 Test color assignments
    - Verify all new products have unique colors
    - Verify colors are in hex format
    - Verify colors are in blue spectrum
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [ ]* 4.10 Test product naming conventions
    - Verify English names contain product type keywords
    - Verify English names contain wattage specifications
    - _Requirements: 9.1, 9.2_

- [ ] 5. Checkpoint - Verify implementation and run tests
  - Manually test Products page renders correctly with new products
  - Manually test ProductDetail pages for new products (IDs 13-18)
  - Run all unit tests and property-based tests
  - Check for console errors
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- This is a data-only change with no component logic modifications
- All new products use existing placeholder images temporarily
- Arabic content should be reviewed by a native speaker for quality
- Property-based tests use fast-check library with minimum 100 iterations
- Each property test references its design document property number
- Unit tests focus on specific validation of the 6 new products
- The checkpoint task ensures everything works before considering the feature complete
