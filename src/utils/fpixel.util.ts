import findUserIpAddress from "./get-user-api";


export interface PixelParams {
  pixel_id: string;
  pixel_access_token?: string | undefined | null; 
  pixel_test_event_id?: string | undefined | null;
}

export interface ConversionAPIData{
  customData: any;
  event_name: string;
  event_id: string;
  pixelParams: PixelParams;
}


export const pixelParams: PixelParams = {
  pixel_id: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "",
  pixel_access_token: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ACCESS_TOKEN || "",
  pixel_test_event_id: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_TEST_EVENT_ID || "",
}



export const sendConversionAPIData = async ({customData,event_name,event_id,pixelParams}:ConversionAPIData)=>{

  const userIp = await findUserIpAddress();

  const modifySendData = {
    "event_name": event_name,
    "event_id": event_id,
    "event_time": Math.floor(Date.now() / 1000),
    "action_source": "website",
    "event_source_url": window.location.href,
    "user_data": {
      "client_user_agent": navigator.userAgent,
      "client_ip_address": userIp || '0.0.0.0',
    },
    "custom_data": customData,
  }

  fetch(`https://graph.facebook.com/v19.0/${pixelParams.pixel_id}/events?access_token=${pixelParams.pixel_access_token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                  modifySendData
                ], "test_event_code": pixelParams.pixel_test_event_id
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}




export const pageview = async () => {

  const eventId: string = crypto.randomUUID();

  // @ts-ignore
  window.fbq("track", "PageView",{},{eventID: eventId});

  if(pixelParams.pixel_access_token){
    await sendConversionAPIData({customData:{}, event_name: "PageView", event_id:eventId, pixelParams})
  }
};


export const trackAddToCart = async (product: { id: string; quantity: number }) => {

  const eventId: string = crypto.randomUUID();

  const customData = {
    content_type: "product",
    contents: [product],
  };

  // @ts-ignore
  window.fbq("track", "AddToCart", customData ,{eventID: eventId});

  if(pixelParams.pixel_access_token){
    await sendConversionAPIData({customData, event_name: "AddToCart", event_id:eventId, pixelParams})
  }
};


export const initialCheckout = async ({
  products,
  totalPrice,
  currency,
}: {
  products: { id: string; quantity: number }[];
  totalPrice: number;
  currency: string;
}) => {
  const eventId: string = crypto.randomUUID();

  const customData = {
    content_type: "product",
    contents: products,
    value: totalPrice,
    currency,
  };

  // @ts-ignore
  window.fbq("track", "InitiateCheckout", customData ,{eventID: eventId});

  if(pixelParams.pixel_access_token){
    await sendConversionAPIData({customData, event_name: "InitiateCheckout", event_id:eventId, pixelParams})
  }
};


export const trackProductView = async ({
  productId,
  price,
  currency,
}: {
  productId: string;
  price: number;
  currency: string;
}) => {

  const eventId: string = crypto.randomUUID();

  const customData = {
    value: price,
    currency: currency,
    content_type: "product",
    content_ids: [productId],
  };

  // @ts-ignore
  window.fbq("track", "ViewContent",  customData ,{eventID: eventId});


  if(pixelParams.pixel_access_token){
    await sendConversionAPIData({customData, event_name: "ViewContent", event_id:eventId, pixelParams})
  }
};


export const trackPurchase = async ({
  products,
  totalPrice,
  currency,
  receiptUrl,
}: {
  products: { id: string; quantity: number }[];
  totalPrice: number;
  currency: string;
  receiptUrl?: string;
}) => {
  const eventId: string = receiptUrl??crypto.randomUUID();

  const customData = {
    value: totalPrice,
    currency: currency,
    content_type: "product",
    contents: products,
  };


  // @ts-ignore
  window.fbq("track", "Purchase", customData ,{eventID: eventId});

  if(pixelParams.pixel_access_token){
    await sendConversionAPIData({customData, event_name: "Purchase", event_id:eventId, pixelParams})
  }
};
