import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req:NextRequest){
    const session = await getServerSession()

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


    const streams = await prisma.stream.findMany({
        where:{
            userId:user.id
        }
    })

    return NextResponse.json({
        streams
    })
}