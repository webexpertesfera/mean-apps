# Chakra Component

This is an Angular component for implementing a responsive image carousel using the [Swiper](https://swiperjs.com/) library. It supports features like autoplay, navigation buttons, pagination, and custom breakpoints for responsiveness.

## Installation

To use this component, you need to have the following dependencies:

1. **Swiper**: Install the Swiper library in your Angular project by running the following command:

    ```bash
    npm install swiper
    ```

2. **Angular**: Ensure you have Angular CLI installed and a project set up to import and use the component.

## Component Overview

The `ChakraComponent` is a responsive image carousel component that uses Swiper for displaying images with various functionalities. It is configured to allow customization of carousel behavior based on screen sizes using breakpoints.

### Features:

- **Autoplay**: The carousel automatically transitions between images with a customizable delay.
- **Navigation**: Custom navigation buttons (`next` and `previous`) are included.
- **Pagination**: Pagination is enabled, and the bullets are dynamic and clickable.
- **Responsive Design**: The carousel adapts to different screen sizes, showing 3 images per view on small screens (400px and up), and 1 image per view on mobile screens.
- **Looping**: The carousel loops indefinitely, providing an endless scrolling effect.
- **Customizable Speed**: Adjust the speed of the carousel transition and autoplay.

## Usage

1. **Import the component** into your desired Angular module:

   ```typescript
   import { ChakraComponent } from './chakra/chakra.component';
