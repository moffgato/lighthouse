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
  getEnumDecoder,
  getEnumEncoder,
} from '@solana/web3.js';

export enum UpgradeableLoaderStateType {
  Uninitialized,
  Buffer,
  Program,
  ProgramData,
}

export type UpgradeableLoaderStateTypeArgs = UpgradeableLoaderStateType;

export function getUpgradeableLoaderStateTypeEncoder(): Encoder<UpgradeableLoaderStateTypeArgs> {
  return getEnumEncoder(UpgradeableLoaderStateType);
}

export function getUpgradeableLoaderStateTypeDecoder(): Decoder<UpgradeableLoaderStateType> {
  return getEnumDecoder(UpgradeableLoaderStateType);
}

export function getUpgradeableLoaderStateTypeCodec(): Codec<
  UpgradeableLoaderStateTypeArgs,
  UpgradeableLoaderStateType
> {
  return combineCodec(
    getUpgradeableLoaderStateTypeEncoder(),
    getUpgradeableLoaderStateTypeDecoder()
  );
}
