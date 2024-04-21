/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Context, Pda, PublicKey, TransactionBuilder } from '@metaplex-foundation/umi';
import { Serializer } from '@metaplex-foundation/umi/serializers';
import { LogLevel, LogLevelArgs, UpgradeableLoaderStateAssertion, UpgradeableLoaderStateAssertionArgs } from '../types';
export type AssertUpgradeableLoaderAccountInstructionAccounts = {
    /** Target account to be asserted */
    targetAccount: PublicKey | Pda;
};
export type AssertUpgradeableLoaderAccountInstructionData = {
    discriminator: number;
    logLevel: LogLevel;
    assertion: UpgradeableLoaderStateAssertion;
};
export type AssertUpgradeableLoaderAccountInstructionDataArgs = {
    logLevel?: LogLevelArgs;
    assertion: UpgradeableLoaderStateAssertionArgs;
};
export declare function getAssertUpgradeableLoaderAccountInstructionDataSerializer(): Serializer<AssertUpgradeableLoaderAccountInstructionDataArgs, AssertUpgradeableLoaderAccountInstructionData>;
export type AssertUpgradeableLoaderAccountInstructionArgs = AssertUpgradeableLoaderAccountInstructionDataArgs;
export declare function assertUpgradeableLoaderAccount(context: Pick<Context, 'programs'>, input: AssertUpgradeableLoaderAccountInstructionAccounts & AssertUpgradeableLoaderAccountInstructionArgs): TransactionBuilder;
//# sourceMappingURL=assertUpgradeableLoaderAccount.d.ts.map