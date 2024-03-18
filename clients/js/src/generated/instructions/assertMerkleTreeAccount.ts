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
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  mapEncoder,
} from '@solana/codecs';
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
  LogLevel,
  LogLevelArgs,
  MerkleTreeAssertion,
  MerkleTreeAssertionArgs,
  getLogLevelDecoder,
  getLogLevelEncoder,
  getMerkleTreeAssertionDecoder,
  getMerkleTreeAssertionEncoder,
} from '../types';

export type AssertMerkleTreeAccountInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetMerkleTree extends string | IAccountMeta<string> = string,
  TAccountRoot extends string | IAccountMeta<string> = string,
  TAccountSplAccountCompression extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetMerkleTree extends string
        ? ReadonlyAccount<TAccountTargetMerkleTree>
        : TAccountTargetMerkleTree,
      TAccountRoot extends string
        ? ReadonlyAccount<TAccountRoot>
        : TAccountRoot,
      TAccountSplAccountCompression extends string
        ? ReadonlyAccount<TAccountSplAccountCompression>
        : TAccountSplAccountCompression,
      ...TRemainingAccounts
    ]
  >;

export type AssertMerkleTreeAccountInstructionWithSigners<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetMerkleTree extends string | IAccountMeta<string> = string,
  TAccountRoot extends string | IAccountMeta<string> = string,
  TAccountSplAccountCompression extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTargetMerkleTree extends string
        ? ReadonlyAccount<TAccountTargetMerkleTree>
        : TAccountTargetMerkleTree,
      TAccountRoot extends string
        ? ReadonlyAccount<TAccountRoot>
        : TAccountRoot,
      TAccountSplAccountCompression extends string
        ? ReadonlyAccount<TAccountSplAccountCompression>
        : TAccountSplAccountCompression,
      ...TRemainingAccounts
    ]
  >;

export type AssertMerkleTreeAccountInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertion: MerkleTreeAssertion;
};

export type AssertMerkleTreeAccountInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertion: MerkleTreeAssertionArgs;
};

export function getAssertMerkleTreeAccountInstructionDataEncoder(): Encoder<AssertMerkleTreeAccountInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU8Encoder()],
      ['logLevel', getLogLevelEncoder()],
      ['assertion', getMerkleTreeAssertionEncoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: 15,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  );
}

export function getAssertMerkleTreeAccountInstructionDataDecoder(): Decoder<AssertMerkleTreeAccountInstructionData> {
  return getStructDecoder([
    ['discriminator', getU8Decoder()],
    ['logLevel', getLogLevelDecoder()],
    ['assertion', getMerkleTreeAssertionDecoder()],
  ]);
}

export function getAssertMerkleTreeAccountInstructionDataCodec(): Codec<
  AssertMerkleTreeAccountInstructionDataArgs,
  AssertMerkleTreeAccountInstructionData
> {
  return combineCodec(
    getAssertMerkleTreeAccountInstructionDataEncoder(),
    getAssertMerkleTreeAccountInstructionDataDecoder()
  );
}

export type AssertMerkleTreeAccountInput<
  TAccountTargetMerkleTree extends string,
  TAccountRoot extends string,
  TAccountSplAccountCompression extends string
> = {
  /** Target merkle tree account to be asserted */
  targetMerkleTree: Address<TAccountTargetMerkleTree>;
  /** The current root of the merkle tree */
  root: Address<TAccountRoot>;
  /** SPL account compression program */
  splAccountCompression: Address<TAccountSplAccountCompression>;
  logLevel?: AssertMerkleTreeAccountInstructionDataArgs['logLevel'];
  assertion: AssertMerkleTreeAccountInstructionDataArgs['assertion'];
};

export type AssertMerkleTreeAccountInputWithSigners<
  TAccountTargetMerkleTree extends string,
  TAccountRoot extends string,
  TAccountSplAccountCompression extends string
> = {
  /** Target merkle tree account to be asserted */
  targetMerkleTree: Address<TAccountTargetMerkleTree>;
  /** The current root of the merkle tree */
  root: Address<TAccountRoot>;
  /** SPL account compression program */
  splAccountCompression: Address<TAccountSplAccountCompression>;
  logLevel?: AssertMerkleTreeAccountInstructionDataArgs['logLevel'];
  assertion: AssertMerkleTreeAccountInstructionDataArgs['assertion'];
};

