import OnBoarding from "./OnBoarding";

// Metadata can only be defined in a server component
export const metadata = {
  title: "Onboarding Form",
  description: "This is a page for Onboarding Form",
};

// This is your server component
export default function OnboardingPage() {
  return <OnBoarding />;
}
