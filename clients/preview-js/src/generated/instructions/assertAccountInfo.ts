/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Address,
  Codec,
  Decoder,
  Encoder,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
} from '@solana/web3.js';
import { LIGHTHOUSE_PROGRAM_ADDRESS } from '../programs';
import { ResolvedAccount, getAccountMetaFactory } from '../shared';
import {
  AccountInfoAssertion,
  AccountInfoAssertionArgs,
  LogLevel,
  LogLevelArgs,
  getAccountInfoAssertionDecoder,
  getAccountInfoAssertionEncoder,
  getLogLevelDecoder,
  getLogLevelEncoder,
} from '../types';

export type AssertAccountInfoInstruction<
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

export type AssertAccountInfoInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertion: AccountInfoAssertion;
};

export type AssertAccountInfoInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertion: AccountInfoAssertionArgs;
};

export function getAssertAccountInfoInstructionDataEncoder(): Encoder<AssertAccountInfoInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['logLevel', getLogLevelEncoder()],
      ['assertion', getAccountInfoAssertionEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: 5,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  );
}

export function getAssertAccountInfoInstructionDataDecoder(): Decoder<AssertAccountInfoInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['logLevel', getLogLevelDecoder()],
    ['assertion', getAccountInfoAssertionDecoder()],
  ]);
}

export function getAssertAccountInfoInstructionDataCodec(): Codec<
  AssertAccountInfoInstructionDataArgs,
  AssertAccountInfoInstructionData
> {
  return combineCodec(
    getAssertAccountInfoInstructionDataEncoder(),
    getAssertAccountInfoInstructionDataDecoder()
  );
}

export type AssertAccountInfoInput<
  TAccountTargetAccount extends string = string,
> = {
  /** Target account to be asserted */
  targetAccount: Address<TAccountTargetAccount>;
  logLevel?: AssertAccountInfoInstructionDataArgs['logLevel'];
  assertion: AssertAccountInfoInstructionDataArgs['assertion'];
};

export function getAssertAccountInfoInstruction<
  TAccountTargetAccount extends string,
>(
  input: AssertAccountInfoInput<TAccountTargetAccount>
): AssertAccountInfoInstruction<
  typeof LIGHTHOUSE_PROGRAM_ADDRESS,
  TAccountTargetAccount
> {
  // Program address.
  const programAddress = LIGHTHOUSE_PROGRAM_ADDRESS;

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
    data: getAssertAccountInfoInstructionDataEncoder().encode(
      args as AssertAccountInfoInstructionDataArgs
    ),
  } as AssertAccountInfoInstruction<
    typeof LIGHTHOUSE_PROGRAM_ADDRESS,
    TAccountTargetAccount
  >;

  return instruction;
}

export type ParsedAssertAccountInfoInstruction<
  TProgram extends string = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Target account to be asserted */
    targetAccount: TAccountMetas[0];
  };
  data: AssertAccountInfoInstructionData;
};

export function parseAssertAccountInfoInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAssertAccountInfoInstruction<TProgram, TAccountMetas> {
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
    data: getAssertAccountInfoInstructionDataDecoder().decode(instruction.data),
  };
}
