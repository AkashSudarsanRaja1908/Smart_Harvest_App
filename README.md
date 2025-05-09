# Smart Harvest Tax Harvesting Application Evaluation

# Process to Access Application
 1. Click on sign up if you were a new user and sign up in the application.
 2. Then you will get a verification mail to the registered mail id.
 3. Then click the verify mail link sent througn the registerd mail id.
 4. The page reloads as it verifies succesfully (It shows and error on the verify page ignore this site cannot be reached error and close the page and login as usual), It will login successfully.
 5. Then login with the registered Mail and password.
 6. Then you can access the Application.

## Project Info

**URL**: 

Smart Harvest is a comprehensive tax harvesting application designed to help investors optimize their tax strategies through automated analysis and educational resources.

## 1. Prototype and Visual Design:
   **Personalized Dashboard**
   - Displays a comprehensive overview of the user's portfolio value ($125,350)
   - Shows available harvesting opportunities (5)
   - Highlights potential tax savings ($1,240)
   - Presents year-to-date tax impact ($850)
   - Includes interactive cards that respond to user actions
   - Features a "Run Tax Analysis" button that processes portfolio data in real-time

   **Tax Harvesting Tools**
    **The recommendation system effectively**:
     - Presents opportunity cards with clear risk levels (Low, Medium, High)
     - Shows potential savings for each opportunity
     - Displays current losses that can be harvested
     - Provides specific recommendations tailored to each asset
     - Includes a "Harvest Now" button that executes the strategy
     - Confirms successful actions through toast notifications

   **Educational Content**
    **The Learn section includes**:
     - Categorized educational resources that can be filtered by topic
     - Interactive quiz system that tests user knowledge
     - Achievement system (certificate) for completing learning modules
     - Progress tracking through the educational journey
     - Toast notifications that provide feedback on quiz performance

## 2. Core Features
   **Identification of Tax Harvesting Opportunities**
   - Portfolio analysis of current asset values versus cost basis
   - Calculation of potential tax savings based on user's tax rate
   - Risk assessment for each opportunity (Low/Medium/High)
   - Filtering system to help users focus on specific risk levels
   - Comprehensive portfolio view showing gains/losses across all assets

   **Explanation of Tax Benefits**
   - Visual indicators that highlight potential savings
   - Color-coded system (green for gains, red for losses)
   - Concise recommendations within opportunity cards
   - Educational content explaining tax harvesting concepts
   - Interactive quiz that reinforces key concepts

## 3. Success Matrics
   **Opportunity Identification and Action**
   - ***Tracking Mechanism***: The system tracks harvested vs. available opportunities
   - ***Visualization***: Users can see their action history in the "Action History" tab
   - ***Feedback Loop***: Toast notifications confirm successful harvesting actions
   - ***Measurement***: Percentage of identified opportunities that are harvested

   **Educational Module Completion**
   - ***Quiz Completion***: System tracks quiz attempts and scores
   - ***Certificate System***: Users earn certificates upon successful quiz completion
   - ***Progress Indicators***: Educational content shows completion status
   - ***Measurement***: Percentage of users completing educational modules and quizzes

   **User Confidence**
   - ***Knowledge Assessment***: Pre and post-quiz scores measure knowledge improvement
   - ***User Engagement***: Frequency of application usage and feature exploration
   - ***Action Rate***: Percentage of users who harvest after viewing opportunities
   - ***Measurement***: Survey data on user confidence before and after using the app

## 4. Design Rationale
   **Visual Appeal**
   - ***Color System***: Purple primary theme with contextual colors (red for losses, green for gains)
   - ***Card-Based Interface***: Information is compartmentalized for easy consumption
   - ***Data Visualization***: Clear presentation of numerical data through statistical cards
   - ***Consistent Design Language***: Uniform button styles, typography, and spacing
   - ***Dark/Light Mode***: Support for user preference and system settings
   Intuitive Navigation
   - ***Tab Structure***: Content organized into logical sections (Dashboard, Portfolio, Recommendations, Learn)
   - ***Mobile Responsiveness***: Design adapts to different screen sizes
   - ***Clear Information Hierarchy***: Important information highlighted with visual cues
   - ***Feedback Mechanisms***: Toast notifications confirm user actions
   - ***Interactive Elements***: Buttons and cards respond to user interactions

  **Simplified Tax Harvesting**
  - ***Actionable Recommendations***: Clear "Harvest Now" buttons on opportunity cards
  - ***Risk Classification***: Opportunities labeled by risk level for informed decisions
  - ***Educational Integration***: Learning resources directly connected to features
  - ***Plain Language***: Complex tax concepts explained in understandable terms
  - ***Guided Experience***: Step-by-step process from opportunity identification to action

## Publishing to GitHub

To publish this project to GitHub:

1. **Clone the repository locally**:
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   npm install
   npm run dev
   ```

## Deploying as a Web Application

You can deploy this app as a web application using one of the following methods:

### Option 1: Deploy to Vercel, Netlify, or similar platforms

1. Connect your GitHub repository to your preferred hosting platform
2. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy the application

## Building for Android

To build and publish this application for Android devices:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Android Studio](https://developer.android.com/studio) installed
- JDK 11 or higher

### Step 1: Add Capacitor to your project

```sh
# Install Capacitor core packages
npm install @capacitor/core @capacitor/android
npm install -D @capacitor/cli

# Initialize Capacitor configuration
npx cap init "SmartHarvest" "app.smartharvest.com" --web-dir=dist
```

### Step 2: Build your web application

```sh
npm run build
```

### Step 3: Add Android platform and synchronize

```sh
npx cap add android
npx cap sync
```

### Step 4: Open in Android Studio

```sh
npx cap open android
```

### Step 5: Configure Android app settings

In Android Studio:
1. Update the app icon in `android/app/src/main/res/`
2. Modify `AndroidManifest.xml` if needed
3. Update version in `android/app/build.gradle`

### Step 6: Build and test

1. Connect an Android device or use an emulator
2. Click "Run" in Android Studio
3. Test your application thoroughly

### Step 7: Generate signed APK/Bundle for Google Play

1. In Android Studio, go to Build → Generate Signed Bundle/APK
2. Create a new keystore or use an existing one
3. Follow the instructions to generate your release build
4. The resulting APK/Bundle can be uploaded to Google Play Console

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

[MIT License](LICENSE)
