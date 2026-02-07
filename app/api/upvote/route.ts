import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";



const UpvoteSchema = z.object({
    streamId:z.string()
})


export async function POST(req:NextRequest){
    const session = await getServerSession()
    console.log("session",session)

    const user = await prisma.user.findFirst({
        where:{
            email:session?.user?.email as string
        }
    })

    if(!user){
        return NextResponse.json({
            msg:"Unauthenticated"
        },{
            status:403
        })
    }

    try{
        const data = UpvoteSchema.parse(await req.json())
        await prisma.upvote.create({
            data:{
                userId:user.id,
                streamId:data.streamId
            }
        })
    }catch(err){
        return NextResponse.json({
            msg:"Error while Upvoting"
        },{
            status:403
        })
    }

}