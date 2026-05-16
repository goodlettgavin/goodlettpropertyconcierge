import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: 'price_1TXlJJEHtKMyWt8QHUytZCXm', quantity: 1 }],
      mode: 'subscription',
      success_url: 'https://www.goodlettpropertyconcierge.com?success=true',
      cancel_url: 'https://www.goodlettpropertyconcierge.com?canceled=true',
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
