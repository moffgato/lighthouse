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
import { LIGHTHOUSE_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';
import {
  LogLevel,
  getLogLevelDecoder,
  getLogLevelEncoder,
  getTokenAccountAssertionDecoder,
  getTokenAccountAssertionEncoder,
  type LogLevelArgs,
  type TokenAccountAssertion,
  type TokenAccountAssertionArgs,
} from '../types';

export const ASSERT_TOKEN_ACCOUNT_DISCRIMINATOR = 9;

export function getAssertTokenAccountDiscriminatorBytes() {
  return getU8Encoder().encode(ASSERT_TOKEN_ACCOUNT_DISCRIMINATOR);
}

export type AssertTokenAccountInstruction<
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

export type AssertTokenAccountInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertion: TokenAccountAssertion;
};

export type AssertTokenAccountInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertion: TokenAccountAssertionArgs;
};

export function getAssertTokenAccountInstructionDataEncoder(): Encoder<AssertTokenAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['logLevel', getLogLevelEncoder()],
      ['assertion', getTokenAccountAssertionEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: ASSERT_TOKEN_ACCOUNT_DISCRIMINATOR,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  );
}

export function getAssertTokenAccountInstructionDataDecoder(): Decoder<AssertTokenAccountInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['logLevel', getLogLevelDecoder()],
    ['assertion', getTokenAccountAssertionDecoder()],
  ]);
}

export function getAssertTokenAccountInstructionDataCodec(): Codec<
  AssertTokenAccountInstructionDataArgs,
  AssertTokenAccountInstructionData
> {
  return combineCodec(
    getAssertTokenAccountInstructionDataEncoder(),
    getAssertTokenAccountInstructionDataDecoder()
  );
}

export type AssertTokenAccountInput<
  TAccountTargetAccount extends string = string,
> = {
  /** Target account to be asserted */
  targetAccount: Address<TAccountTargetAccount>;
  logLevel?: AssertTokenAccountInstructionDataArgs['logLevel'];
  assertion: AssertTokenAccountInstructionDataArgs['assertion'];
};

export function getAssertTokenAccountInstruction<
  TAccountTargetAccount extends string,
  TProgramAddress extends Address = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
>(
  input: AssertTokenAccountInput<TAccountTargetAccount>,
  config?: { programAddress?: TProgramAddress }
): AssertTokenAccountInstruction<TProgramAddress, TAccountTargetAccount> {
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
    data: getAssertTokenAccountInstructionDataEncoder().encode(
      args as AssertTokenAccountInstructionDataArgs
    ),
  } as AssertTokenAccountInstruction<TProgramAddress, TAccountTargetAccount>;

  return instruction;
}

export type ParsedAssertTokenAccountInstruction<
  TProgram extends string = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Target account to be asserted */
    targetAccount: TAccountMetas[0];
  };
  data: AssertTokenAccountInstructionData;
};

export function parseAssertTokenAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAssertTokenAccountInstruction<TProgram, TAccountMetas> {
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
    data: getAssertTokenAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
