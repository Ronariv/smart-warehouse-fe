'use client'

import Link from 'next/link'
import Image from 'next/image';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
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

import { loginFormSchema } from '@/lib/validation-schemas'

const formSchema = loginFormSchema

export default function LoginPreview() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      //async TODO: add connection to db
      console.log(values)
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(values, null, 2)}
          </code>
        </pre>,
      )
      router.push('/dashboard/')
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <div className="flex h-screen">
      <div className='w-1/2 bg-gray-300/75'>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={100}
          className="object-fit m-3"
        />
      </div>

      <div className='w-1/2 h-full'>

        <div className="flex flex-col min-h-[60vh] min-w-[1/2] h-full w-full items-center justify-center px-4">
          <Card className="outline-none mx-auto max-w-sm outline-none">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email and password to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid gap-4">
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
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="grid gap-2">
                          <div className="flex justify-between items-center">
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Link
                              href="#"
                              className="ml-auto inline-block text-sm underline"
                            >
                              Forgot your password?
                            </Link>
                          </div>
                          <FormControl>
                            <PasswordInput
                              id="password"
                              placeholder="********"
                              autoComplete="current-password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/auth/register" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  )
}
