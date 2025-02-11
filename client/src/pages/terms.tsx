import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="pt-6">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="prose max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>By accessing our service, you agree to these Terms of Service and any additional terms and conditions.</p>

              <h2>2. Description of Service</h2>
              <p>Junkworks provides business scheduling and automated customer communication services. Currently, we are accepting waitlist registrations for our upcoming service.</p>

              <h2>3. User Responsibilities</h2>
              <p>Users agree to:</p>
              <ul>
                <li>Provide accurate information</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Maintain the confidentiality of any account credentials</li>
              </ul>

              <h2>4. Intellectual Property</h2>
              <p>All content, features, and functionality of our service are owned by Junkworks and are protected by copyright laws.</p>

              <h2>5. Contact</h2>
              <p>For any questions about these Terms, please contact us at andrew@junk-work.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
