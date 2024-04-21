/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
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
  LogLevel,
  LogLevelArgs,
  SysvarClockAssertion,
  SysvarClockAssertionArgs,
  getLogLevelSerializer,
  getSysvarClockAssertionSerializer,
} from '../types';

// Data.
export type AssertSysvarClockInstructionData = {
  discriminator: number;
  logLevel: LogLevel;
  assertion: SysvarClockAssertion;
};

export type AssertSysvarClockInstructionDataArgs = {
  logLevel?: LogLevelArgs;
  assertion: SysvarClockAssertionArgs;
};

export function getAssertSysvarClockInstructionDataSerializer(): Serializer<
  AssertSysvarClockInstructionDataArgs,
  AssertSysvarClockInstructionData
> {
  return mapSerializer<
    AssertSysvarClockInstructionDataArgs,
    any,
    AssertSysvarClockInstructionData
  >(
    struct<AssertSysvarClockInstructionData>(
      [
        ['discriminator', u8()],
        ['logLevel', getLogLevelSerializer()],
        ['assertion', getSysvarClockAssertionSerializer()],
      ],
      { description: 'AssertSysvarClockInstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 14,
      logLevel: value.logLevel ?? LogLevel.Silent,
    })
  ) as Serializer<
    AssertSysvarClockInstructionDataArgs,
    AssertSysvarClockInstructionData
  >;
}

// Args.
export type AssertSysvarClockInstructionArgs =
  AssertSysvarClockInstructionDataArgs;

// Instruction.
export function assertSysvarClock(
  context: Pick<Context, 'programs'>,
  input: AssertSysvarClockInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'lighthouse',
    'L1TEVtgA75k273wWz1s6XMmDhQY5i3MwcvKb4VbZzfK'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices =
    {} satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: AssertSysvarClockInstructionArgs = { ...input };

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
  const data = getAssertSysvarClockInstructionDataSerializer().serialize(
    resolvedArgs as AssertSysvarClockInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
