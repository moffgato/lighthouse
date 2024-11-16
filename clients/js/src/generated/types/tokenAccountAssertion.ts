/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import { Option, OptionOrNullable, PublicKey } from '@metaplex-foundation/umi';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  option,
  publicKey as publicKeySerializer,
  struct,
  u64,
  u8,
  unit,
} from '@metaplex-foundation/umi/serializers';
import {
  EquatableOperator,
  EquatableOperatorArgs,
  IntegerOperator,
  IntegerOperatorArgs,
  getEquatableOperatorSerializer,
  getIntegerOperatorSerializer,
} from '.';

export type TokenAccountAssertion =
  | { __kind: 'Mint'; value: PublicKey; operator: EquatableOperator }
  | { __kind: 'Owner'; value: PublicKey; operator: EquatableOperator }
  | { __kind: 'Amount'; value: bigint; operator: IntegerOperator }
  | {
      __kind: 'Delegate';
      value: Option<PublicKey>;
      operator: EquatableOperator;
    }
  | { __kind: 'State'; value: number; operator: IntegerOperator }
  | { __kind: 'IsNative'; value: Option<bigint>; operator: EquatableOperator }
  | { __kind: 'DelegatedAmount'; value: bigint; operator: IntegerOperator }
  | {
      __kind: 'CloseAuthority';
      value: Option<PublicKey>;
      operator: EquatableOperator;
    }
  | { __kind: 'TokenAccountOwnerIsDerived' };

export type TokenAccountAssertionArgs =
  | { __kind: 'Mint'; value: PublicKey; operator: EquatableOperatorArgs }
  | { __kind: 'Owner'; value: PublicKey; operator: EquatableOperatorArgs }
  | { __kind: 'Amount'; value: number | bigint; operator: IntegerOperatorArgs }
  | {
      __kind: 'Delegate';
      value: OptionOrNullable<PublicKey>;
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
      value: OptionOrNullable<PublicKey>;
      operator: EquatableOperatorArgs;
    }
  | { __kind: 'TokenAccountOwnerIsDerived' };

export function getTokenAccountAssertionSerializer(): Serializer<
  TokenAccountAssertionArgs,
  TokenAccountAssertion
> {
  return dataEnum<TokenAccountAssertion>(
    [
      [
        'Mint',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'Mint'>>([
          ['value', publicKeySerializer()],
          ['operator', getEquatableOperatorSerializer()],
        ]),
      ],
      [
        'Owner',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'Owner'>>([
          ['value', publicKeySerializer()],
          ['operator', getEquatableOperatorSerializer()],
        ]),
      ],
      [
        'Amount',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'Amount'>>([
          ['value', u64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'Delegate',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'Delegate'>>([
          ['value', option(publicKeySerializer())],
          ['operator', getEquatableOperatorSerializer()],
        ]),
      ],
      [
        'State',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'State'>>([
          ['value', u8()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'IsNative',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'IsNative'>>([
          ['value', option(u64())],
          ['operator', getEquatableOperatorSerializer()],
        ]),
      ],
      [
        'DelegatedAmount',
        struct<
          GetDataEnumKindContent<TokenAccountAssertion, 'DelegatedAmount'>
        >([
          ['value', u64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'CloseAuthority',
        struct<GetDataEnumKindContent<TokenAccountAssertion, 'CloseAuthority'>>(
          [
            ['value', option(publicKeySerializer())],
            ['operator', getEquatableOperatorSerializer()],
          ]
        ),
      ],
      ['TokenAccountOwnerIsDerived', unit()],
    ],
    { description: 'TokenAccountAssertion' }
  ) as Serializer<TokenAccountAssertionArgs, TokenAccountAssertion>;
}

// Data Enum Helpers.
export function tokenAccountAssertion(
  kind: 'Mint',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'Mint'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'Mint'>;
export function tokenAccountAssertion(
  kind: 'Owner',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'Owner'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'Owner'>;
export function tokenAccountAssertion(
  kind: 'Amount',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'Amount'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'Amount'>;
export function tokenAccountAssertion(
  kind: 'Delegate',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'Delegate'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'Delegate'>;
export function tokenAccountAssertion(
  kind: 'State',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'State'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'State'>;
export function tokenAccountAssertion(
  kind: 'IsNative',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'IsNative'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'IsNative'>;
export function tokenAccountAssertion(
  kind: 'DelegatedAmount',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'DelegatedAmount'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'DelegatedAmount'>;
export function tokenAccountAssertion(
  kind: 'CloseAuthority',
  data: GetDataEnumKindContent<TokenAccountAssertionArgs, 'CloseAuthority'>
): GetDataEnumKind<TokenAccountAssertionArgs, 'CloseAuthority'>;
export function tokenAccountAssertion(
  kind: 'TokenAccountOwnerIsDerived'
): GetDataEnumKind<TokenAccountAssertionArgs, 'TokenAccountOwnerIsDerived'>;
export function tokenAccountAssertion<
  K extends TokenAccountAssertionArgs['__kind'],
>(kind: K, data?: any): Extract<TokenAccountAssertionArgs, { __kind: K }> {
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
