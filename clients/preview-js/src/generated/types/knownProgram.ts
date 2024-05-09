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

export enum KnownProgram {
  System,
  Token,
  Token2022,
  Rent,
  Stake,
  Vote,
  BpfLoader,
  UpgradeableLoader,
  SysvarConfig,
}

export type KnownProgramArgs = KnownProgram;

export function getKnownProgramEncoder(): Encoder<KnownProgramArgs> {
  return getEnumEncoder(KnownProgram);
}

export function getKnownProgramDecoder(): Decoder<KnownProgram> {
  return getEnumDecoder(KnownProgram);
}

export function getKnownProgramCodec(): Codec<KnownProgramArgs, KnownProgram> {
  return combineCodec(getKnownProgramEncoder(), getKnownProgramDecoder());
}
