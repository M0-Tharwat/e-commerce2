"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema, registerSchemaForm } from "@/schema/register.schema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Register() {

  const router = useRouter();

  const form = useForm<registerSchemaForm>({
    resolver: zodResolver(registerSchema),
    
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    }
  });

  async function onSubmit(data: registerSchemaForm) {
    console.log(data);
    try{
    const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',data);
    console.log(response);
    if(response.data.message == "success"){
      //toaster
      toast.success('register successfully');
      //navigate login
      router.push('/auth/login');
     }
    }
    catch(error: registerSchemaForm | any){
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      //toaster
    }

  }

  return (
    <>
      <h2 className="my-5">Register Now:</h2>

      <Form {...form}>
        <form className="w-2/3  mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel>name</FormLabel>
              <FormControl>
                
                  <Input {...field} />
                  
                
              </FormControl>
             <FormMessage/> 
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel>email</FormLabel>
              <FormControl>
                <div>
                  <Input type="email" {...field} />
                 
                </div>
              </FormControl>
             <FormMessage/> 
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel>password</FormLabel>
              <FormControl>
               
                  <Input type="password" autoComplete="off" {...field} />
                  
                
              </FormControl>
             <FormMessage/> 
            </FormItem>
          )}
        />
        <FormField
          name="rePassword"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel>repassword</FormLabel>
              <FormControl>
               
                  <Input type="password" autoComplete="off" {...field} />
                  
                
              </FormControl>
             <FormMessage/> 
            </FormItem>
          )}
        />
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel>phone</FormLabel>
              <FormControl>
               
                  <Input type="phone"  {...field} />
                  
                
              </FormControl>
             <FormMessage/> 
            </FormItem>
          )}
        />

         <Button className=" bg-main text-white my-5 ml-auto block cursor-pointer hover:bg-main" >Register</Button>   


        </form>
      </Form>
    </>
  );
}
