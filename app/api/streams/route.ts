import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const YT_REGEX = new RegExp("/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=([a-zA-Z0-9_]+)|youtu\.be\/([a-zA-Z\d_]+))(?:&.*)?$/gm")




const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string(), 
})

export async function POST(req:NextRequest){
    
    try{
        const data = CreateStreamSchema.parse(await req.json());
        const isYt = YT_REGEX.test(data.url)

        if(!isYt){
            return NextResponse.json({
                msg:"Wrong url format"
            },{
                status:411
            })
        }

        const extractedId = data.url.split("?v=")[1]

        const stream = await prisma.stream.create({
            data:{
                userId: data.creatorId,
                url: data.url,
                extractedId:extractedId,
                type:"Youtube"
            }
        })

        return NextResponse.json({
            msg:"Successful",
            stream
        })

    } catch(error){
        return NextResponse.json({
            msg:"Error while adding a stream"
        },{
            status:411
        })
    }


}