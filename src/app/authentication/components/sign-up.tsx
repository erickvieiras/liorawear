"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

import z from "zod";

const formSchema = z.object({
    name: z.string().trim().min(1, "É necessário inserir um nome de usuário!"),
    email: z.email("Insira um e-mail válido"),
    password: z.string("Senha incorreta!").min(8, "A senha precisa ter no mínimo 8 caractéres"),
    passwordConfirmation: z.string("Senha incorreta!").min(8, "A senha precisa ter no mínimo 8 caractéres"),
}).refine((data) =>{
    return data.password == data.passwordConfirmation;
},
{
    error: "A senha fornecida não coincide!",
    path: ["passwordConfirmation"],
},)


const SignUp = () => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email:"",
          password: "",
          passwordConfirmation: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("DADOS VALIDADOS E ENVIADOS!")
        console.log(values)
      }

    return ( <>


        <Card>
            <CardHeader>
              <CardTitle>Crie uma credencial de acesso</CardTitle>
              <CardDescription>
                Faça uma conta para desfrutar de um catálogo refinado e com o seu estilo.
              </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <CardContent className="grid gap-6">
                    
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                            <Input placeholder="Insira seu nome" {...field} />
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
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                            <Input placeholder="Insira seu e-mail" type="email" {...field} />
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
                            <Input placeholder="Insira sua senha" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

<FormField
                    control={form.control}
                    name="passwordConfirmation"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirme sua Senha</FormLabel>
                        <FormControl>
                            <Input placeholder="Insira sua senha" type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </CardContent>
                <CardFooter>
                <Button type="submit"className="w-full">Salvar e Acessar</Button>
                </CardFooter>
                </form>
                </Form>
        </Card>


    </> );
}
 
export default SignUp;