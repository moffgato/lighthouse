/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
} from '@solana/web3.js';
import {
  getUpgradeableLoaderStateAssertionsDecoder,
  getUpgradeableLoaderStateAssertionsEncoder,
  type UpgradeableLoaderStateAssertions,
  type UpgradeableLoaderStateAssertionsArgs,
} from '../../hooked';
import { LIGHTHOUSE_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  LogLevel,
  getLogLevelDecoder,
  getLogLevelEncoder,
  type LogLevelArgs,
} from '../types';

export const ASSERT_UPGRADEABLE_LOADER_ACCOUNT_MULTI_DISCRIMINATOR = 14;

export function getAssertUpgradeableLoaderAccountMultiDiscriminatorBytes() {
  return getU8Encoder().encode(
    ASSERT_UPGRADEABLE_LOADER_ACCOUNT_MULTI_DISCRIMINATOR
  );
}

export type AssertUpgradeableLoaderAccountMultiInstruction<
  TProgram extends string = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetAccount extends string
        ? ReadonlyAccount<TAccountTargetAccount>
        : TAccountTargetAccount,
      ...TRemainingAccounts,
    ]
  >;

export type AssertUpgradeableLoaderAccountMultiInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertions: UpgradeableLoaderStateAssertions;
};

export type AssertUpgradeableLoaderAccountMultiInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertions: UpgradeableLoaderStateAssertionsArgs;
};

export function getAssertUpgradeableLoaderAccountMultiInstructionDataEncoder(): Encoder<AssertUpgradeableLoaderAccountMultiInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['logLevel', getLogLevelEncoder()],
      ['assertions', getUpgradeableLoaderStateAssertionsEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: ASSERT_UPGRADEABLE_LOADER_ACCOUNT_MULTI_DISCRIMINATOR,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  );
}

export function getAssertUpgradeableLoaderAccountMultiInstructionDataDecoder(): Decoder<AssertUpgradeableLoaderAccountMultiInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['logLevel', getLogLevelDecoder()],
    ['assertions', getUpgradeableLoaderStateAssertionsDecoder()],
  ]);
}

export function getAssertUpgradeableLoaderAccountMultiInstructionDataCodec(): Codec<
  AssertUpgradeableLoaderAccountMultiInstructionDataArgs,
  AssertUpgradeableLoaderAccountMultiInstructionData
> {
  return combineCodec(
    getAssertUpgradeableLoaderAccountMultiInstructionDataEncoder(),
    getAssertUpgradeableLoaderAccountMultiInstructionDataDecoder()
  );
}

export type AssertUpgradeableLoaderAccountMultiInput<
  TAccountTargetAccount extends string = string,
> = {
  /** Target account to be asserted */
  targetAccount: Address<TAccountTargetAccount>;
  logLevel?: AssertUpgradeableLoaderAccountMultiInstructionDataArgs['logLevel'];
  assertions: AssertUpgradeableLoaderAccountMultiInstructionDataArgs['assertions'];
};

export function getAssertUpgradeableLoaderAccountMultiInstruction<
  TAccountTargetAccount extends string,
  TProgramAddress extends Address = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
>(
  input: AssertUpgradeableLoaderAccountMultiInput<TAccountTargetAccount>,
  config?: { programAddress?: TProgramAddress }
): AssertUpgradeableLoaderAccountMultiInstruction<
  TProgramAddress,
  TAccountTargetAccount
> {
  // Program address.
  const programAddress = config?.programAddress ?? LIGHTHOUSE_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    targetAccount: { value: input.targetAccount ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [getAccountMeta(accounts.targetAccount)],
    programAddress,
    data: getAssertUpgradeableLoaderAccountMultiInstructionDataEncoder().encode(
      args as AssertUpgradeableLoaderAccountMultiInstructionDataArgs
    ),
  } as AssertUpgradeableLoaderAccountMultiInstruction<
    TProgramAddress,
    TAccountTargetAccount
  >;

  return instruction;
}

export type ParsedAssertUpgradeableLoaderAccountMultiInstruction<
  TProgram extends string = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Target account to be asserted */
    targetAccount: TAccountMetas[0];
  };
  data: AssertUpgradeableLoaderAccountMultiInstructionData;
};

export function parseAssertUpgradeableLoaderAccountMultiInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAssertUpgradeableLoaderAccountMultiInstruction<
  TProgram,
  TAccountMetas
> {
  if (instruction.accounts.length < 1) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      targetAccount: getNextAccount(),
    },
    data: getAssertUpgradeableLoaderAccountMultiInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
