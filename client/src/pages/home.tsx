import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { RocketIcon, Users2Icon, SparklesIcon, ArrowRightIcon, CalendarIcon } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: { email: "" },
  });

  const { data: waitlistData } = useQuery({
    queryKey: ["/api/waitlist/count"],
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  function onSubmit(data: InsertWaitlist) {
    waitlistMutation.mutate(data);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-6 flex flex-col items-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Junkworks" 
                  className="h-24 md:h-32 mb-2"
                />
                <span className="text-lg md:text-3xl">24/7 AI Secretary</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Never miss a job again. Join the waitlist for our AI-powered Secretary that helps small businesses schedule and manage appointments.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            disabled={waitlistMutation.isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={waitlistMutation.isPending}
                    className="whitespace-nowrap"
                  >
                    {waitlistMutation.isPending ? (
                      "Joining..."
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {waitlistData?.count > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-muted-foreground"
                >
                  <Users2Icon className="inline-block mr-2 h-4 w-4" />
                  Join {waitlistData.count} others on the waitlist
                </motion.p>
              )}
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto"
            >
              <div className="w-[300px] h-[600px] bg-background rounded-[3rem] border-8 border-muted shadow-2xl p-4 relative">
                {/* WhatsApp Chat Interface */}
                <div className="h-full bg-gray-100 rounded-2xl overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white p-3">
                    <div className="text-sm font-medium">Junkworks Assistant</div>
                    <div className="text-xs opacity-75">online</div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-3 space-y-2">
                    {/* Message Bubble */}
                    <div className="bg-[#DCF8C6] rounded-lg p-3 max-w-[80%] ml-auto shadow-sm">
                      <div className="flex items-start gap-2">
                        <span>💼</span>
                        <div>
                          <p className="text-sm font-medium">New call received</p>
                          <p className="text-sm">Job type: Gutter cleaning</p>
                          <p className="text-sm">Location: 1 Washington Road, NJ</p>
                          <p className="text-sm">Time: 06/01/2025 4pm</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">11:30 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">See Junkworks in Action</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/lWC5XVKfRO4"
              title="Junkworks Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background p-6 rounded-lg shadow-sm relative"
            >
              <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                Coming Soon
              </div>
              <RocketIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Efficiently manage your service appointments and customer communications in one place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <SparklesIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                AI Intelligence to support customer queries and scheduling needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-background p-6 rounded-lg shadow-sm"
            >
              <Users2Icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-muted-foreground">
                Communicate with customers in multiple languages with accurate real-time translations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-sm text-muted-foreground">Email: andrew@junk-work.com</p>
              <p className="text-sm text-muted-foreground">Phone: (508) 615-4978</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Junkworks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}