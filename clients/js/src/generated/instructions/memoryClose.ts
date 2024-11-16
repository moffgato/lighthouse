/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
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

// Accounts.
export type MemoryCloseInstructionAccounts = {
  /** Lighthouse program */
  programId?: PublicKey | Pda;
  /** Payer account */
  payer?: Signer;
  /** Memory account */
  memory: PublicKey | Pda;
};

// Data.
export type MemoryCloseInstructionData = {
  discriminator: number;
  memoryId: number;
  memoryBump: number;
};

export type MemoryCloseInstructionDataArgs = {
  memoryId: number;
  memoryBump: number;
};

export function getMemoryCloseInstructionDataSerializer(): Serializer<
  MemoryCloseInstructionDataArgs,
  MemoryCloseInstructionData
> {
  return mapSerializer<
    MemoryCloseInstructionDataArgs,
    any,
    MemoryCloseInstructionData
  >(
    struct<MemoryCloseInstructionData>(
      [
        ['discriminator', u8()],
        ['memoryId', u8()],
        ['memoryBump', u8()],
      ],
      { description: 'MemoryCloseInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 1 })
  ) as Serializer<MemoryCloseInstructionDataArgs, MemoryCloseInstructionData>;
}

// Args.
export type MemoryCloseInstructionArgs = MemoryCloseInstructionDataArgs;

// Instruction.
export function memoryClose(
  context: Pick<Context, 'payer' | 'programs'>,
  input: MemoryCloseInstructionAccounts & MemoryCloseInstructionArgs
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'lighthouse',
    'L2TExMFKdjpN9kozasaurPirfHy9P8sbXoAN1qA3S95'
  );

  // Accounts.
  const resolvedAccounts = {
    programId: {
      index: 0,
      isWritable: false as boolean,
      value: input.programId ?? null,
    },
    payer: {
      index: 1,
      isWritable: true as boolean,
      value: input.payer ?? null,
    },
    memory: {
      index: 2,
      isWritable: true as boolean,
      value: input.memory ?? null,
    },
  } satisfies ResolvedAccountsWithIndices;

  // Arguments.
  const resolvedArgs: MemoryCloseInstructionArgs = { ...input };

  // Default values.
  if (!resolvedAccounts.programId.value) {
    resolvedAccounts.programId.value = programId;
    resolvedAccounts.programId.isWritable = false;
  }
  if (!resolvedAccounts.payer.value) {
    resolvedAccounts.payer.value = context.payer;
  }

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
  const data = getMemoryCloseInstructionDataSerializer().serialize(
    resolvedArgs as MemoryCloseInstructionDataArgs
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
