import React, { useEffect, useRef } from 'react';
import { SHOPIFY_MERCH_URL_PREVIEW } from '../constants';

const MerchRedirectPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // This effect runs once on mount, submitting the form to the merch store.
    formRef.current?.submit();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bebas text-white tracking-wider">Redirecting to our Merch Store...</h2>
        <p className="text-gray-400 mt-2">Please wait. If you are not redirected automatically, please enable pop-ups for this site.</p>
        
        {/* This form is hidden and submitted automatically to log into the Shopify store */}
        <form ref={formRef} method="post" action={SHOPIFY_MERCH_URL_PREVIEW} className="hidden">
          <input type="hidden" name="form_type" value="storefront_password" />
          <input type="hidden" name="utf8" value="✓" />
          <input type="password" name="password" defaultValue="vfs" readOnly />
        </form>
      </div>
    </div>
  );
};

export default MerchRedirectPage;
