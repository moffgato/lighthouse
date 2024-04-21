/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Option, OptionOrNullable, PublicKey } from '@metaplex-foundation/umi';
import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  bool,
  bytes,
  dataEnum,
  i128,
  i16,
  i32,
  i64,
  i8,
  option,
  publicKey as publicKeySerializer,
  struct,
  tuple,
  u128,
  u16,
  u32,
  u64,
  u8,
} from '@metaplex-foundation/umi/serializers';

export type AssertionResult =
  | { __kind: 'U8'; fields: [Option<number>, Option<number>, number, boolean] }
  | { __kind: 'U16'; fields: [Option<number>, Option<number>, number, boolean] }
  | { __kind: 'U32'; fields: [Option<number>, Option<number>, number, boolean] }
  | { __kind: 'U64'; fields: [Option<bigint>, Option<bigint>, number, boolean] }
  | {
      __kind: 'U128';
      fields: [Option<bigint>, Option<bigint>, number, boolean];
    }
  | { __kind: 'I8'; fields: [Option<number>, Option<number>, number, boolean] }
  | { __kind: 'I16'; fields: [Option<number>, Option<number>, number, boolean] }
  | { __kind: 'I32'; fields: [Option<number>, Option<number>, number, boolean] }
  | { __kind: 'I64'; fields: [Option<bigint>, Option<bigint>, number, boolean] }
  | {
      __kind: 'I128';
      fields: [Option<bigint>, Option<bigint>, number, boolean];
    }
  | {
      __kind: 'Pubkey';
      fields: [Option<PublicKey>, Option<PublicKey>, number, boolean];
    }
  | { __kind: 'Bytes'; fields: [Uint8Array, Uint8Array, number, boolean] }
  | {
      __kind: 'Bool';
      fields: [Option<boolean>, Option<boolean>, number, boolean];
    };