export function getAssertMerkleTreeAccountInstruction<
  TAccountTargetMerkleTree extends string,
  TAccountRoot extends string,
  TAccountSplAccountCompression extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertMerkleTreeAccountInputWithSigners<
    TAccountTargetMerkleTree,
    TAccountRoot,
    TAccountSplAccountCompression
  >
): AssertMerkleTreeAccountInstructionWithSigners<
  TProgram,
  TAccountTargetMerkleTree,
  TAccountRoot,
  TAccountSplAccountCompression
>;
export function getAssertMerkleTreeAccountInstruction<
  TAccountTargetMerkleTree extends string,
  TAccountRoot extends string,
  TAccountSplAccountCompression extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertMerkleTreeAccountInput<
    TAccountTargetMerkleTree,
    TAccountRoot,
    TAccountSplAccountCompression
  >
): AssertMerkleTreeAccountInstruction<
  TProgram,
  TAccountTargetMerkleTree,
  TAccountRoot,
  TAccountSplAccountCompression
>;
export function getAssertMerkleTreeAccountInstruction<
  TAccountTargetMerkleTree extends string,
  TAccountRoot extends string,
  TAccountSplAccountCompression extends string,
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
>(
  input: AssertMerkleTreeAccountInput<
    TAccountTargetMerkleTree,
    TAccountRoot,
    TAccountSplAccountCompression
  >
): IInstruction {
  // Program address.
  const programAddress =
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getAssertMerkleTreeAccountInstructionRaw<
      TProgram,
      TAccountTargetMerkleTree,
      TAccountRoot,
      TAccountSplAccountCompression
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    targetMerkleTree: {
      value: input.targetMerkleTree ?? null,
      isWritable: false,
    },
    root: { value: input.root ?? null, isWritable: false },
    splAccountCompression: {
      value: input.splAccountCompression ?? null,
      isWritable: false,
    },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getAssertMerkleTreeAccountInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as AssertMerkleTreeAccountInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getAssertMerkleTreeAccountInstructionRaw<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountTargetMerkleTree extends string | IAccountMeta<string> = string,
  TAccountRoot extends string | IAccountMeta<string> = string,
  TAccountSplAccountCompression extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = []
>(
  accounts: {
    targetMerkleTree: TAccountTargetMerkleTree extends string
      ? Address<TAccountTargetMerkleTree>
      : TAccountTargetMerkleTree;
    root: TAccountRoot extends string ? Address<TAccountRoot> : TAccountRoot;
    splAccountCompression: TAccountSplAccountCompression extends string
      ? Address<TAccountSplAccountCompression>
      : TAccountSplAccountCompression;
  },
  args: AssertMerkleTreeAccountInstructionDataArgs,
  programAddress: Address<TProgram> = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.targetMerkleTree, AccountRole.READONLY),
      accountMetaWithDefault(accounts.root, AccountRole.READONLY),
      accountMetaWithDefault(
        accounts.splAccountCompression,
        AccountRole.READONLY
      ),
      ...(remainingAccounts ?? []),
    ],
    data: getAssertMerkleTreeAccountInstructionDataEncoder().encode(args),
    programAddress,
  } as AssertMerkleTreeAccountInstruction<
    TProgram,
    TAccountTargetMerkleTree,
    TAccountRoot,
    TAccountSplAccountCompression,
    TRemainingAccounts
  >;
}

export type ParsedAssertMerkleTreeAccountInstruction<
  TProgram extends string = 'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[]
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Target merkle tree account to be asserted */
    targetMerkleTree: TAccountMetas[0];
    /** The current root of the merkle tree */
    root: TAccountMetas[1];
    /** SPL account compression program */
    splAccountCompression: TAccountMetas[2];
  };
  data: AssertMerkleTreeAccountInstructionData;
};

export function parseAssertMerkleTreeAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[]
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedAssertMerkleTreeAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 3) {
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
      targetMerkleTree: getNextAccount(),
      root: getNextAccount(),
      splAccountCompression: getNextAccount(),
    },
    data: getAssertMerkleTreeAccountInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}