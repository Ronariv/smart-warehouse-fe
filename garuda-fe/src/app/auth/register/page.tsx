'use client'

import Link from 'next/link'
import Image from 'next/image';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'

import { registerFormSchema } from '@/lib/validation-schemas'

const formSchema = registerFormSchema

export default function RegisterPreview() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   // async
    //   console.log(values)
    //   toast(
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>,
    //   )
    //   router.push('/dashboard/')
    // } catch (error) {
    //   console.error('Form submission error', error)
    //   toast.error('Failed to submit the form. Please try again.')
    // }

    try {
      const { confirmPassword, ...payload } = values

      console.log(JSON.stringify(payload, null, 2))
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          payload,
          null,
          2
          // name: formData.name,
          // email: formData.email,
          // password: formData.password
        ),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Account created successfully!');

        // Redirect to login or dashboard
        router.push('/dashboard');

      } else {
        toast.error(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      // setIsLoading(false);
    }
  }

  return (
    <div className="flex h-screen" style={{ backgroundImage: "url('/padang.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className='w-1/2'>
        <Image
          src="/logo-gastro.png"
          alt="Logo"
          width={200}
          height={100}
          className="object-fit m-3"
        />
      </div>

      <div className='w-1/2 h-full bg-white'>

        <div className="flex flex-col min-h-[60vh] min-w-[1/2] h-full w-full items-center justify-center px-4">
          <Card className="outline-none mx-auto max-w-sm outline-none">
            <Card className="mx-auto max-w-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                  Create a new account by filling out the form below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-4">
                      {/* Name Field */}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="grid gap-2">
                            <FormLabel htmlFor="name">Full Name</FormLabel>
                            <FormControl>
                              <Input id="name" placeholder="John Doe" {...field} 
                              // value={formData.name}
                              // onChange={handleChange}
                              />
                              
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email Field */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="grid gap-2">
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                              <Input
                                id="email"
                                placeholder="johndoe@mail.com"
                                type="email"
                                autoComplete="email"
                                {...field}
                                // value={formData.email}
                                // onChange={handleChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Password Field */}
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="grid gap-2">
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormControl>
                              <PasswordInput
                                id="password"
                                placeholder="********"
                                autoComplete="new-password"
                                {...field}
                                // value={formData.password}
                                // onChange={handleChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Confirm Password Field */}
                      <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem className="grid gap-2">
                            <FormLabel htmlFor="confirmPassword">
                              Confirm Password
                            </FormLabel>
                            <FormControl>
                              <PasswordInput
                                id="confirmPassword"
                                placeholder="********"
                                autoComplete="new-password"
                                {...field}
                                // value={formData.confirmPassword}
                                // onChange={handleChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        Register
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="underline">
                    Login
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  )
}
