(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{398:function(e,t,s){e.exports=s.p+"assets/img/btcpayfastsync1.b3088b95.jpg"},399:function(e,t,s){e.exports=s.p+"assets/img/btcpayfastsync2.4daae8f3.jpg"},400:function(e,t,s){e.exports=s.p+"assets/img/btcpayfastsync3.97ca261b.jpg"},401:function(e,t,s){e.exports=s.p+"assets/img/btcpayfastsync4.c09d48fe.jpg"},402:function(e,t,s){e.exports=s.p+"assets/img/btcpayfastsync6.e4367afb.jpg"},731:function(e,t,s){"use strict";s.r(t);var o=s(9),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fast-sync-bitcoin-for-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fast-sync-bitcoin-for-btcpay-server"}},[e._v("#")]),e._v(" Fast sync Bitcoin for BTCPay Server")]),e._v(" "),t("h2",{attrs:{id:"what-problem-does-fast-sync-solve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-problem-does-fast-sync-solve"}},[e._v("#")]),e._v(" What problem does Fast Sync solve?")]),e._v(" "),t("p",[e._v("When you start a new BTCPay Server, you need to synchronize your Bitcoin node from the genesis block.")]),e._v(" "),t("p",[e._v("Validating from the genesis blocks takes, in general, 1 or 2 days on affordable servers. (around 10$ per month)")]),e._v(" "),t("p",[e._v("However, synchronization time will take around two weeks on some low-powered devices like a raspberry PI. (and it will linearly increase with time)")]),e._v(" "),t("p",[e._v("Fast Sync provides a solution to decrease the synchronization time dramatically to minutes or a few hours.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Current UTXO Set snapshots only work for Bitcoin Core 0.17.0 or higher. Do NOT use these sets on older versions of Bitcoin Core (0.16.3 or lower)")])]),e._v(" "),t("h2",{attrs:{id:"how-does-fast-sync-solve-the-problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-fast-sync-solve-the-problem"}},[e._v("#")]),e._v(" How does Fast Sync solve the problem?")]),e._v(" "),t("p",[e._v("For Bitcoin software to operate, you do not need all the history of blocks from the genesis.")]),e._v(" "),t("p",[e._v("You need the state of Bitcoin up to a certain block (this state is called "),t("code",[e._v("UTXO Set")]),e._v("), and around ~300 blocks before this point.")]),e._v(" "),t("p",[e._v("Fast Sync downloads the UTXO Set at a specific block on an external server, and deploy it on your node. We call this file a "),t("code",[e._v("UTXO Set snapshot")]),e._v(".")]),e._v(" "),t("p",[e._v("When your node starts up again, with the "),t("code",[e._v("UTXO Set snapshot")]),e._v(" it will only need to synchronize from this point to the latest blocks.")]),e._v(" "),t("h2",{attrs:{id:"what-are-the-downsides-of-fast-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-downsides-of-fast-sync"}},[e._v("#")]),e._v(" What are the downsides of Fast Sync?")]),e._v(" "),t("h3",{attrs:{id:"malicious-utxo-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#malicious-utxo-set"}},[e._v("#")]),e._v(" Malicious UTXO Set")]),e._v(" "),t("p",[e._v("Fast Sync can potentially get abused:")]),e._v(" "),t("ol",[t("li",[e._v("The attacker gives you a "),t("code",[e._v("UTXO Set snapshot")]),e._v(", which does not follow Bitcoin consensus.")]),e._v(" "),t("li",[e._v("The attacker makes a purchase to your store.")]),e._v(" "),t("li",[e._v("Nodes following the consensus would not recognize the payment as valid, but your node will.")]),e._v(" "),t("li",[e._v("The coins the attacker sent you are just worthless.")])]),e._v(" "),t("p",[e._v("Other attacks can completely bring down your node.")]),e._v(" "),t("h3",{attrs:{id:"lightning-network-routing-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-routing-issues"}},[e._v("#")]),e._v(" Lightning Network routing issues")]),e._v(" "),t("p",[e._v("As a merchant, you generally do not care about this issue. Merchants are mainly receiving payment, so they don't need to do any routing.")]),e._v(" "),t("p",[e._v("However, if you plan to send payments from your lightning node, you may have issues:")]),e._v(" "),t("p",[e._v("Because you do not have old blocks, your lightning node won't see any channels created prior to the snapshot.")]),e._v(" "),t("p",[e._v("If this is a problem for you, use an older snapshot.")]),e._v(" "),t("h2",{attrs:{id:"how-to-verify-that-the-utxo-set-snapshot-follows-the-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-verify-that-the-utxo-set-snapshot-follows-the-consensus"}},[e._v("#")]),e._v(" How to verify that the UTXO Set snapshot follows the consensus?")]),e._v(" "),t("h3",{attrs:{id:"if-you-trust-the-owner-of-this-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-you-trust-the-owner-of-this-repository"}},[e._v("#")]),e._v(" If you trust the owner of this repository....")]),e._v(" "),t("p",[e._v("The snapshots recognized as valid by the "),t("code",[e._v("btcpayserver-docker")]),e._v(" repository you've cloned, can be found on "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/utxo-sets",target:"_blank",rel:"noopener noreferrer"}},[e._v("utxo-sets"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("When you SSH into your new Sync BTCPay Server (by the use of Putty, for example), the first thing you have to do is become "),t("code",[e._v("root")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -i\n")])])]),t("p",[e._v("Before you start the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/load-utxo-set.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("load-utxo-set.sh"),t("OutboundLink")],1),e._v(", you must bring down your BTCPay Server.")]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("btcpayserver-docker")]),e._v(" directory you run "),t("code",[e._v("btcpay-down.sh")]),e._v(" to bring down your instance.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker\n./btcpay-down.sh\n")])])]),t("figure",[t("img",{attrs:{src:s(398),alt:"BTCPay Server FastSync",title:"BTCPay Server FastSync"}})]),e._v(" "),t("p",[e._v("After you've shut down BTCPay Server, you now go into the FastSync directory and run the "),t("code",[e._v("load-utxo-set.sh")]),e._v(" script:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker/contrib/FastSync\n./load-utxo-set.sh\n")])])]),t("p",[e._v("The script "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/load-utxo-set.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("load-utxo-set.sh"),t("OutboundLink")],1),e._v(" will download the utxo-set from the environment variable "),t("code",[e._v("UTXO_DOWNLOAD_LINK")]),e._v(".")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("UTXO_DOWNLOAD_LINK")]),e._v(" is empty, "),t("code",[e._v("NBITCOIN_NETWORK")]),e._v(" (with value set to "),t("code",[e._v("mainnet")]),e._v(" or "),t("code",[e._v("testnet")]),e._v(") will be used to take a default "),t("code",[e._v("UTXO_DOWNLOAD_LINK")]),e._v(" that we hard coded inside "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/load-utxo-set.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("load-utxo-set.sh"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:s(399),alt:"BTCPay Server FastSync",title:"BTCPay Server FastSync"}})]),e._v(" "),t("p",[e._v("Once the files are downloaded, the hash will be checked against those in "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/utxo-sets",target:"_blank",rel:"noopener noreferrer"}},[e._v("utxo-sets"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("figure",[t("img",{attrs:{src:s(400),alt:"BTCPay Server FastSync",title:"BTCPay Server FastSync"}})]),e._v(" "),t("p",[e._v("After the "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/load-utxo-set.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("load-utxo-set.sh"),t("OutboundLink")],1),e._v(" is done, you will be warned, and asked to delete the docker volume "),t("code",[e._v("generated_bitcoin_wallet_datadir")]),e._v(".\nThis will be recreated when we now run the "),t("code",[e._v("btcpay-up.sh")]),e._v(" script.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" volume "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" generated_bitcoin_wallet_datadir\n")])])]),t("p",[e._v("Now go back to the "),t("code",[e._v("btcpayserver-docker")]),e._v(" directory, and let's restart your Server with "),t("code",[e._v("./btcpay-up.sh")]),e._v(" to sync the rest!")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker\n./btcpay-up.sh\n")])])]),t("p",[e._v("The rest of the Sync will take place on your BTCPay Server until it reaches the latest block height.")]),e._v(" "),t("p",[e._v("You can either follow this process in the UI of the BTCPay Server or run the following command in the CLI. This will show you the latest log output and the current block height of your "),t("code",[e._v("Fast Sync")]),e._v(" node.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" logs --tail -100 btcpayserver_bitcoind\n")])])]),t("figure",[t("img",{attrs:{src:s(401),alt:"BTCPay Server FastSync",title:"BTCPay Server FastSync"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("strong",[e._v("However: This will only prove that the owner of this git repository is honest, and the utxo-sets are verified and correct.")]),e._v(" "),t("strong",[e._v("Completing those steps does not mean that the UTXO set snapshot is legit. It only means that you trust the owner of this git repository to have verified that it is legit.")])])]),e._v(" "),t("h3",{attrs:{id:"dont-trust-verify-"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dont-trust-verify-"}},[e._v("#")]),e._v(" Don't trust, verify!"),t("a",{attrs:{name:"donttrust"}})]),e._v(" "),t("p",[e._v("If you don't trust anybody, which should be the case as much as possible, then here are the steps to verify that the UTXO set you just loaded is not malicious.")]),e._v(" "),t("ol",[t("li",[e._v("You need another node that you own, entirely "),t("code",[e._v("under your control")]),e._v(", that "),t("code",[e._v("you synchronized from the genesis block")]),e._v(". Let's call this node "),t("code",[e._v("Trusty")]),e._v(".")]),e._v(" "),t("li",[e._v("In the previous "),t("RouterLink",{attrs:{to:"/Docker/#if-you-trust-the-owner-of-this-repository"}},[e._v("step")]),e._v(" you've set up the "),t("code",[e._v("Fast Sync")]),e._v(" node. Let's call this "),t("code",[e._v("Synchy")]),e._v(".")],1),e._v(" "),t("li",[e._v("Wait for "),t("code",[e._v("Synchy")]),e._v(" to be fully synced.")]),e._v(" "),t("li",[e._v("Now on, "),t("code",[e._v("Synchy")]),e._v(" and "),t("code",[e._v("Trusty")]),e._v(" run the following command at the same time:")])]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("Synchy")]),e._v(" or "),t("code",[e._v("Trusty")]),e._v(" are both using BTCPay Server, go to the "),t("code",[e._v("btcpayserver-docker")]),e._v(" directory and use:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker\n./bitcoin-cli.sh gettxoutsetinfo\n")])])]),t("p",[e._v("Or use if non BTCPay Server node :")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v(" bitcoin-cli gettxoutsetinfo\n")])])]),t("p",[e._v("Running this command might take some time, and nothing will show up in the terminal in the meantime.")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Verify that the output of "),t("code",[e._v("Synchy")]),e._v(" and "),t("code",[e._v("Trusty")]),e._v(" are identical (you can ignore "),t("code",[e._v("disk_size")]),e._v(").")])]),e._v(" "),t("figure",[t("img",{attrs:{src:s(402),alt:"BTCPay Server FastSync",title:"BTCPay Server FastSync"}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("strong",[e._v("Completing those steps, assuming the software you are running is not malicious, correctly prove that the UTXO set snapshot is legit")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"if-you-trust-someone-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-you-trust-someone-else"}},[e._v("#")]),e._v(" If you trust someone else...")]),e._v(" "),t("p",[e._v("This repository contains the signatures of some developers, for example "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/sigs/NicolasDorier.utxo-sets.asc",target:"_blank",rel:"noopener noreferrer"}},[e._v("sigs/NicolasDorier.utxo-sets.asc"),t("OutboundLink")],1),e._v(" contains the hashes that "),t("code",[e._v("NicolasDorier")]),e._v(" verified himself.")]),e._v(" "),t("p",[e._v("You need to verify with "),t("a",{attrs:{href:"https://keybase.io/docs/command_line",target:"_blank",rel:"noopener noreferrer"}},[e._v("KeyBase command line"),t("OutboundLink")],1),e._v(" that the signature is legit:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("keybase pgp verify -i sigs/NicolasDorier.utxo-sets.asc\n")])])]),t("p",[e._v("If you don't like command line, you can verify against "),t("a",{attrs:{href:"https://keybase.io/verify",target:"_blank",rel:"noopener noreferrer"}},[e._v("keybase verify page"),t("OutboundLink")],1),e._v(" by just copying and pasting the content of "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/sigs/NicolasDorier.utxo-sets.asc",target:"_blank",rel:"noopener noreferrer"}},[e._v("sigs/NicolasDorier.utxo-sets.asc"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("You can verify that the handle "),t("code",[e._v("NicolasDorier")]),e._v(" refers to the person who controls "),t("code",[e._v("NicolasDorier")]),e._v(" Twitter, GitHub, and Reddit handle on "),t("a",{attrs:{href:"https://keybase.io/NicolasDorier",target:"_blank",rel:"noopener noreferrer"}},[e._v("the keybase profile page"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[t("strong",[e._v("Completing those steps does not mean that the UTXO set snapshot is legit")]),e._v(". It only means that you trust the owner of a Keybase account, who has proved access to some social media accounts in the past.")])]),e._v(" "),t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h3",{attrs:{id:"can-i-add-my-signature-to-this-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-add-my-signature-to-this-repository"}},[e._v("#")]),e._v(" Can I add my signature to this repository?")]),e._v(" "),t("p",[e._v("If you are a bitcoin developer or public figure, feel free to add your signature. For this, you need:")]),e._v(" "),t("ol",[t("li",[e._v("A "),t("a",{attrs:{href:"http://keybase.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("keybase account"),t("OutboundLink")],1),e._v(" linked to your social media accounts.")]),e._v(" "),t("li",[e._v("Follow the steps described in the "),t("a",{attrs:{href:"#donttrust"}},[e._v("Don't trust, verify!")]),e._v(" section for each snapshot you want to sign.")]),e._v(" "),t("li",[e._v("Create a file with the same format as "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/utxo-sets",target:"_blank",rel:"noopener noreferrer"}},[e._v("utxo-sets"),t("OutboundLink")],1),e._v(" with the snapshots you validated. (Let's call this file "),t("code",[e._v("YOU.utxo-sets")]),e._v(")")]),e._v(" "),t("li",[e._v("Run the following command line")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker/contrib/FastSync\nkeybase pgp sign -i YOU.utxo-sets -c -t -o sigs/YOU.utxo-sets.asc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" YOU.utxo-sets\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" sigs/YOU.utxo-sets.asc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Add YOU utxo-set signature"')]),e._v(" --all\n")])])]),t("p",[e._v("And make a pull request to "),t("code",[e._v("btcpayserver-docker")]),e._v(" repository.")]),e._v(" "),t("h3",{attrs:{id:"where-can-i-download-utxo-set-snapshots"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-download-utxo-set-snapshots"}},[e._v("#")]),e._v(" Where can I download UTXO set snapshots")]),e._v(" "),t("p",[e._v("You should not need to do this because "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/load-utxo-set.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("load-utxo-set.sh"),t("OutboundLink")],1),e._v(" will do the hard work for you.")]),e._v(" "),t("p",[e._v("But if you want, browse on "),t("a",{attrs:{href:"http://utxosets.blob.core.windows.net/public?restype=container&comp=list&include=metadata",target:"_blank",rel:"noopener noreferrer"}},[e._v("this listing"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Select the snapshot you want, and download it by querying "),t("code",[e._v("http://utxosets.blob.core.windows.net/public/{blobName}")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"how-can-i-create-my-own-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-create-my-own-snapshot"}},[e._v("#")]),e._v(" How can I create my own snapshot?")]),e._v(" "),t("p",[e._v("Assuming you have a node running on a docker deployment of BTCPay Server, you need to run "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/contrib/FastSync/save-utxo-set.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("save-utxo-set.sh"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("This script shows the steps to create an archive of the current UTXO Set\nIt will:")]),e._v(" "),t("ol",[t("li",[e._v("Shutdown BTCPay Server")]),e._v(" "),t("li",[e._v("Start bitcoind")]),e._v(" "),t("li",[e._v("Prune it to up to 289 blocks from the tip")]),e._v(" "),t("li",[e._v("Stop bitcoind")]),e._v(" "),t("li",[e._v("Archive in a tarball the blocks and chainstate directories")]),e._v(" "),t("li",[e._v("Restart BTCPay")]),e._v(" "),t("li",[e._v("If "),t("code",[e._v("AZURE_STORAGE_CONNECTION_STRING")]),e._v(" is set, then upload to azure storage and make the blob public else print hash and tarball")])]),e._v(" "),t("h3",{attrs:{id:"how-can-i-do-this-for-my-altcoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-do-this-for-my-altcoin"}},[e._v("#")]),e._v(" How can I do this for my altcoin?")]),e._v(" "),t("p",[e._v("Your altcoin does not need it. Almost nobody uses it compared to bitcoin.")]),e._v(" "),t("p",[e._v("However, if you insist follow what we did for Bitcoin, we can't handhold you on this.")]),e._v(" "),t("h3",{attrs:{id:"do-you-plan-to-destroy-bitcoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-you-plan-to-destroy-bitcoin"}},[e._v("#")]),e._v(" Do you plan to destroy Bitcoin?")]),e._v(" "),t("p",[e._v("This feature may be controversial because of the risk that almost nobody will follow the "),t("a",{attrs:{href:"#donttrust"}},[e._v("Don't trust, verify!")]),e._v(" step.")]),e._v(" "),t("p",[e._v("What if somebody starts spreading a corrupted snapshot on the wild scale?")]),e._v(" "),t("p",[e._v("I think this issue can be mitigated at the social layer. If several people start using social media to spread their "),t("code",[e._v("bitcoin-cli getutxosetinfo")]),e._v(" every 10 000 blocks, any corrupt snapshot would be soon detected. We plan to make expose the hash via "),t("code",[e._v("BTCPayServer")]),e._v(" and make it easy for people to share.")]),e._v(" "),t("h3",{attrs:{id:"why-you-dont-just-make-btcpayserver-rely-on-spv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-you-dont-just-make-btcpayserver-rely-on-spv"}},[e._v("#")]),e._v(" Why you don't just: Make BTCPayServer rely on SPV")]),e._v(" "),t("p",[e._v("All SPV solution brings a systemic risk to Bitcoin. Suppose everybody relies on SPV to accept payment, and miners want to change consensus rules. In that case, you will have no leverage as an individual or a community to decide against.")]),e._v(" "),t("p",[e._v("Even with "),t("code",[e._v("UTXO Set snapshots")]),e._v(", you continue to validate consensus rules from the block of the snapshot.")]),e._v(" "),t("h3",{attrs:{id:"why-you-dont-just-make-btcpayserver-rely-on-an-external-trusted-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-you-dont-just-make-btcpayserver-rely-on-an-external-trusted-node"}},[e._v("#")]),e._v(" Why you don't just: Make BTCPayServer rely on an external trusted node")]),e._v(" "),t("p",[e._v("Why not just host BTCPayServer on the raspberry pi, but the full bitcoin node on another machine?")]),e._v(" "),t("p",[e._v("For two reasons:")]),e._v(" "),t("p",[e._v("First, "),t("code",[e._v("BTCPayServer")]),e._v(" is trying to reduce the technical barriers to operating payments on your own. Running on an external node means that the user needs the technical skills to set it up.")]),e._v(" "),t("p",[t("code",[e._v("BTCPayServer")]),e._v(" also relies on Bitcoin's RPC, which is not meant to be exposed on the internet. We can't see a simple enough solution that would allow normal people to run an external node elsewhere.")]),e._v(" "),t("p",[e._v("The second reason is reliability: You want your service to be self-contained. If you host a node on another server, and for some reason, this Server goes down, then your "),t("code",[e._v("BTCPayServer")]),e._v(" hosted on the raspberry PI will also cease to function.")])])}),[],!1,null,null,null);t.default=a.exports}}]);