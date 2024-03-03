import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Ced() {
  return(
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
    <Tabs defaultValue="account" className="w-[400px] w-1 ">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Make changes to your account here.</TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>  
  </div>
  )
}