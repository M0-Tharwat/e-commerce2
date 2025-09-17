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
import { loginSchema , loginSchemaForm } from "@/schema/login.schema";
import { signIn } from "next-auth/react";


import { useRouter } from "next/navigation";

export default function Login() {

const router = useRouter();


  const form = useForm<loginSchemaForm>({
    
    resolver: zodResolver(loginSchema),
    
    defaultValues: {
      email: "",
      password: "" 
      
    }
  });

  const firstError = Object.keys(form.formState.errors)[0]; 

async function onSubmit(data: loginSchemaForm) {

  // ///login with api not next auth

  //  console.log(data);
  //   try{
  //   let response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, data);
  //   console.log(response);
  //   if(response.data.message == "success"){
      
  //     //navigate login
  //     router.push('/');
  //     toast.success('login successfully');
  //    } 
  //   }
  //   catch(error: loginSchemaForm | any){
  //     console.log(error.response.data.message);
  //     toast.error(error.response.data.message);
      
  //   }



////login with next auth


    const res = await signIn('credentials',{
      email:data.email,
      password:data.password,
      redirect:false,
      callbackUrl:"/"
    })
    if(res?.ok){
      window.location.href = res.url||"";
    }
    else{
      console.log(res?.error);
    }

  }

  function handleGitHubSignIn(){
    signIn('github',{callbackUrl:"/"})
  }
  return (
    <>
      <h2 className="my-5">Login Now:</h2>

      <Form {...form}>
        <form className="w-2/3  mx-auto" onSubmit={form.handleSubmit(onSubmit)}>

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel>email</FormLabel>
              <FormControl>
                
                  <Input type="email" {...field} />
                  
                
              </FormControl>
             {firstError == "email" && <FormMessage/>}
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
             {firstError == "password" && <FormMessage/>}
            </FormItem>
          )}
        />
       
         
 
         <Button className="rounded-full w-2/3 mx-auto bg-main text-white my-5 ml-auto block cursor-pointer hover:bg-main" >Login</Button>   


        </form>
      </Form>

      <div className="text-center"> 
        <button onClick={handleGitHubSignIn} className=" cursor-pointer bg-black rounded-full w-2/3 mx-auto text-white " >Login with GitHub <i className="fa-brands fa-github text-white"></i> </button>

      </div>

    </>
  );
}
