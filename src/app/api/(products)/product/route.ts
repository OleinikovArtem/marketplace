import {Prisma} from ".prisma/client";
import {db} from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {description, name, price, image} = await req.json() as Prisma.ProductCreateArgs['data']

    const newProduct = await db.product.create({
      data: {
        description, name, price, image
      }
    })

    console.log({newProduct})

    return new Response(JSON.stringify(newProduct))
  } catch (e: any) {
    return new Response(e.message)
  }
}
