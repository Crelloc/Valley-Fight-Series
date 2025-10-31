import React from 'react';
import { SHOPIFY_MERCH_URL_PREVIEW } from '../constants';

interface ShopifyMerchLinkProps {
  className?: string;
  children: React.ReactNode;
}

const ShopifyMerchLink: React.FC<ShopifyMerchLinkProps> = ({ className, children }) => {
  // We use a form to POST directly to the password-protected Shopify page.
  // This bypasses the intermediate redirect page and solves the browser history issue.
  return (
    <form
      method="post"
      action={SHOPIFY_MERCH_URL_PREVIEW}
      className="inline" // Use inline to not disrupt layout
    >
      <input type="hidden" name="form_type" value="storefront_password" />
      <input type="hidden" name="utf8" value="✓" />
      <input type="hidden" name="password" value="vfs" />
      <button
        type="submit"
        // Reset button styles to make it look like a link, then apply passed classes
        className={`bg-transparent border-none p-0 m-0 font-inherit cursor-pointer text-left ${className}`}
      >
        {children}
      </button>
    </form>
  );
};

export default ShopifyMerchLink;