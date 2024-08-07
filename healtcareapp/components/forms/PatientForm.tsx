"use client"

import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import user from '../../public/assets/icons/user.svg'
import email from '../../public/assets/icons/email.svg'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from '../ui/button'
import CustomFormField from './CustomFormField'
import SubmitButton from './SubmitButton'
import { UserFormValidation } from '../../lib/validation'
import { Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'



export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneinput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

function PatientForm() {
  const [isLoading, SetIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit({name, email, phone}: 
      z.infer<typeof UserFormValidation>) {
    const router = useRouter();
    SetIsLoading(true);
    try {
      // const userData = {name, email, phone};
      // const user = await createUser(userData);
      // if (user)
      //   router.push(`/patients/${user.id}/register`);
    } catch(error) {
        console.log(error);
    }
    // console.log(values)
  }
  return (
    <Form {...form}>
      {/* <h1>hi</h1> */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className='mb-12 space-y-4'>
          <h1 className="text-4xl font-bold">Hi there 👋</h1>
          <p className='text-dark-700'>Schedule your first appointement.</p>
        </section>
        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control} 
            name={'name'}
            label='Full name'
            placeholder='Mohamed Darify'
            iconSrc={user}
            iconAlt='user' 
        />
        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control} 
            name={'email'}
            label='Email'
            placeholder='Darify@gmail.com'
            iconSrc={email}
            iconAlt='email' 
        />
        <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control} 
            name={'phone'}
            label='Phone Number'
            placeholder='(+212) 645278189'
            iconSrc={email}
            iconAlt='email' 
        />
        <SubmitButton isLoading={isLoading}    >
          Get Started
        </SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm