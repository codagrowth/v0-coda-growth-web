'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
})

type FormValues = z.infer<typeof formSchema>

export function SignupForm() {
  const [step, setStep] = React.useState(1)
  const [submitted, setSubmitted] = React.useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  async function onSubmit(values: FormValues) {
    setSubmitted(true)
    console.log(values)
    // Send to your backend here
  }

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Success! ✓</h2>
          <p className="text-muted-foreground mb-2">
            Welcome, <strong>{form.getValues('name')}</strong>!
          </p>
          <p className="text-muted-foreground mb-6">
            Confirmation email sent to {form.getValues('email')}
          </p>
          <button
            onClick={() => {
              setStep(1)
              setSubmitted(false)
              form.reset()
            }}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      {/* Progress */}
      <div className="mb-8">
        <div className="text-sm text-muted-foreground mb-2">
          Step {step} of 2
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Step 1: Name */}
          {step === 1 && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">What's your name?</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Step 2: Email */}
          {step === 2 && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">What's your email?</FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Buttons */}
          <div className="flex gap-3 justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-input rounded-md hover:bg-muted"
              >
                Back
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={async () => {
                  const isValid = await form.trigger('name')
                  if (isValid) setStep(2)
                }}
                className="ml-auto px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
