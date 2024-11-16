/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getDiscriminatedUnionDecoder,
  getDiscriminatedUnionEncoder,
  getI64Decoder,
  getI64Encoder,
  getStructDecoder,
  getStructEncoder,
  getU64Decoder,
  getU64Encoder,
  type Codec,
  type Decoder,
  type Encoder,
  type GetDiscriminatedUnionVariant,
  type GetDiscriminatedUnionVariantContent,
} from '@solana/web3.js';
import {
  getIntegerOperatorDecoder,
  getIntegerOperatorEncoder,
  type IntegerOperator,
  type IntegerOperatorArgs,
} from '.';

export type SysvarClockAssertion =
  | { __kind: 'Slot'; value: bigint; operator: IntegerOperator }
  | { __kind: 'EpochStartTimestamp'; value: bigint; operator: IntegerOperator }
  | { __kind: 'Epoch'; value: bigint; operator: IntegerOperator }
  | { __kind: 'LeaderScheduleEpoch'; value: bigint; operator: IntegerOperator }
  | { __kind: 'UnixTimestamp'; value: bigint; operator: IntegerOperator };

export type SysvarClockAssertionArgs =
  | { __kind: 'Slot'; value: number | bigint; operator: IntegerOperatorArgs }
  | {
      __kind: 'EpochStartTimestamp';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | { __kind: 'Epoch'; value: number | bigint; operator: IntegerOperatorArgs }
  | {
      __kind: 'LeaderScheduleEpoch';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    }
  | {
      __kind: 'UnixTimestamp';
      value: number | bigint;
      operator: IntegerOperatorArgs;
    };

export function getSysvarClockAssertionEncoder(): Encoder<SysvarClockAssertionArgs> {
  return getDiscriminatedUnionEncoder([
    [
      'Slot',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'EpochStartTimestamp',
      getStructEncoder([
        ['value', getI64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'Epoch',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'LeaderScheduleEpoch',
      getStructEncoder([
        ['value', getU64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
    [
      'UnixTimestamp',
      getStructEncoder([
        ['value', getI64Encoder()],
        ['operator', getIntegerOperatorEncoder()],
      ]),
    ],
  ]);
}

export function getSysvarClockAssertionDecoder(): Decoder<SysvarClockAssertion> {
  return getDiscriminatedUnionDecoder([
    [
      'Slot',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'EpochStartTimestamp',
      getStructDecoder([
        ['value', getI64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'Epoch',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'LeaderScheduleEpoch',
      getStructDecoder([
        ['value', getU64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
    [
      'UnixTimestamp',
      getStructDecoder([
        ['value', getI64Decoder()],
        ['operator', getIntegerOperatorDecoder()],
      ]),
    ],
  ]);
}

export function getSysvarClockAssertionCodec(): Codec<
  SysvarClockAssertionArgs,
  SysvarClockAssertion
> {
  return combineCodec(
    getSysvarClockAssertionEncoder(),
    getSysvarClockAssertionDecoder()
  );
}

// Data Enum Helpers.
export function sysvarClockAssertion(
  kind: 'Slot',
  data: GetDiscriminatedUnionVariantContent<
    SysvarClockAssertionArgs,
    '__kind',
    'Slot'
  >
): GetDiscriminatedUnionVariant<SysvarClockAssertionArgs, '__kind', 'Slot'>;
export function sysvarClockAssertion(
  kind: 'EpochStartTimestamp',
  data: GetDiscriminatedUnionVariantContent<
    SysvarClockAssertionArgs,
    '__kind',
    'EpochStartTimestamp'
  >
): GetDiscriminatedUnionVariant<
  SysvarClockAssertionArgs,
  '__kind',
  'EpochStartTimestamp'
>;
export function sysvarClockAssertion(
  kind: 'Epoch',
  data: GetDiscriminatedUnionVariantContent<
    SysvarClockAssertionArgs,
    '__kind',
    'Epoch'
  >
): GetDiscriminatedUnionVariant<SysvarClockAssertionArgs, '__kind', 'Epoch'>;
export function sysvarClockAssertion(
  kind: 'LeaderScheduleEpoch',
  data: GetDiscriminatedUnionVariantContent<
    SysvarClockAssertionArgs,
    '__kind',
    'LeaderScheduleEpoch'
  >
): GetDiscriminatedUnionVariant<
  SysvarClockAssertionArgs,
  '__kind',
  'LeaderScheduleEpoch'
>;
export function sysvarClockAssertion(
  kind: 'UnixTimestamp',
  data: GetDiscriminatedUnionVariantContent<
    SysvarClockAssertionArgs,
    '__kind',
    'UnixTimestamp'
  >
): GetDiscriminatedUnionVariant<
  SysvarClockAssertionArgs,
  '__kind',
  'UnixTimestamp'
>;
export function sysvarClockAssertion<
  K extends SysvarClockAssertionArgs['__kind'],
  Data,
>(kind: K, data?: Data) {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}

export function isSysvarClockAssertion<
  K extends SysvarClockAssertion['__kind'],
>(
  kind: K,
  value: SysvarClockAssertion
): value is SysvarClockAssertion & { __kind: K } {
  return value.__kind === kind;
}
