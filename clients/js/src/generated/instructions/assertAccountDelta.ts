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
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';
import {
  AccountDeltaAssertion,
  AccountDeltaAssertionArgs,
  LogLevel,
  LogLevelArgs,
  getAccountDeltaAssertionSerializer,
  getLogLevelSerializer,
} from '../types';

// Accounts.
export type AssertAccountDeltaInstructionAccounts = {
  /** Account A where the delta is calculated from */
  accountA: PublicKey | Pda;
  /** Account B where the delta is calculated to */
  accountB: PublicKey | Pda;
};

// Data.
export type AssertAccountDeltaInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertion: AccountDeltaAssertion;
};

export type AssertAccountDeltaInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertion: AccountDeltaAssertionArgs;
};

export function getAssertAccountDeltaInstructionDataSerializer(): Serializer<
  AssertAccountDeltaInstructionDataArgs,
  AssertAccountDeltaInstructionData
> {
  return mapSerializer<
    AssertAccountDeltaInstructionDataArgs,
    any,
    AssertAccountDeltaInstructionData
  >(
    struct<AssertAccountDeltaInstructionData>(
      [
        ['discriminator', u8()],
        ['logLevel', getLogLevelSerializer()],
        ['assertion', getAccountDeltaAssertionSerializer()],
      ],
      { description: 'AssertAccountDeltaInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 3,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  ) as Serializer<
    AssertAccountDeltaInstructionDataArgs,
    AssertAccountDeltaInstructionData
  >;
}

// Args.
export type AssertAccountDeltaInstructionArgs =
  AssertAccountDeltaInstructionDataArgs;

// Instruction.
export function assertAccountDelta(
  context: Pick<Context, 'programs'>,
  input: AssertAccountDeltaInstructionAccounts &
    AssertAccountDeltaInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'lighthouse',
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
  );

  // Accounts.
  const resolvedAccounts = {
    accountA: {
      index: 0,
      isWritable: false as boolean,
      value: input.accountA ?? null,
    },
    accountB: {
      index: 1,
      isWritable: false as boolean,
      value: input.accountB ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: AssertAccountDeltaInstructionArgs = { ...input };

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
  const data = getAssertAccountDeltaInstructionDataSerializer().serialize(
    resolvedArgs as AssertAccountDeltaInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
