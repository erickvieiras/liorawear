"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { useForm } from "react-hook-form";

const formSchema = z.object({
    email: z.email("Insira um e-mail válido"),
    password: z.string("Senha inválida").min(8, "A senha precisa possuir no mínimo 8 caracteres"),
})



const SignIn = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password:"",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("DADOS VALIDADOS E ENVIADOS")
        console.log(values)
      }
      
    return ( 
    <>

        <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Entre com suas credenciais para acessar.
              </CardDescription>
            </CardHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <CardContent className="grid gap-6">
                    <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

    <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua senha" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                    </CardContent>
                    <CardFooter>
                    <Button className="w-full" type="submit">Entrar</Button>
                    </CardFooter>

                </form>
            </Form>

            
          </Card>
   

    
    </> );
}
 
export default SignIn;


