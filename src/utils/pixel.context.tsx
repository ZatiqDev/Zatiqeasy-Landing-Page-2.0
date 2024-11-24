'use client';
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import { gtmId } from "./gtm.util";
import { fbq } from ".";


// {
//   children,
// }: {
//   children: React.ReactNode;
// }
export const GTMPixelContextProvider = () => {

  const pathname = usePathname();


  useEffect(() => {
    fbq.pageview();
  }, [pathname]);



  // useEffect(() => {
  //   analytics.then((analytics: any) => {
  //     analytics &&
  //       logEvent(analytics, "page_view", {
  //         path_name: pathname,
  //       });
  //   });
  // }, [pathname]);

  return (
    <>
      {(
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${fbq.pixelParams.pixel_id}');
          `,
          }}
        />
      )}

      <GoogleTagManager gtmId={gtmId!} />

      {/* {children} */}
    </>
  );
};
