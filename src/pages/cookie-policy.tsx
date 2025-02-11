import { Card, CardContent } from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
            <div className="prose max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your device when you visit our website.</p>

              <h2>2. How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul>
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our services</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>
              <ul>
                <li>Essential cookies: Required for basic website functionality</li>
                <li>Analytics cookies: Help us understand how visitors use our site</li>
                <li>Preference cookies: Remember your settings and choices</li>
              </ul>

              <h2>4. Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us at andrew@junk-work.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
