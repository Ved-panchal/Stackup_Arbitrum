import type { Address } from "viem";
import { forumAbi } from "./generated";

const deployedAddress = process.env.NEXT_PUBLIC_DEPLOYED_CONTRACT_ADDRESS as Address;
console.log(deployedAddress);
// Type inference correctly
const ABI = forumAbi;
export { ABI, deployedAddress };
