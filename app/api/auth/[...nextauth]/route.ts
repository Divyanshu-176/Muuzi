import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      })
  ],
  callbacks:{
    async signIn(params){
      console.log(params)
      if(!params.user.email){
        return false
      }
      try{
        await prisma.user.create({
          data:{
            email:params.user.email,
            provider:"Github"
          }
        })
      }catch(err){

      }

      return true
    }
  }

})

export { handler as GET, handler as POST }