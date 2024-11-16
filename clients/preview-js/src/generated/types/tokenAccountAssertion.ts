/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getAddressDecoder,
  getAddressEncoder,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  getU8Decoder,
  getU8Encoder,
  getUnitDecoder,
  getUnitEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type GetDiscriminatedUnionVariant,
  type GetDiscriminatedUnionVariantContent,
  type Option,
  type OptionOrNullable,
} from '@solana/web3.js';
import {
  getEquatableOperatorDecoder,
  getEquatableOperatorEncoder,
  getIntegerOperatorDecoder,
  getIntegerOperatorEncoder,
  type EquatableOperator,
  type EquatableOperatorArgs,
  type IntegerOperator,
  type IntegerOperatorArgs,
} from '.';

export type TokenAccountAssertion =
  | { __kind: 'Mint'; value: Address; operator: EquatableOperator }
  | { __kind: 'Owner'; value: Address; operator: EquatableOperator }
  | { __kind: 'Amount'; value: bigint; operator: IntegerOperator }
  | { __kind: 'Delegate'; value: Option<Address>; operator: EquatableOperator }
  | { __kind: 'State'; value: number; operator: IntegerOperator }
  | { __kind: 'IsNative'; value: Option<bigint>; operator: EquatableOperator }
  | { __kind: 'DelegatedAmount'; value: bigint; operator: IntegerOperator }
  | {
      __kind: 'CloseAuthority';
      value: Option<Address>;
      operator: EquatableOperator;
    }
  | { __kind: 'TokenAccountOwnerIsDerived' };

export type TokenAccountAssertionArgs =
  | { __kind: 'Mint'; value: Address; operator: EquatableOperatorArgs }
  | { __kind: 'Owner'; value: Address; operator: EquatableOperatorArgs }
  | { __kind: 'Amount'; value: number | bigint; operator: IntegerOperatorArgs }
  | {
      __kind: 'Delegate';
      value: OptionOrNullable<Address>;
      operator: EquatableOperatorArgs;
    }
  | { __kind: 'State'; value: number; operator: IntegerOperatorArgs }
  | {
      __kind: 'IsNative';
      value: OptionOrNullable<number | bigint>;
      operator: EquatableOperatorArgs;
    }
  | {
      __kind: 'DelegatedAmount';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | {
      __kind: 'CloseAuthority';
      value: OptionOrNullable<Address>;
      operator: EquatableOperatorArgs;
    }
  | { __kind: 'TokenAccountOwnerIsDerived' };

export function getTokenAccountAssertionEncoder(): Encoder<TokenAccountAssertionArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'Mint',
      getStructEncoder([
        ['value', getAddressEncoder()],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'Owner',
      getStructEncoder([
        ['value', getAddressEncoder()],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'Amount',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'Delegate',
      getStructEncoder([
        ['value', getOptionEncoder(getAddressEncoder())],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'State',
      getStructEncoder([
        ['value', getU8Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'IsNative',
      getStructEncoder([
        ['value', getOptionEncoder(getU64Encoder())],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    [
      'DelegatedAmount',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'CloseAuthority',
      getStructEncoder([
        ['value', getOptionEncoder(getAddressEncoder())],
        ['operator', getEquatableOperatorEncoder()],
      ]),
    ],
    ['TokenAccountOwnerIsDerived', getUnitEncoder()],
  ]);
}

export function getTokenAccountAssertionDecoder(): Decoder<TokenAccountAssertion> {
  return getDiscriminatedUnionDecoder([
    [
      'Mint',
      getStructDecoder([
        ['value', getAddressDecoder()],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'Owner',
      getStructDecoder([
        ['value', getAddressDecoder()],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'Amount',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'Delegate',
      getStructDecoder([
        ['value', getOptionDecoder(getAddressDecoder())],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'State',
      getStructDecoder([
        ['value', getU8Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'IsNative',
      getStructDecoder([
        ['value', getOptionDecoder(getU64Decoder())],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    [
      'DelegatedAmount',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'CloseAuthority',
      getStructDecoder([
        ['value', getOptionDecoder(getAddressDecoder())],
        ['operator', getEquatableOperatorDecoder()],
      ]),
    ],
    ['TokenAccountOwnerIsDerived', getUnitDecoder()],
  ]);
}

export function getTokenAccountAssertionCodec(): Codec<
  TokenAccountAssertionArgs,
  TokenAccountAssertion
> {
  return combineCodec(
    getTokenAccountAssertionEncoder(),
    getTokenAccountAssertionDecoder()
  );
}

// Data Enum Helpers.
export function tokenAccountAssertion(
  kind: 'Mint',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'Mint'
  >
): GetDiscriminatedUnionVariant<TokenAccountAssertionArgs, '__kind', 'Mint'>;
export function tokenAccountAssertion(
  kind: 'Owner',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'Owner'
  >
): GetDiscriminatedUnionVariant<TokenAccountAssertionArgs, '__kind', 'Owner'>;
export function tokenAccountAssertion(
  kind: 'Amount',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'Amount'
  >
): GetDiscriminatedUnionVariant<TokenAccountAssertionArgs, '__kind', 'Amount'>;
export function tokenAccountAssertion(
  kind: 'Delegate',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'Delegate'
  >
): GetDiscriminatedUnionVariant<
  TokenAccountAssertionArgs,
  '__kind',
  'Delegate'
>;
export function tokenAccountAssertion(
  kind: 'State',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'State'
  >
): GetDiscriminatedUnionVariant<TokenAccountAssertionArgs, '__kind', 'State'>;
export function tokenAccountAssertion(
  kind: 'IsNative',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'IsNative'
  >
): GetDiscriminatedUnionVariant<
  TokenAccountAssertionArgs,
  '__kind',
  'IsNative'
>;
export function tokenAccountAssertion(
  kind: 'DelegatedAmount',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'DelegatedAmount'
  >
): GetDiscriminatedUnionVariant<
  TokenAccountAssertionArgs,
  '__kind',
  'DelegatedAmount'
>;
export function tokenAccountAssertion(
  kind: 'CloseAuthority',
  data: GetDiscriminatedUnionVariantContent<
    TokenAccountAssertionArgs,
    '__kind',
    'CloseAuthority'
  >
): GetDiscriminatedUnionVariant<
  TokenAccountAssertionArgs,
  '__kind',
  'CloseAuthority'
>;
export function tokenAccountAssertion(
  kind: 'TokenAccountOwnerIsDerived'
): GetDiscriminatedUnionVariant<
  TokenAccountAssertionArgs,
  '__kind',
  'TokenAccountOwnerIsDerived'
>;
export function tokenAccountAssertion<
  K extends TokenAccountAssertionArgs['__kind'],
  Data,
>(kind: K, data?: Data) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isTokenAccountAssertion<
  K extends TokenAccountAssertion['__kind'],
>(
  kind: K,
  value: TokenAccountAssertion
): value is TokenAccountAssertion & { __kind: K } {
  return value.__kind === kind;
}
