
import { sendGTMEvent } from "@next/third-parties/google";


export const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";


export const pageview = () => {
  sendGTMEvent({ event: "PageView", value: "PageView" });
};

export const trackAddToCart = ({
  product,
  currency,
}: {
  product: any;
  currency: string;
}) => {
  sendGTMEvent({
    event: "add_to_cart",
    ecommerce: {
      currency: currency,
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          affiliation: "",
          coupon: "",
          discount: 0,
          index: 0,
          item_brand: "",
          item_category: product.categories[0]?.name,
          item_category2: "",
          item_category3: "",
          item_category4: "",
          item_category5: "",
          item_list_id: "",
          item_list_name: "",
          item_variant: "",
          location_id: "",
          price: product.price,
          quantity: product.qty,
        },
      ],
    },
    fb_event_data: {
      content_type: "product",
      contents: [{ id: product.id.toString(), quantity: product.qty }],
    },

    // {
    //   content_type: "product",
    //   contents: [product],
    // }
  });
};

export const initialCheckout = ({
  products,
  totalPrice,
  currency,
}: {
  products: any[];
  totalPrice: number;
  currency: string;
}) => {
  sendGTMEvent({
    event: "begin_checkout",
    ecommerce: {
      currency: currency,
      value: totalPrice,
      coupon: "",
      items: products.map((product) => ({
        item_id: product.id,
        item_name: product.name,
        affiliation: "",
        coupon: "",
        discount: 0,
        index: 0,
        item_brand: "",
        item_category: product.categories[0]?.name,
        item_category2: "",
        item_category3: "",
        item_category4: "",
        item_category5: "",
        item_list_id: "",
        item_list_name: "",
        item_variant: "",
        location_id: "",
        price: product.price,
        quantity: product.qty,
      })),
    },
    fb_event_data: {
      content_type: "product",
      contents: products.map((product) => ({
        id: product.id.toString(),
        quantity: product.qty,
      })),
      value: totalPrice,
      currency,
    },
  });
};

export const trackProductView = ({
  product,
  price,
  currency,
}: {
  product: any;
  price: number;
  currency: string;
}) => {
  sendGTMEvent({
    event: "view_item",
    ecommerce: {
      currency: currency,
      value: price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          affiliation: "",
          coupon: "",
          discount: 0,
          index: 0,
          item_brand: "",
          item_category: product.categories[0]?.name,
          item_category2: "",
          item_category3: "",
          item_category4: "",
          item_category5: "",
          item_list_id: "",
          item_list_name: "",
          item_variant: "",
          location_id: "",
          price: product.price,
          quantity: product.qty,
        },
      ],
    },
    fb_event_data: {
      value: price,
      currency: currency,
      content_type: "product",
      content_ids: [product.id],
    },

    // {
    //   value: price,
    //   currency: currency,
    //   content_type: "product",
    //   content_ids: [productId],
    // }
  });
};

export const trackPurchase = ({
  transaction_id,
  products,
  totalPrice,
  currency,
  tax,
  shipping,
}: {
  transaction_id: number;
  products: any[];
  totalPrice: number;
  currency: string;
  tax: number;
  shipping: number;
}) => {
  sendGTMEvent({
    event: "purchase",
    ecommerce: {
      currency: currency,
      value: totalPrice,
      coupon: "",
      transaction_id: transaction_id.toString(),
      tax: tax,
      shipping: shipping,
      items: products.map((product) => ({
        item_id: product.inventory?.id,
        item_name: product.name,
        affiliation: "",
        coupon: "",
        discount: 0,
        index: 0,
        item_brand: "",
        item_category: product.inventory?.categories && product.inventory?.categories[0]?.name,
        item_category2: "",
        item_category3: "",
        item_category4: "",
        item_category5: "",
        item_list_id: "",
        item_list_name: "",
        item_variant: "",
        location_id: "",
        price: product.price,
        quantity: product.qty,
      })),
    },
    fb_event_data: {
      content_type: "product",
      contents: products.map((product) => ({
        id: product.inventory?.id.toString(),
        quantity: product.qty,
      })),
      value: totalPrice,
      currency,
    },
  });
};
