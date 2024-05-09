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
  getArrayDecoder,
  getArrayEncoder,
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

export type AssertAccountInfoMultiInstruction<
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

export type AssertAccountInfoMultiInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertions: Array<AccountInfoAssertion>;
};

export type AssertAccountInfoMultiInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertions: Array<AccountInfoAssertionArgs>;
};

export function getAssertAccountInfoMultiInstructionDataEncoder(): Encoder<AssertAccountInfoMultiInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['logLevel', getLogLevelEncoder()],
      ['assertions', getArrayEncoder(getAccountInfoAssertionEncoder())],
    ]),
    (value) => ({
      ...value,
      discriminator: 5,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  );
}

export function getAssertAccountInfoMultiInstructionDataDecoder(): Decoder<AssertAccountInfoMultiInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['logLevel', getLogLevelDecoder()],
    ['assertions', getArrayDecoder(getAccountInfoAssertionDecoder())],
  ]);
}

export function getAssertAccountInfoMultiInstructionDataCodec(): Codec<
  AssertAccountInfoMultiInstructionDataArgs,
  AssertAccountInfoMultiInstructionData
> {
  return combineCodec(
    getAssertAccountInfoMultiInstructionDataEncoder(),
    getAssertAccountInfoMultiInstructionDataDecoder()
  );
}

export type AssertAccountInfoMultiInput<
  TAccountTargetAccount extends string = string,
> = {
  /** Target account to be asserted */
  targetAccount: Address<TAccountTargetAccount>;
  logLevel?: AssertAccountInfoMultiInstructionDataArgs['logLevel'];
  assertions: AssertAccountInfoMultiInstructionDataArgs['assertions'];
};

export function getAssertAccountInfoMultiInstruction<
  TAccountTargetAccount extends string,
>(
  input: AssertAccountInfoMultiInput<TAccountTargetAccount>
): AssertAccountInfoMultiInstruction<
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
    data: getAssertAccountInfoMultiInstructionDataEncoder().encode(
      args as AssertAccountInfoMultiInstructionDataArgs
    ),
  } as AssertAccountInfoMultiInstruction<
    typeof LIGHTHOUSE_PROGRAM_ADDRESS,
    TAccountTargetAccount
  >;

  return instruction;
}

export type ParsedAssertAccountInfoMultiInstruction<
  TProgram extends string = typeof LIGHTHOUSE_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Target account to be asserted */
    targetAccount: TAccountMetas[0];
  };
  data: AssertAccountInfoMultiInstructionData;
};

export function parseAssertAccountInfoMultiInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAssertAccountInfoMultiInstruction<TProgram, TAccountMetas> {
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
    data: getAssertAccountInfoMultiInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
