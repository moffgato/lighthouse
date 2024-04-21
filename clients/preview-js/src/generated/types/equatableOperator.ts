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
  combineCodec,
  getScalarEnumDecoder,
  getScalarEnumEncoder,
} from '@solana/codecs';

export enum EquatableOperator {
  Equal,
  NotEqual,
}

export type EquatableOperatorArgs = EquatableOperator;

export function getEquatableOperatorEncoder(): Encoder<EquatableOperatorArgs> {
  return getScalarEnumEncoder(EquatableOperator);
}

export function getEquatableOperatorDecoder(): Decoder<EquatableOperator> {
  return getScalarEnumDecoder(EquatableOperator);
}

export function getEquatableOperatorCodec(): Codec<
  EquatableOperatorArgs,
  EquatableOperator
> {
  return combineCodec(
    getEquatableOperatorEncoder(),
    getEquatableOperatorDecoder()
  );
}