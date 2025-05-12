
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

interface CollaborationFormValues {
  name: string;
  email: string;
  organization: string;
  interest: string;
  message: string;
  proposal?: FileList;
}

const CollaborationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  
  const form = useForm<CollaborationFormValues>({
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      interest: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: CollaborationFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast({
        title: "Collaboration request submitted",
        description: "Thank you for your interest. We'll be in touch soon."
      });
      form.reset();
      setFileName("");
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-xl shadow-lg">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Join Forces</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Request for Collaboration</h2>
            <p className="text-lg text-gray-600">
              Have an idea or project you'd like to collaborate on? Let's build something amazing together.
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization/Institution</FormLabel>
                      <FormControl>
                        <Input placeholder="Where you work or study" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Interest</FormLabel>
                      <FormControl>
                        <Input placeholder="Education, Healthcare, Technology, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your idea or how you'd like to collaborate..." 
                        className="min-h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormItem>
                <FormLabel>Upload Proposal (Optional)</FormLabel>
                <div className="flex items-center gap-4">
                  <Input
                    type="file"
                    id="proposal"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("proposal")?.click()}
                  >
                    Choose File
                  </Button>
                  <span className="text-sm text-gray-500">
                    {fileName || "No file chosen"}
                  </span>
                </div>
              </FormItem>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Let's Build Together"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CollaborationForm;
