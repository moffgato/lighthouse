/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  mapEncoder,
} from '@solana/codecs-core';
import {
  getArrayDecoder,
  getArrayEncoder,
  getStructDecoder,
  getStructEncoder,
} from '@solana/codecs-data-structures';
import { getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  ReadonlyAccount,
} from '@solana/instructions';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';
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
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetAccount extends string
        ? ReadonlyAccount<TAccountTargetAccount>
        : TAccountTargetAccount,
      ...TRemainingAccounts
    ]
  >;

export type AssertAccountInfoMultiInstructionWithSigners<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetAccount extends string
        ? ReadonlyAccount<TAccountTargetAccount>
        : TAccountTargetAccount,
      ...TRemainingAccounts
    ]
  >;

export type AssertAccountInfoMultiInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertions: Array<AccountInfoAssertion>;
};

export type AssertAccountInfoMultiInstructionDataArgs = {
  logLevel: LogLevelArgs;
  assertions: Array<AccountInfoAssertionArgs>;
};

export function getAssertAccountInfoMultiInstructionDataEncoder(): Encoder<AssertAccountInfoMultiInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['logLevel', getLogLevelEncoder()],
      ['assertions', getArrayEncoder(getAccountInfoAssertionEncoder())],
    ]),
    (value) => ({ ...value, discriminator: 5 })
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

export type AssertAccountInfoMultiInput<TAccountTargetAccount extends string> =
  {
    /** Target account to be asserted */
    targetAccount: Address<TAccountTargetAccount>;
    logLevel: AssertAccountInfoMultiInstructionDataArgs['logLevel'];
    assertions: AssertAccountInfoMultiInstructionDataArgs['assertions'];
  };

export type AssertAccountInfoMultiInputWithSigners<
  TAccountTargetAccount extends string
> = {
  /** Target account to be asserted */
  targetAccount: Address<TAccountTargetAccount>;
  logLevel: AssertAccountInfoMultiInstructionDataArgs['logLevel'];
  assertions: AssertAccountInfoMultiInstructionDataArgs['assertions'];
};

export function getAssertAccountInfoMultiInstruction<
  TAccountTargetAccount extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertAccountInfoMultiInputWithSigners<TAccountTargetAccount>
): AssertAccountInfoMultiInstructionWithSigners<
  TProgram,
  TAccountTargetAccount
>;
export function getAssertAccountInfoMultiInstruction<
  TAccountTargetAccount extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertAccountInfoMultiInput<TAccountTargetAccount>
): AssertAccountInfoMultiInstruction<TProgram, TAccountTargetAccount>;
export function getAssertAccountInfoMultiInstruction<
  TAccountTargetAccount extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(input: AssertAccountInfoMultiInput<TAccountTargetAccount>): IInstruction {
  // Program address.
  const programAddress =
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getAssertAccountInfoMultiInstructionRaw<
      TProgram,
      TAccountTargetAccount
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    targetAccount: { value: input.targetAccount ?? null, isWritable: false },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getAssertAccountInfoMultiInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as AssertAccountInfoMultiInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getAssertAccountInfoMultiInstructionRaw<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetAccount extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    targetAccount: TAccountTargetAccount extends string
      ? Address<TAccountTargetAccount>
      : TAccountTargetAccount;
  },
  args: AssertAccountInfoMultiInstructionDataArgs,
  programAddress: Address<TProgram> = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.targetAccount, AccountRole.READONLY),
      ...(remainingAccounts ?? []),
    ],
    data: getAssertAccountInfoMultiInstructionDataEncoder().encode(args),
    programAddress,
  } as AssertAccountInfoMultiInstruction<
    TProgram,
    TAccountTargetAccount,
    TRemainingAccounts
  >;
}

export type ParsedAssertAccountInfoMultiInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
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
  TAccountMetas extends readonly IAccountMeta[]
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
