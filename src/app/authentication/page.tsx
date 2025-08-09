import { AppWindowIcon, CodeIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SignIn from "./components/sign-in"
import SignUp from "./components/sign-up"

export function Authentication () {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5">
      Liora Wear
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Acessar</TabsTrigger>
          <TabsTrigger value="sign-up">Cadastrar-se</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
        
       <SignIn/>
         
        </TabsContent>
        <TabsContent value="sign-up">
          <SignUp/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Authentication;
