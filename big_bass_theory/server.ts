import express from 'express'
import cors from 'cors'
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51QXucCB4LoFmb9NBx1u3TIwsiGOWgDBenKT4JPGlZeCJj4bLlxKndqUWVdNCPjc5x8216sXYdgmea9Z6ep5v8nQm009iRlHIXn', {
  apiVersion: '2024-12-18.acacia', // Use the appropriate API version
});

const app = express();
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async (req, res) => {
    const items = req.body.items
    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    items.forEach((element: { price: string, quantity: number }) => {
        lineItems.push(
            {
                price: element.price,
                quantity: 1
            }
        )
    });

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: 'https://localhost:5173/success',
            cancel_url: 'https://localhost:5173/cancel',
        });

        res.send(
            JSON.stringify({
            url: session.url,
            })
        );
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(4000, () => console.log("Listening on port 4000"))

export default stripe;

