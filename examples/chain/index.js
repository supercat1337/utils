// @ts-check

import { Chain } from "../../index.js";
import { sleep } from "../../units/helpers.js";

var root_chain = new Chain;

root_chain
    .then(async (result, ctx, chain) => {
        console.log(1);
        await sleep(1000);
        return 1;
    })
    .then(async (result, ctx, chain) => {
        console.log(2);
        await sleep(1000);
        return 2;
    })
    .then(async (result, ctx, chain) => {
        throw new Error("alsalsk");
        await sleep(1000);
        console.log(3);
        //chain.cancel();
        return 3;
    })
    .then((result, ctx, chain) => {
        console.log(4);
        return 4;
    });


async function main() {

    root_chain.run({id:1});
    root_chain.run({id:2})
}

main();