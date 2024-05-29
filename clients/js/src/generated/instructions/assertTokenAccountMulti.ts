/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  TokenAccountAssertions,
  TokenAccountAssertionsArgs,
  getTokenAccountAssertionsSerializer,
} from '../../hooked';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import { LogLevel, LogLevelArgs, getLogLevelSerializer } from '../types';

// Accounts.
export type AssertTokenAccountMultiInstructionAccounts = {
  /** Target account to be asserted */
  targetAccount: PublicKey | Pda;
};

// Data.
export type AssertTokenAccountMultiInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertions: TokenAccountAssertions;
};

export type AssertTokenAccountMultiInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertions: TokenAccountAssertionsArgs;
};

export function getAssertTokenAccountMultiInstructionDataSerializer(): Serializer<
  AssertTokenAccountMultiInstructionDataArgs,
  AssertTokenAccountMultiInstructionData
> {
  return mapSerializer<
    AssertTokenAccountMultiInstructionDataArgs,
    any,
    AssertTokenAccountMultiInstructionData
  >(
    struct<AssertTokenAccountMultiInstructionData>(
      [
        ['discriminator', u8()],
        ['logLevel', getLogLevelSerializer()],
        ['assertions', getTokenAccountAssertionsSerializer()],
      ],
      { description: 'AssertTokenAccountMultiInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 9,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  ) as Serializer<
    AssertTokenAccountMultiInstructionDataArgs,
    AssertTokenAccountMultiInstructionData
  >;
}

// Args.
export type AssertTokenAccountMultiInstructionArgs =
  AssertTokenAccountMultiInstructionDataArgs;

// Instruction.
export function assertTokenAccountMulti(
  context: Pick<Context, 'programs'>,
  input: AssertTokenAccountMultiInstructionAccounts &
    AssertTokenAccountMultiInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'lighthouse',
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
  );

  // Accounts.
  const resolvedAccounts = {
    targetAccount: {
      index: 0,
      isWritable: false as boolean,
      value: input.targetAccount ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: AssertTokenAccountMultiInstructionArgs = { ...input };

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getAssertTokenAccountMultiInstructionDataSerializer().serialize(
    resolvedArgs as AssertTokenAccountMultiInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
