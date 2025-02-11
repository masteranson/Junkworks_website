import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li>Email address when signing up for our waitlist</li>
                <li>Communication data when you contact us</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Communicate with you about our services</li>
                <li>Send you updates about your position on the waitlist</li>
                <li>Respond to your inquiries</li>
              </ul>

              <h2>3. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information.</p>

              <h2>4. Contact Us</h2>
              <p>For any questions about this Privacy Policy, please contact us at andrew@junk-work.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
