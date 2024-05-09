/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Codec,
  Decoder,
  Encoder,
  GetDiscriminatedUnionVariant,
  GetDiscriminatedUnionVariantContent,
  combineCodec,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getStructDecoder,
  getStructEncoder,
  getTupleDecoder,
  getTupleEncoder,
} from '@solana/web3.js';
import {
  EquatableOperator,
  EquatableOperatorArgs,
  UpgradableBufferAssertion,
  UpgradableBufferAssertionArgs,
  UpgradeableLoaderStateType,
  UpgradeableLoaderStateTypeArgs,
  UpgradeableProgramAssertion,
  UpgradeableProgramAssertionArgs,
  UpgradeableProgramDataAssertion,
  UpgradeableProgramDataAssertionArgs,
  getEquatableOperatorDecoder,
  getEquatableOperatorEncoder,
  getUpgradableBufferAssertionDecoder,
  getUpgradableBufferAssertionEncoder,
  getUpgradeableLoaderStateTypeDecoder,
  getUpgradeableLoaderStateTypeEncoder,
  getUpgradeableProgramAssertionDecoder,
  getUpgradeableProgramAssertionEncoder,
  getUpgradeableProgramDataAssertionDecoder,
  getUpgradeableProgramDataAssertionEncoder,
} from '.';

export type UpgradeableLoaderStateAssertion =
  | {
      __kind: 'State';
      value: UpgradeableLoaderStateType;
      operator: EquatableOperator;
    }
  | { __kind: 'Buffer'; fields: readonly [UpgradableBufferAssertion] }
  | { __kind: 'Program'; fields: readonly [UpgradeableProgramAssertion] }
  | {
      __kind: 'ProgramData';
      fields: readonly [UpgradeableProgramDataAssertion];
    };

export type UpgradeableLoaderStateAssertionArgs =
  | {
      __kind: 'State';
      value: UpgradeableLoaderStateTypeArgs;
      operator: EquatableOperatorArgs;
    }
  | { __kind: 'Buffer'; fields: readonly [UpgradableBufferAssertionArgs] }
  | { __kind: 'Program'; fields: readonly [UpgradeableProgramAssertionArgs] }
  | {
      __kind: 'ProgramData';
      fields: readonly [UpgradeableProgramDataAssertionArgs];
    };

export function getUpgradeableLoaderStateAssertionEncoder(): Encoder<UpgradeableLoaderStateAssertionArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'State',
      getStructEncoder([
        ['value', getUpgradeableLoaderStateTypeEncoder()],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'Buffer',
      getStructEncoder([
        ['fields', getTupleEncoder([getUpgradableBufferAssertionEncoder()])],
      ]),
    ],
    [
      'Program',
      getStructEncoder([
        ['fields', getTupleEncoder([getUpgradeableProgramAssertionEncoder()])],
      ]),
    ],
    [
      'ProgramData',
      getStructEncoder([
        [
          'fields',
          getTupleEncoder([getUpgradeableProgramDataAssertionEncoder()]),
        ],
      ]),
    ],
  ]);
}

export function getUpgradeableLoaderStateAssertionDecoder(): Decoder<UpgradeableLoaderStateAssertion> {
  return getDiscriminatedUnionDecoder([
    [
      'State',
      getStructDecoder([
        ['value', getUpgradeableLoaderStateTypeDecoder()],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'Buffer',
      getStructDecoder([
        ['fields', getTupleDecoder([getUpgradableBufferAssertionDecoder()])],
      ]),
    ],
    [
      'Program',
      getStructDecoder([
        ['fields', getTupleDecoder([getUpgradeableProgramAssertionDecoder()])],
      ]),
    ],
    [
      'ProgramData',
      getStructDecoder([
        [
          'fields',
          getTupleDecoder([getUpgradeableProgramDataAssertionDecoder()]),
        ],
      ]),
    ],
  ]);
}

export function getUpgradeableLoaderStateAssertionCodec(): Codec<
  UpgradeableLoaderStateAssertionArgs,
  UpgradeableLoaderStateAssertion
> {
  return combineCodec(
    getUpgradeableLoaderStateAssertionEncoder(),
    getUpgradeableLoaderStateAssertionDecoder()
  );
}

// Data Enum Helpers.
export function upgradeableLoaderStateAssertion(
  kind: 'State',
  data: GetDiscriminatedUnionVariantContent<
    UpgradeableLoaderStateAssertionArgs,
    '__kind',
    'State'
  >
): GetDiscriminatedUnionVariant<
  UpgradeableLoaderStateAssertionArgs,
  '__kind',
  'State'
>;
export function upgradeableLoaderStateAssertion(
  kind: 'Buffer',
  data: GetDiscriminatedUnionVariantContent<
    UpgradeableLoaderStateAssertionArgs,
    '__kind',
    'Buffer'
  >['fields']
): GetDiscriminatedUnionVariant<
  UpgradeableLoaderStateAssertionArgs,
  '__kind',
  'Buffer'
>;
export function upgradeableLoaderStateAssertion(
  kind: 'Program',
  data: GetDiscriminatedUnionVariantContent<
    UpgradeableLoaderStateAssertionArgs,
    '__kind',
    'Program'
  >['fields']
): GetDiscriminatedUnionVariant<
  UpgradeableLoaderStateAssertionArgs,
  '__kind',
  'Program'
>;
export function upgradeableLoaderStateAssertion(
  kind: 'ProgramData',
  data: GetDiscriminatedUnionVariantContent<
    UpgradeableLoaderStateAssertionArgs,
    '__kind',
    'ProgramData'
  >['fields']
): GetDiscriminatedUnionVariant<
  UpgradeableLoaderStateAssertionArgs,
  '__kind',
  'ProgramData'
>;
export function upgradeableLoaderStateAssertion<
  K extends UpgradeableLoaderStateAssertionArgs['__kind'],
  Data,
>(kind: K, data?: Data) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isUpgradeableLoaderStateAssertion<
  K extends UpgradeableLoaderStateAssertion['__kind'],
>(
  kind: K,
  value: UpgradeableLoaderStateAssertion
): value is UpgradeableLoaderStateAssertion & { __kind: K } {
  return value.__kind === kind;
}
