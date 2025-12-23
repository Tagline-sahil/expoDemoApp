export default ({ config }) => {
  const env = process.env.EXPO_PUBLIC_APP_ENV;

  const isDev = env === "development";
  const isStaging = env === "staging";

  return {
    ...config,

    updates: {
      url: "https://u.expo.dev/c2c9931f-436c-4933-8ef9-901e4b54441c",
    },

    runtimeVersion: {
      policy: "appVersion",
    },

    name: isDev
      ? "expoDemoApp Dev"
      : isStaging
      ? "expoDemoApp Staging"
      : "expoDemoApp",

    slug: "expoDemoApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,

    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },

    ios: {
      supportsTablet: true,
      bundleIdentifier: isDev
        ? "com.expoDemoApp.dev"
        : isStaging
        ? "com.expoDemoApp.staging"
        : "com.expoDemoApp",
      googleServicesFile:
        env === "development"
          ? "./firebase/dev/GoogleService-Info.plist"
          : env === "staging"
          ? "./firebase/staging/GoogleService-Info.plist"
          : "./firebase/prod/GoogleService-Info.plist",
    },

    android: {
      package: isDev
        ? "com.expoDemoApp.dev"
        : isStaging
        ? "com.expoDemoApp.staging"
        : "com.expoDemoApp",

      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      googleServicesFile:
        env === "development"
          ? "./firebase/dev/google-services.json"
          : env === "staging"
          ? "./firebase/staging/google-services.json"
          : "./firebase/prod/google-services.json",

      edgeToEdgeEnabled: true,
    },

    web: {
      favicon: "./assets/favicon.png",
    },

    extra: {
      eas: {
        projectId: "c2c9931f-436c-4933-8ef9-901e4b54441c",
      },
      env,
    },

    owner: "tagline_sahil",
  };
};
