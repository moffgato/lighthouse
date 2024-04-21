/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { LogLevel, LogLevelArgs, MintAccountAssertion, MintAccountAssertionArgs } from '../types';
export type AssertMintAccountInstructionAccounts = {
    /** Target account to be asserted */
    targetAccount: PublicKey | Pda;
};
export type AssertMintAccountInstructionData = {
    discriminator: number;
    logLevel: LogLevel;
    assertion: MintAccountAssertion;
};
export type AssertMintAccountInstructionDataArgs = {
    logLevel?: LogLevelArgs;
    assertion: MintAccountAssertionArgs;
};
export declare function getAssertMintAccountInstructionDataSerializer(): Serializer<AssertMintAccountInstructionDataArgs, AssertMintAccountInstructionData>;
export type AssertMintAccountInstructionArgs = AssertMintAccountInstructionDataArgs;
export declare function assertMintAccount(context: Pick<Context, 'programs'>, input: AssertMintAccountInstructionAccounts & AssertMintAccountInstructionArgs): TransactionBuilder;
//# sourceMappingURL=assertMintAccount.d.ts.map