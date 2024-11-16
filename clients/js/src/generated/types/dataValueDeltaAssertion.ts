/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  i128,
  i16,
  i32,
  i64,
  struct,
  u16,
} from '@metaplex-foundation/umi/serializers';
import {
  EquatableOperator,
  EquatableOperatorArgs,
  IntegerOperator,
  IntegerOperatorArgs,
  getEquatableOperatorSerializer,
  getIntegerOperatorSerializer,
} from '.';

export type DataValueDeltaAssertion =
  | { __kind: 'U8'; value: number; operator: IntegerOperator }
  | { __kind: 'I8'; value: number; operator: IntegerOperator }
  | { __kind: 'U16'; value: number; operator: IntegerOperator }
  | { __kind: 'I16'; value: number; operator: IntegerOperator }
  | { __kind: 'U32'; value: bigint; operator: IntegerOperator }
  | { __kind: 'I32'; value: bigint; operator: IntegerOperator }
  | { __kind: 'U64'; value: bigint; operator: IntegerOperator }
  | { __kind: 'I64'; value: bigint; operator: IntegerOperator }
  | { __kind: 'Bytes'; length: number; operator: EquatableOperator };

export type DataValueDeltaAssertionArgs =
  | { __kind: 'U8'; value: number; operator: IntegerOperatorArgs }
  | { __kind: 'I8'; value: number; operator: IntegerOperatorArgs }
  | { __kind: 'U16'; value: number; operator: IntegerOperatorArgs }
  | { __kind: 'I16'; value: number; operator: IntegerOperatorArgs }
  | { __kind: 'U32'; value: number | bigint; operator: IntegerOperatorArgs }
  | { __kind: 'I32'; value: number | bigint; operator: IntegerOperatorArgs }
  | { __kind: 'U64'; value: number | bigint; operator: IntegerOperatorArgs }
  | { __kind: 'I64'; value: number | bigint; operator: IntegerOperatorArgs }
  | { __kind: 'Bytes'; length: number; operator: EquatableOperatorArgs };

export function getDataValueDeltaAssertionSerializer(): Serializer<
  DataValueDeltaAssertionArgs,
  DataValueDeltaAssertion
> {
  return dataEnum<DataValueDeltaAssertion>(
    [
      [
        'U8',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'U8'>>([
          ['value', i16()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'I8',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'I8'>>([
          ['value', i16()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'U16',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'U16'>>([
          ['value', i32()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'I16',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'I16'>>([
          ['value', i32()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'U32',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'U32'>>([
          ['value', i64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'I32',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'I32'>>([
          ['value', i64()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'U64',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'U64'>>([
          ['value', i128()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'I64',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'I64'>>([
          ['value', i128()],
          ['operator', getIntegerOperatorSerializer()],
        ]),
      ],
      [
        'Bytes',
        struct<GetDataEnumKindContent<DataValueDeltaAssertion, 'Bytes'>>([
          ['length', u16()],
          ['operator', getEquatableOperatorSerializer()],
        ]),
      ],
    ],
    { description: 'DataValueDeltaAssertion' }
  ) as Serializer<DataValueDeltaAssertionArgs, DataValueDeltaAssertion>;
}

// Data Enum Helpers.
export function dataValueDeltaAssertion(
  kind: 'U8',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'U8'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'U8'>;
export function dataValueDeltaAssertion(
  kind: 'I8',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'I8'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'I8'>;
export function dataValueDeltaAssertion(
  kind: 'U16',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'U16'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'U16'>;
export function dataValueDeltaAssertion(
  kind: 'I16',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'I16'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'I16'>;
export function dataValueDeltaAssertion(
  kind: 'U32',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'U32'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'U32'>;
export function dataValueDeltaAssertion(
  kind: 'I32',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'I32'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'I32'>;
export function dataValueDeltaAssertion(
  kind: 'U64',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'U64'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'U64'>;
export function dataValueDeltaAssertion(
  kind: 'I64',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'I64'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'I64'>;
export function dataValueDeltaAssertion(
  kind: 'Bytes',
  data: GetDataEnumKindContent<DataValueDeltaAssertionArgs, 'Bytes'>
): GetDataEnumKind<DataValueDeltaAssertionArgs, 'Bytes'>;
export function dataValueDeltaAssertion<
  K extends DataValueDeltaAssertionArgs['__kind'],
>(kind: K, data?: any): Extract<DataValueDeltaAssertionArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isDataValueDeltaAssertion<
  K extends DataValueDeltaAssertion['__kind'],
>(
  kind: K,
  value: DataValueDeltaAssertion
): value is DataValueDeltaAssertion & { __kind: K } {
  return value.__kind === kind;
}