export type AssertionResultArgs =
  | {
      __kind: 'U8';
      fields: [
        OptionOrNullable<number>,
        OptionOrNullable<number>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'U16';
      fields: [
        OptionOrNullable<number>,
        OptionOrNullable<number>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'U32';
      fields: [
        OptionOrNullable<number>,
        OptionOrNullable<number>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'U64';
      fields: [
        OptionOrNullable<number | bigint>,
        OptionOrNullable<number | bigint>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'U128';
      fields: [
        OptionOrNullable<number | bigint>,
        OptionOrNullable<number | bigint>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'I8';
      fields: [
        OptionOrNullable<number>,
        OptionOrNullable<number>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'I16';
      fields: [
        OptionOrNullable<number>,
        OptionOrNullable<number>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'I32';
      fields: [
        OptionOrNullable<number>,
        OptionOrNullable<number>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'I64';
      fields: [
        OptionOrNullable<number | bigint>,
        OptionOrNullable<number | bigint>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'I128';
      fields: [
        OptionOrNullable<number | bigint>,
        OptionOrNullable<number | bigint>,
        number,
        boolean
      ];
    }
  | {
      __kind: 'Pubkey';
      fields: [
        OptionOrNullable<PublicKey>,
        OptionOrNullable<PublicKey>,
        number,
        boolean
      ];
    }
  | { __kind: 'Bytes'; fields: [Uint8Array, Uint8Array, number, boolean] }
  | {
      __kind: 'Bool';
      fields: [
        OptionOrNullable<boolean>,
        OptionOrNullable<boolean>,
        number,
        boolean
      ];
    };

export function getAssertionResultSerializer(): Serializer<
  AssertionResultArgs,
  AssertionResult
> {
  return dataEnum<AssertionResult>(
    [
      [
        'U8',
        struct<GetDataEnumKindContent<AssertionResult, 'U8'>>([
          ['fields', tuple([option(u8()), option(u8()), u8(), bool()])],
        ]),
      ],
      [
        'U16',
        struct<GetDataEnumKindContent<AssertionResult, 'U16'>>([
          ['fields', tuple([option(u16()), option(u16()), u8(), bool()])],
        ]),
      ],
      [
        'U32',
        struct<GetDataEnumKindContent<AssertionResult, 'U32'>>([
          ['fields', tuple([option(u32()), option(u32()), u8(), bool()])],
        ]),
      ],
      [
        'U64',
        struct<GetDataEnumKindContent<AssertionResult, 'U64'>>([
          ['fields', tuple([option(u64()), option(u64()), u8(), bool()])],
        ]),
      ],
      [
        'U128',
        struct<GetDataEnumKindContent<AssertionResult, 'U128'>>([
          ['fields', tuple([option(u128()), option(u128()), u8(), bool()])],
        ]),
      ],
      [
        'I8',
        struct<GetDataEnumKindContent<AssertionResult, 'I8'>>([
          ['fields', tuple([option(i8()), option(i8()), u8(), bool()])],
        ]),
      ],
      [
        'I16',
        struct<GetDataEnumKindContent<AssertionResult, 'I16'>>([
          ['fields', tuple([option(i16()), option(i16()), u8(), bool()])],
        ]),
      ],
      [
        'I32',
        struct<GetDataEnumKindContent<AssertionResult, 'I32'>>([
          ['fields', tuple([option(i32()), option(i32()), u8(), bool()])],
        ]),
      ],
      [
        'I64',
        struct<GetDataEnumKindContent<AssertionResult, 'I64'>>([
          ['fields', tuple([option(i64()), option(i64()), u8(), bool()])],
        ]),
      ],
      [
        'I128',
        struct<GetDataEnumKindContent<AssertionResult, 'I128'>>([
          ['fields', tuple([option(i128()), option(i128()), u8(), bool()])],
        ]),
      ],
      [
        'Pubkey',
        struct<GetDataEnumKindContent<AssertionResult, 'Pubkey'>>([
          [
            'fields',
            tuple([
              option(publicKeySerializer()),
              option(publicKeySerializer()),
              u8(),
              bool(),
            ]),
          ],
        ]),
      ],
      [
        'Bytes',
        struct<GetDataEnumKindContent<AssertionResult, 'Bytes'>>([
          [
            'fields',
            tuple([
              bytes({ size: u32() }),
              bytes({ size: u32() }),
              u8(),
              bool(),
            ]),
          ],
        ]),
      ],
      [
        'Bool',
        struct<GetDataEnumKindContent<AssertionResult, 'Bool'>>([
          ['fields', tuple([option(bool()), option(bool()), u8(), bool()])],
        ]),
      ],
    ],
    { description: 'AssertionResult' }
  ) as Serializer<AssertionResultArgs, AssertionResult>;
}

// Data Enum Helpers.
export function assertionResult(
  kind: 'U8',
  data: GetDataEnumKindContent<AssertionResultArgs, 'U8'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'U8'>;
export function assertionResult(
  kind: 'U16',
  data: GetDataEnumKindContent<AssertionResultArgs, 'U16'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'U16'>;
export function assertionResult(
  kind: 'U32',
  data: GetDataEnumKindContent<AssertionResultArgs, 'U32'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'U32'>;
export function assertionResult(
  kind: 'U64',
  data: GetDataEnumKindContent<AssertionResultArgs, 'U64'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'U64'>;
export function assertionResult(
  kind: 'U128',
  data: GetDataEnumKindContent<AssertionResultArgs, 'U128'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'U128'>;
export function assertionResult(
  kind: 'I8',
  data: GetDataEnumKindContent<AssertionResultArgs, 'I8'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'I8'>;
export function assertionResult(
  kind: 'I16',
  data: GetDataEnumKindContent<AssertionResultArgs, 'I16'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'I16'>;
export function assertionResult(
  kind: 'I32',
  data: GetDataEnumKindContent<AssertionResultArgs, 'I32'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'I32'>;
export function assertionResult(
  kind: 'I64',
  data: GetDataEnumKindContent<AssertionResultArgs, 'I64'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'I64'>;
export function assertionResult(
  kind: 'I128',
  data: GetDataEnumKindContent<AssertionResultArgs, 'I128'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'I128'>;
export function assertionResult(
  kind: 'Pubkey',
  data: GetDataEnumKindContent<AssertionResultArgs, 'Pubkey'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'Pubkey'>;
export function assertionResult(
  kind: 'Bytes',
  data: GetDataEnumKindContent<AssertionResultArgs, 'Bytes'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'Bytes'>;
export function assertionResult(
  kind: 'Bool',
  data: GetDataEnumKindContent<AssertionResultArgs, 'Bool'>['fields']
): GetDataEnumKind<AssertionResultArgs, 'Bool'>;
export function assertionResult<K extends AssertionResultArgs['__kind']>(
  kind: K,
  data?: any
): Extract<AssertionResultArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isAssertionResult<K extends AssertionResult['__kind']>(
  kind: K,
  value: AssertionResult
): value is AssertionResult & { __kind: K } {
  return value.__kind === kind;
}
