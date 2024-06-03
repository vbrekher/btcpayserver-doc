(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{395:function(e,t,a){e.exports=a.p+"assets/img/btcpay-authorize-app-api-key.7a407a00.png"},396:function(e,t,a){e.exports=a.p+"assets/img/btcpay-checkout-flow-chart.1639f36e.png"},734:function(e,t,a){"use strict";a.r(t);var s=a(10),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ecommerce-integration-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecommerce-integration-guide"}},[e._v("#")]),e._v(" eCommerce Integration Guide")]),e._v(" "),t("p",[e._v("This document aims to give best practices and a guide on how to integrate BTCPay Server as a payment solution into eCommerce, ERP, Point of Sale or other systems. If you want to do a broader integration which also manages stores and users on BTCPay this guide is still useful as a starting point. You can find examples on how to manage your BTCPay Server headless via "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample/"}},[e._v("cURL")]),e._v(", "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample-NodeJS/"}},[e._v("Node.js")]),e._v(" or "),t("RouterLink",{attrs:{to:"/Development/GreenfieldExample-PHP/"}},[e._v("PHP")]),e._v(" in our docs.")],1),e._v(" "),t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of contents")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#table-of-contents"}},[e._v("Table of contents")])]),t("li",[t("a",{attrs:{href:"#general-information"}},[e._v("General information")])]),t("li",[t("a",{attrs:{href:"#greenfield-api-docs"}},[e._v("Greenfield API docs")])]),t("li",[t("a",{attrs:{href:"#authentication"}},[e._v("Authentication")]),t("ul",[t("li",[t("a",{attrs:{href:"#api-keys"}},[e._v("API Keys")])]),t("li",[t("a",{attrs:{href:"#permissions"}},[e._v("Permissions")])])])]),t("li",[t("a",{attrs:{href:"#setup-best-practices"}},[e._v("Setup best practices")]),t("ul",[t("li",[t("a",{attrs:{href:"#automatic-setup"}},[e._v("Automatic setup")])]),t("li",[t("a",{attrs:{href:"#manual-setup"}},[e._v("Manual setup")])])])]),t("li",[t("a",{attrs:{href:"#checkout-flow"}},[e._v("Checkout flow")]),t("ul",[t("li",[t("a",{attrs:{href:"#overview-of-the-checkout-flow"}},[e._v("Overview of the checkout flow")])]),t("li",[t("a",{attrs:{href:"#showing-btcpay-bitcoin-lightning-network-as-payment-gateway"}},[e._v("Showing BTCPay (Bitcoin / Lightning Network) as payment gateway")])]),t("li",[t("a",{attrs:{href:"#creating-an-invoice"}},[e._v("Creating an invoice")])]),t("li",[t("a",{attrs:{href:"#redirect"}},[e._v("Redirect")])]),t("li",[t("a",{attrs:{href:"#modal-invoice-page-advanced-optional"}},[e._v("Modal invoice page (advanced, optional)")])]),t("li",[t("a",{attrs:{href:"#validate-and-process-webhooks"}},[e._v("Validate and process webhooks")])]),t("li",[t("a",{attrs:{href:"#refunds"}},[e._v("Refunds")])])])]),t("li",[t("a",{attrs:{href:"#logging-debugging"}},[e._v("Logging / Debugging")])]),t("li",[t("a",{attrs:{href:"#data-scarcity"}},[e._v("Data scarcity")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"general-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-information"}},[e._v("#")]),e._v(" General information")]),e._v(" "),t("p",[e._v("The general idea is to have a smooth setup for your users and a seamless checkout experience for their customers. By providing an automated setup wizard as described below you can avoid writing lots of documentation and make the process as easy as possible for your users.")]),e._v(" "),t("h2",{attrs:{id:"greenfield-api-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-docs"}},[e._v("#")]),e._v(" Greenfield API docs")]),e._v(" "),t("p",[e._v("You can find the API documentation of our so-called Greenfield API "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" (or on your BTCPay Server on the "),t("code",[e._v("/docs")]),e._v(" path). As a quick starter, we have covered the most basic eCommerce integration endpoints examples for "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample/"}},[e._v("cURL")]),e._v(", "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample-NodeJS/"}},[e._v("Node.js")]),e._v(" and "),t("RouterLink",{attrs:{to:"/Development/GreenfieldExample-PHP/"}},[e._v("PHP")]),e._v(". We will refer to those examples throughout this document.")],1),e._v(" "),t("p",[e._v("In the examples below we use the our demo server "),t("a",{attrs:{href:"https://mainnet.demo.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mainnet.demo.btcpayserver.org"),t("OutboundLink")],1),e._v(" as an example. On your integration, this will be the user provided BTCPay Server instance URL.")]),e._v(" "),t("h2",{attrs:{id:"authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),t("p",[e._v("Authentication can be done over Basic-Auth or API key. Using Basic-Auth is not recommended as it will always have full access of your user. With API keys you can give fine-grained permissions per store that can’t do much damage even if your API key is leaked.")]),e._v(" "),t("p",[t("strong",[e._v("Important")]),e._v(": the Authorization-Header is formatted like this:")]),e._v(" "),t("p",[t("code",[e._v("Authorization: token API_KEY")]),e._v("\n(Replace API_KEY with the actual API key)")]),e._v(" "),t("p",[e._v("Example using cURL:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: token API_KEY"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" GET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://mainnet.demo.btcpayserver.org/api/v1/stores/STORE_ID"')]),e._v("\n")])])]),t("h3",{attrs:{id:"api-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-keys"}},[e._v("#")]),e._v(" API Keys")]),e._v(" "),t("p",[e._v("You can generate API keys via the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Authorization",target:"_blank",rel:"noopener noreferrer"}},[e._v("authorization endpoint"),t("OutboundLink")],1),e._v(" (as detailed below in "),t("a",{attrs:{href:"#automatic-setup"}},[e._v("automatic setup")]),e._v(") or for testing you can do so manually as described on "),t("a",{attrs:{href:"#manual-setup"}},[e._v("manual setup")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[e._v("#")]),e._v(" Permissions")]),e._v(" "),t("p",[e._v("You need the following permissions for a typical eCommerce integration and as a starting point to process payments and refunds:")]),e._v(" "),t("p",[t("code",[e._v("btcpay.store.canviewinvoices")]),e._v(" "),t("br"),e._v(" "),t("code",[e._v("btcpay.store.cancreateinvoice")]),e._v(" "),t("br"),e._v(" "),t("code",[e._v("btcpay.store.canmodifyinvoices")]),e._v(" "),t("br"),e._v(" "),t("code",[e._v("btcpay.store.webhooks.canmodifywebhooks")]),e._v(" "),t("br"),e._v(" "),t("code",[e._v("btcpay.store.canviewstoresettings")]),e._v(" "),t("br"),e._v(" "),t("code",[e._v("btcpay.store.cancreatenonapprovedpullpayments")])]),e._v(" "),t("p",[e._v("This allows you to have the minimal needed permissions to create invoices, refunds and to programmatically register a webhook. You should also limit your API key to a specific store, otherwise the API key will work for all the stores of a user.")]),e._v(" "),t("h2",{attrs:{id:"setup-best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-best-practices"}},[e._v("#")]),e._v(" Setup best practices")]),e._v(" "),t("h3",{attrs:{id:"automatic-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatic-setup"}},[e._v("#")]),e._v(" Automatic setup")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(395),alt:"Authorize App, API key generation",title:"Authorize App, API key generation"}})]),e._v(" "),t("p",[e._v("To make the connection flow between your eCommerce system and BTCPay Server as smooth and easy as possible for your users, you can guide them through a setup wizard. This means that ideally the user only enters the URL to their BTCPay Server instance (e.g. "),t("a",{attrs:{href:"https://mainnet.demo.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mainnet.demo.btcpayserver.org"),t("OutboundLink")],1),e._v(') and clicks on a "'),t("em",[e._v("Connect BTCPay Server")]),e._v('" button that will start the following process:')]),e._v(" "),t("ul",[t("li",[e._v("User will get redirected to BTCPay Server authorization page")]),e._v(" "),t("li",[e._v("User logs in with their BTCPay Server account (if not already)")]),e._v(" "),t("li",[e._v("User selects the desired store (if they have multiple stores)")]),e._v(" "),t("li",[e._v("User can enter a label to identify the API key in their BTCPay Server account (optional)")]),e._v(" "),t("li",[e._v("Required permissions (see above screenshot) are already pre-filled for the user")]),e._v(" "),t("li",[e._v('When the user clicks "Authorize app" BTCPay will generate an API key with the permissions and bound to a single store and send it back to your eCommerce system')]),e._v(" "),t("li",[e._v("There you can process the returned payload which contains the API key and the store id")]),e._v(" "),t("li",[e._v("Using that API key you can register a webhook endpoint (of your eCommerce system) on the users store")]),e._v(" "),t("li",[e._v('That endpoint will return a webhook "secret" that you need later to store and use to validate incoming webhook events on invoice status changes')]),e._v(" "),t("li",[e._v("You store all those information in your eCommerce system and the setup is done")])]),e._v(" "),t("h4",{attrs:{id:"example-of-request-of-authorization-endpoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-request-of-authorization-endpoint"}},[e._v("#")]),e._v(" Example of request of "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/ApiKeys_Authorize",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authorization endpoint"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("p",[t("strong",[e._v("Important")]),e._v(': "selectiveStores" needs to be set to true so the user has to explicitly select a store for which the API key will get permissions to. Otherwise the user can select multiple stores.')]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-s")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-H")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-X")]),e._v(" GET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://mainnet.demo.btcpayserver.org/api-keys/authorize?permissions=btcpay.store.canviewinvoices&permissions=btcpay.store.cancreateinvoice&permissions=btcpay.store.canmodifyinvoices&permissions=btcpay.store.webhooks.canmodifywebhooks&permissions=btcpay.store.canviewstoresettings&permissions=btcpay.store.cancreatenonapprovedpullpayments&strict=true&selectiveStores=true&applicationName=YourAppName&redirect=https://example.com/your-callback-url"')]),e._v("\n")])])]),t("h3",{attrs:{id:"manual-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-setup"}},[e._v("#")]),e._v(" Manual setup")]),e._v(" "),t("p",[e._v("You or your user can also create API keys manually in the BTCPay Server UI. That said, the automatic setup is more user-friendly and less error-prone. The manual setup is done as follows:")]),e._v(" "),t("ul",[t("li",[e._v("User logs into BTCPay Server instance")]),e._v(" "),t("li",[e._v('User clicks "'),t("em",[e._v("Account")]),e._v('" -> "'),t("em",[e._v("Manage Account")]),e._v('" -> "'),t("em",[e._v("API keys")]),e._v('"')]),e._v(" "),t("li",[e._v("Creates an API key with above-mentioned permissions, limited to a specific store")]),e._v(" "),t("li",[e._v("Copies the API key and store id to your form")]),e._v(" "),t("li",[e._v('Creates a webhook in store: "'),t("em",[e._v("Settings")]),e._v('" -> "'),t("em",[e._v("Webhooks")]),e._v('"; Copies the '),t("code",[e._v("secret")]),e._v(" into your settings form")])]),e._v(" "),t("h2",{attrs:{id:"checkout-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkout-flow"}},[e._v("#")]),e._v(" Checkout flow")]),e._v(" "),t("h3",{attrs:{id:"overview-of-the-checkout-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-the-checkout-flow"}},[e._v("#")]),e._v(" Overview of the checkout flow")]),e._v(" "),t("p",[t("strong",[t("em",[e._v("Legend")])]),e._v(":")]),e._v(" "),t("p",[t("strong",[e._v("FE")]),e._v(": Frontend (your website/existing system) "),t("br"),e._v(" "),t("strong",[e._v("BE")]),e._v(": Backend (your website/existing system) "),t("br"),e._v(" "),t("strong",[e._v("BTCPay")]),e._v(": BTCPay Server instance hosted by yourself or a 3rd party")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(396),alt:"BTCPay checkout flow chart",title:"BTCPay checkout flow chart"}})]),e._v(" "),t("ol",[t("li",[e._v("FE: On checkout the user selects payment method (in this case e.g. Bitcoin (via BTCPay))")]),e._v(" "),t("li",[e._v("FE/BE: Checkout data is passed to BE and BE "),t("a",{attrs:{href:"#creating-an-invoice"}},[e._v("creates an invoice")]),e._v(" on BTCPay, your BE stores the invoice ID alongside your internal order or checkout id so it can be matched at a later point.")]),e._v(" "),t("li",[e._v("FE option 1: the customer gets redirected to BTCPay invoice page and sees the QR-code and payment options  "),t("br"),e._v("\nFE option 2: the customer sees the BTCPay checkout page in an modal overlay")]),e._v(" "),t("li",[e._v("Customer pays the invoice")]),e._v(" "),t("li",[e._v('BTCPay: as soon as the payment is seen in the mempool (and the invoice is paid fully) BTCPay fires a webhook with the "InvoiceProcessing" event; BE needs to update the payment status to e.g. "pending", "approved", "on-hold"')]),e._v(" "),t("li",[e._v("Customer gets redirected to order-confirmation page either automatically or by clicking a button")]),e._v(" "),t("li",[e._v('BTCPay: depending on configured number of confirmations (defaults to 1 confirmation) BTCPay fires a webhook with the "InvoiceSettled" event; BE updates the order status to e.g. "paid", "settled"')])]),e._v(" "),t("p",[e._v("Note: the webhooks of 5. and 7. fire with an average 10 minute time gap, depending on when the next block is found for on-chain bitcoin transactions. For Lightning Network (off-chain) transactions those two events fire immediately after each other and the payment is settled.")]),e._v(" "),t("h3",{attrs:{id:"showing-btcpay-bitcoin-lightning-network-as-payment-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#showing-btcpay-bitcoin-lightning-network-as-payment-gateway"}},[e._v("#")]),e._v(" Showing BTCPay (Bitcoin / Lightning Network) as payment gateway")]),e._v(" "),t("p",[e._v('This is highly dependent on how your checkout flow works. On most eCommerce stores you have a payment step and on that step different payment methods are listed. Usually you list "Bitcoin / Lightning Network". The default is that all configured payment methods on BTCPay Server side will be available on the invoice page where the QR-code is shown. For more advanced use-cases you could also list supported payment methods separately and pass them when creating the invoic, this way you could give e.g. discount on Lightning Network payments compared to on-chain payments.')]),e._v(" "),t("h3",{attrs:{id:"creating-an-invoice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-invoice"}},[e._v("#")]),e._v(" Creating an invoice")]),e._v(" "),t("p",[e._v('When the customer chooses BTCPay (Bitcoin / Lightning Network) as payment option on the FE your BE needs to create an invoice using the create invoice endpoint. This will return you an invoice object with an invoice ID, this invoice ID should be stored alongside your order as it will be used in webhooks so you can match and find your order. The returned invoice object also contains a property "checkoutLink" this is the link you can redirect your customer to pay, see below.')]),e._v(" "),t("p",[e._v("This is done by using the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_CreateInvoice",target:"_blank",rel:"noopener noreferrer"}},[e._v("create invoice endpoint"),t("OutboundLink")],1),e._v(", see examples in "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample/#create-an-invoice"}},[e._v("cURL")]),e._v(", "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample-NodeJS/"}},[e._v("Node.Js")]),e._v(" or "),t("RouterLink",{attrs:{to:"/Development/GreenfieldExample-PHP/#create-an-invoice"}},[e._v("PHP")]),e._v(".")],1),e._v(" "),t("p",[e._v("It is important that you store the invoice id alongside your internal order or checkout object. This is needed so that you can find the matching internal order when you process the "),t("a",{attrs:{href:"#invoice-webhook-events"}},[e._v("webhook events")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"redirect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redirect"}},[e._v("#")]),e._v(" Redirect")]),e._v(" "),t("p",[e._v("The invoice object contains the property "),t("code",[e._v("checkoutLink")]),e._v(" which is the URL to your BTCPay checkout page for that specific invoice. You can redirect the customers to that page so they can pay.")]),e._v(" "),t("p",[e._v("After successful payment the customer will get redirected back to your store or to the specified "),t("code",[e._v("redirectURL")]),e._v(" in the "),t("code",[e._v("checkout")]),e._v(" object, you can set that on creating the invoice.")]),e._v(" "),t("h3",{attrs:{id:"modal-invoice-page-advanced-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modal-invoice-page-advanced-optional"}},[e._v("#")]),e._v(" Modal invoice page (advanced, optional)")]),e._v(" "),t("p",[e._v("Instead of redirecting the customer to an external BTCPay invoice checkout page you can also show it via an modal/overlay directly on your store checkout. For this you need to load the "),t("code",[e._v("btcpay.js")]),e._v(" from your BTCPay instance and add some Javascript to your frontend that listens on payment events.")]),e._v(" "),t("p",[e._v("Load the "),t("code",[e._v("btcpay.js")]),e._v(" script from your BTCPay instance:\n"),t("code",[e._v("https://mainnet.demo.btcpayserver.org/modal/btcpay.js")])]),e._v(" "),t("p",[e._v("Below is a simplified example of how to listen to payment events. You can find a full example in our WooCommerce plugin "),t("a",{attrs:{href:"https://github.com/btcpayserver/woocommerce-greenfield-plugin/blob/master/resources/js/frontend/modalCheckout.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" invoice_paid "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("btcpay"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("onModalReceiveMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("isObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'complete'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'paid'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n          invoice_paid "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n          window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("location "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("orderCompleteLink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'expired'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n          window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("btcpay"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("hideFrame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Show some error to the user.")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// handle event.data "loaded" "closed"')]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("data "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'close'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("invoice_paid "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("location "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("orderCompleteLink"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Show some error to the user, user closed the modal by clicking the X.")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("isObject")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("obj")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'[object Object]'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h3",{attrs:{id:"validate-and-process-webhooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate-and-process-webhooks"}},[e._v("#")]),e._v(" Validate and process webhooks")]),e._v(" "),t("h4",{attrs:{id:"invoice-webhook-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#invoice-webhook-events"}},[e._v("#")]),e._v(" Invoice webhook events")]),e._v(" "),t("p",[e._v("These invoice webhook events are available, for details click on the link to the API doc.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("InvoiceCreated")]),e._v(": Invoice has been created")]),e._v(" "),t("li",[t("strong",[e._v("InvoiceReceivedPayment")]),e._v(": Payment has been seen in the mempool (unconfirmed)")]),e._v(" "),t("li",[t("strong",[e._v("InvoicePaymentSettled")]),e._v(": Payment has been confirmed on the blockchain")]),e._v(" "),t("li",[t("strong",[e._v("InvoiceProcessing")]),e._v(': Full invoice payment ahs been seen in the mempool (unconfirmed), BE should update the order status to "pending" or "approved"')]),e._v(" "),t("li",[t("strong",[e._v("InvoiceExpired")]),e._v(': Payment is not seen in the mempool within the time frame, BE should update the order status to "expired"')]),e._v(" "),t("li",[t("strong",[e._v("InvoiceSettled")]),e._v(': Payment is confirmed on the blockchain, BE should update the order status to "paid" or "settled"')]),e._v(" "),t("li",[t("strong",[e._v("InvoiceInvalid")]),e._v(': Payment is invalid, BE should update the order status to "invalid"')])]),e._v(" "),t("p",[e._v("The most important events are:")]),e._v(" "),t("ul",[t("li",[e._v("InvoiceProcessing")]),e._v(" "),t("li",[e._v("InvoiceExpired")]),e._v(" "),t("li",[e._v("InvoiceSettled")]),e._v(" "),t("li",[e._v("InvoiceInvalid")])]),e._v(" "),t("p",[e._v("But you also need these events to e.g. handle payments after expiration:")]),e._v(" "),t("ul",[t("li",[e._v("InvoiceReceivedPayment")]),e._v(" "),t("li",[e._v("InvoicePaymentSettled")])]),e._v(" "),t("h4",{attrs:{id:"possible-invoices-states"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#possible-invoices-states"}},[e._v("#")]),e._v(" Possible invoices states")]),e._v(" "),t("p",[e._v("Normally the webhook events are enough to set the order status in your BE and there is no need to do an additional GET request to check the status of the invoice. However sometimes you still need to do that and check what the actual status is. You can do that by using the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_GetInvoice",target:"_blank",rel:"noopener noreferrer"}},[e._v("get invoice endpoint"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Like with the webhook events you need to be aware of edge-cases like partial or overpayment. On the returned invoice object you have two important properties that will give you a clear status of what the current satus of the invoice is:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("status")]),e._v(": "),t("code",[e._v("Expired")]),e._v(" "),t("code",[e._v("Invalid")]),e._v(" "),t("code",[e._v("New")]),e._v(" "),t("code",[e._v("Processing")]),e._v(" "),t("code",[e._v("Settled")])]),e._v(" "),t("li",[t("strong",[e._v("additionalStatus")]),e._v(": "),t("code",[e._v("Invalid")]),e._v(" "),t("code",[e._v("Marked")]),e._v(" "),t("code",[e._v("None")]),e._v(" "),t("code",[e._v("PaidLate")]),e._v(" "),t("code",[e._v("PaidOver")]),e._v(" "),t("code",[e._v("PaidPartial")])])]),e._v(" "),t("p",[e._v("You always need to check both properties to get the full picture of the invoice status. It could happen that an invoice is expired but it was paid partially or fully paid after the invoice expired.")]),e._v(" "),t("h4",{attrs:{id:"validate-webhook-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate-webhook-signature"}},[e._v("#")]),e._v(" Validate webhook signature")]),e._v(" "),t("p",[e._v('When you receive a webhook event you should validate the signature to make sure the event is actually coming from your BTCPay Server instance. The signature is a HMAC-SHA256 hash of the event payload and your webhook secret. The secret is returned when you register a webhook on the store (as mentioned above). You can find the secret in the BTCPay Server UI under "'),t("em",[e._v("Settings")]),e._v('" -> "'),t("em",[e._v("Webhooks")]),e._v('".')]),e._v(" "),t("p",[e._v("You can find examples for "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample-NodeJS/#validate-and-process-webhooks"}},[e._v("Node.Js")]),e._v(" and "),t("RouterLink",{attrs:{to:"/Development/GreenfieldExample-PHP/#validate-and-process-webhooks"}},[e._v("PHP")]),e._v(" in our docs.")],1),e._v(" "),t("h4",{attrs:{id:"process-webhook-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process-webhook-events"}},[e._v("#")]),e._v(" Process webhook events")]),e._v(" "),t("p",[e._v("Each webhook payload with have an "),t("code",[e._v("invoiceId")]),e._v(" property, this is the id of the invoice that the event is related to. As you stored that invoice id alongside your order you can now find the matching order and update the status accordingly.")]),e._v(" "),t("p",[e._v("In most cases you can ignore the "),t("code",[e._v("InvoiceCreated")]),e._v(" event as you created the invoice during the checkout process and already have stored the invoice id alongside your order. But there are some edge-cases where you will have expired invoices that have been paid partially or overpaid. You can check our WooCommerce plugin PHP code for an example on how to handle those cases "),t("a",{attrs:{href:"https://github.com/btcpayserver/woocommerce-greenfield-plugin/blob/master/src/Gateway/AbstractGateway.php#L504",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v('On the invoice details page you can manually re-trigger the webhook events for testing purposes, by clicking on the "Redeliver" link on the list of webhooks.')])]),e._v(" "),t("h3",{attrs:{id:"refunds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refunds"}},[e._v("#")]),e._v(" Refunds")]),e._v(" "),t("p",[e._v("Refunds can be issued via the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Invoices_Refund",target:"_blank",rel:"noopener noreferrer"}},[e._v("invoice refund endpoint"),t("OutboundLink")],1),e._v(". This will return a link where the customer can claim the refund. You can find examples for "),t("RouterLink",{attrs:{to:"/Development/GreenFieldExample-NodeJS/#issue-a-full-refund-of-an-invoice"}},[e._v("Node.Js")]),e._v(" and "),t("RouterLink",{attrs:{to:"/Development/GreenfieldExample-PHP/#issue-a-full-refund-of-an-invoice"}},[e._v("PHP")]),e._v(" in our docs.")],1),e._v(" "),t("p",[e._v("Alternatively you can also use the more generic "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/PullPayments_CreatePullPayment",target:"_blank",rel:"noopener noreferrer"}},[e._v("pull-payments endpoint"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"logging-debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-debugging"}},[e._v("#")]),e._v(" Logging / Debugging")]),e._v(" "),t("p",[e._v('On every API call and internal interaction like status updates you should catch errors and log them accordingly. So that in your BE the users/admins can see what the problem is and reach out to you with the actual error. You avoid lots of back and forth this way. You can also consider to do a "debug-mode" which will log even more data like webhook payloads and internal status updates - to allow more fine-grained bug hunting.')]),e._v(" "),t("h2",{attrs:{id:"data-scarcity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-scarcity"}},[e._v("#")]),e._v(" Data scarcity")]),e._v(" "),t("p",[e._v("While it is possible that you pass any data as metadata to an invoice, you should not send customer data unless you have good reasons to do so. The most important metadata you want to send is the "),t("code",[e._v("orderId")]),e._v(" which you can use to then link with BTCPay "),t("code",[e._v("invoiceId")]),e._v(". This way there is no need to pass all customer data along and risk leaking the data if there is a hack of your BTCPay Server instance (or in case your users use a 3rd party host).")])])}),[],!1,null,null,null);t.default=o.exports}}]);