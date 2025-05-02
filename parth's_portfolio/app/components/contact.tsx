"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // In a real application, you would send this data to your backend
  }

  return (
    <section className="relative overflow-hidden bg-zinc-900 py-20" id="contact">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-serif font-bold tracking-tight sm:text-5xl">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mb-8 text-gray-400">
            Interested in collaborating on a blockchain project or have any questions? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-600/20 p-3">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a
                  href="mailto:parthbandwal3@gmail.com"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  parthbandwal3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-600/20 p-3">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <a href="tel:+918839252582" className="text-gray-400 hover:text-orange-400 transition-colors">
                  +91 8839252582
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-600/20 p-3">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-400">Nagda, Madhya Pradesh, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-zinc-800 border-zinc-700" {...field} />
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
                        <Input placeholder="your@email.com" className="bg-zinc-800 border-zinc-700" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[120px] bg-zinc-800 border-zinc-700"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 rounded-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
