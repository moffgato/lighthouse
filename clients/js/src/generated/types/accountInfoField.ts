/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import { Serializer, scalarEnum } from '@metaplex-foundation/umi/serializers';

export enum AccountInfoField {
  Key,
  Lamports,
  DataLength,
  Owner,
  RentEpoch,
  Executable,
}

export type AccountInfoFieldArgs = AccountInfoField;

export function getAccountInfoFieldSerializer(): Serializer<
  AccountInfoFieldArgs,
  AccountInfoField
> {
  return scalarEnum<AccountInfoField>(AccountInfoField, {
    description: 'AccountInfoField',
  }) as Serializer<AccountInfoFieldArgs, AccountInfoField>;
}
