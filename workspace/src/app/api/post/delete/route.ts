import { NextRequest } from "next/server";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import convex_client from "@/CovexSubscriptionClient";
import { Id } from "../../../../../convex/_generated/dataModel";
import { PostDeleteBody } from "../../body";


export async function DELETE(request: NextRequest) {
    const {id} = await (request.json() as Promise<PostDeleteBody>)
    const deletePost = await convex_client.mutation(api.post.deletePost,{id: id as Id<"post">})
    return Response.json({
        status: deletePost.status
    })
}