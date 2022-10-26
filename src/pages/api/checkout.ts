import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res:NextApiResponse){
    const { productId } = req.body
    

/*     if(req.method !== 'POST'){
        return res.status(405).json({ error: 'Method not alowed' })
    }

    if(!priceId){
        return res.status(400).json({error: 'Price not found'})
    } */

    const sucessUrl = `${process.env.NEXT_URL}/sucess?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: productId,
                quantity: 2,

            },
            {
                price: 'price_1LwSYsLM6HwtcZ1JJMdZHjbG',
                quantity: 1,

            },
        ]
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}